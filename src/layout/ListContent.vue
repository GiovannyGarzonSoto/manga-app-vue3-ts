<template>
    <div class="list-content">
        <div class="list-content__search">
            <input placeholder="Buscar por serie o autor" class="list-content__search-input" v-model="searchInput"
            maxlength="24" type="text">
        </div>

        <div class="list-content__main">
            <div @click="toTitle(manga._id)" v-show="mangas" class="list-content__title-manga" v-for="manga in filteredMangas">
                <img :src="`${manga.images.cover}`" class="list-content__image">
                <div class="list-content__info">
                    <span class="list-content__name">{{ manga.title }}</span>
                    <span class="list-content__author">{{ manga.author.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { watch, defineComponent, onMounted, ref } from 'vue';
import { MangaI } from '../interfaces'
import { axios } from '../config'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'listContent',
    setup() {
        const router = useRouter()
        const mangas = ref<MangaI[]>([])
        const searchInput = ref('')
        const filteredMangas = ref<MangaI[]>([])

        watch(searchInput, (n, o) => {
            let timer

            if (n !== o ) {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    filterMangas();
                }, 500);
            }
        })

        const filterMangas = () => {
            const term = searchInput.value.toLowerCase();
            if(term) {
                filteredMangas.value = mangas.value.filter(item => item.title.toLowerCase().includes(term));
            }
            if(!term) {
                filteredMangas.value = mangas.value
            }
        }

        const toTitle = (id) => {
            router.push({ name: 'manga-title', params: { id } })
        }

        const getMangas = async () => {
            const { data } = await axios.get('/manga')
            mangas.value = data.data
            filteredMangas.value = data.data
        }

        onMounted(() => {
            getMangas()
        })

        return {
            mangas,
            searchInput,
            toTitle,
            filteredMangas
        }
    }
})
</script>