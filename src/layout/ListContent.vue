<template>
    <div class="list-content">
        <!-- TODO make a component -->

        <div class="list-content__search">
            <input class="list-content__search-input input" maxlength="24" type="text" placeholder="Buscar por serie o autor">
        </div>

        <div class="list-content__main">
            <div v-show="chapters" class="list-content__title-manga" v-for="chapter in chapters">
                <img :src="`${chapter.manga.images.cover}`" class="list-content__image">
                <div class="list-content__info">
                    <span class="list-content__name">{{ chapter.manga.title}}</span>
                    <span class="list-content__author">{{ chapter.author.name }}</span>
                </div>
            </div>
            <div v-show="chapters" ref="mangaTitle" class="list-content__title-manga" v-for="chapter in chapters">
                <img ref="mangaImage" :src="`${chapter.manga.images.cover}`" class="list-content__image">
                <div class="list-content__info">
                    <span class="list-content__name">{{ chapter.manga.title}}</span>
                    <span class="list-content__author">{{ chapter.author.name }}</span>
                </div>
            </div>
            <div v-show="chapters" ref="mangaTitle" class="list-content__title-manga" v-for="chapter in chapters">
                <img ref="mangaImage" :src="`${chapter.manga.images.cover}`" class="list-content__image">
                <div class="list-content__info">
                    <span class="list-content__name">{{ chapter.manga.title}}</span>
                    <span class="list-content__author">{{ chapter.author.name }}</span>
                </div>
            </div>
            <div v-show="chapters" ref="mangaTitle" class="list-content__title-manga" v-for="chapter in chapters">
                <img ref="mangaImage" :src="`${chapter.manga.images.cover}`" class="list-content__image">
                <div class="list-content__info">
                    <span class="list-content__name">{{ chapter.manga.title}}</span>
                    <span class="list-content__author">{{ chapter.author.name }}</span>
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
        const chapters = ref([])

        const getChapters = async() => {
            const { data } = await axios.get('/chapter')
            chapters.value = data.data
        }

        onMounted(() => {
            getChapters()
        })

        return {
            chapters,
        }
    }
})
</script>