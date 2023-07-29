<template>
    <div class="list-content">
        <!-- TODO make a component -->

        <div class="list-content__search">
            <input placeholder="Buscar por serie o autor" class="list-content__search-input" v-model="searchInput" maxlength="24" type="text">
        </div>

        <div class="list-content__main">
            <div v-show="mangas" class="list-content__title-manga" v-for="manga in mangas">
                <img :src="`${manga.images.cover}`" class="list-content__image">
                <div class="list-content__info">
                    <span class="list-content__name">{{ manga.title}}</span>
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

export default defineComponent({
    name: 'listContent',
    setup() {
        const mangas = ref<MangaI[]>([])
        const searchInput = ref('')

        watch(searchInput, (n, o) => {
            if(n) {
                
            }
        })

        const getMangas = async() => {
            const { data } = await axios.get('/manga')
            mangas.value = data.data
        }

        onMounted(() => {
            getMangas()
            console.log(searchInput.value, 'test')
        })

        return {
            mangas,
            searchInput
        }
    }
})
</script>