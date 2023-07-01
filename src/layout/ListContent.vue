<template>
    <div class="list-content">
        <!-- TODO make a component -->

        <div class="list-content__search">
            <input class="list-content__search-input input" maxlength="24" type="text" placeholder="Buscar por serie o autor">
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
import { defineComponent, onMounted, ref } from 'vue';
import { axios } from '../config'

export default defineComponent({
    name: 'listContent',
    setup() {
        const mangas = ref([])

        const getMangas = async() => {
            const { data } = await axios.get('/manga')
            mangas.value = data.data
        }

        onMounted(() => {
            getMangas()
        })

        return {
            mangas,
        }
    }
})
</script>