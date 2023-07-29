<template>
    <Nav />

    <section ref="mangaTitle" class="manga-title">
        <div  v-if="author" class="manga-title__main">
            <div class="manga-title__left">
                <img ref="portrait" alt="portada" class="manga-title__portrait">
                <a @click="addToFavs" class="manga-title__fav">Enviar a favoritos <img class="books-icon" src="books.svg"> </a>
            </div>

            <div class="manga-title__right">
                <div class="manga-title__header">
                    <h2 class="manga-title__name">{{ manga.title }}</h2>
                    <h3 class="manga-title__author">{{ author.name }}</h3>
                </div>
                <div class="manga-title__desc">
                    <span class="manga-title__argument">Argumento</span>
                    <p class="manga-title__text">{{ manga.description }}</p>
                </div>
            </div>
        </div>

    </section>
    <div class="manga-title__content">
        <div class="manga-title__chapters">
            <h3 class="manga-title__title-chapters">
                Lista de Capítulos
            </h3>
            <h4 class="manga-title__title-state">
                En Hiatus
            </h4>
            <div class="manga-title__card" v-for="chapter in chapters">
                <img class="manga-title__card-image" alt="manga-page" />
                <div class="manga-title__card-content">
                    <span class="manga-title__card-number">#001</span>
                    <span class="manga-title__card-title">
                        Comienza el romance
                    </span>
                    <span class="manga-title__card-date">
                        20 Enero 2020
                    </span>
                </div>
            </div>
        </div>

        <div class="manga-title__social-media">

        </div>
    </div>

    <Footer />
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent, onMounted, ref, watch } from 'vue';
import { axios } from '../config';
import { useRoute } from 'vue-router';
import { MangaI, AuthorI, ChapterI } from '../interfaces'

export default defineComponent({
    name: 'manga-title',
    components: {
        Nav, Footer
    },
    setup() {
        const route = useRoute()
        const chapter = ref<ChapterI>()
        const manga = ref<MangaI>()
        const portrait = ref<HTMLImageElement>()
        const mangaTitle = ref<HTMLImageElement>()
        const author = ref<AuthorI>()
        const favs = ref([])

        const getChapter = async () => {
            const { data } = await axios.get(`/chapter/${route.params.id}`)
            chapter.value = data.data
        }

        const getManga = async() => {
            const { data } = await axios.get(`/manga/${chapter.value.manga}`)
            manga.value = data.data
        }   

        const getChaptersByManga = () => {
            console.log(manga.value, 'getChaptersByManga')
        }

        const getAuthor = async() => {
            const { data } = await axios.get(`/author/${manga.value.author}`)
            author.value = data.data
        }

        const renderManga = () => {
            portrait.value.style.backgroundImage = `url(${manga.value.images.cover})`
            mangaTitle.value.style.background = `url(${manga.value.images.background}) rgba(0, 0, 0) `
        }

        const addToFavs = () => {
            if(!favs.value.includes(route.params.id)){
                // favs.value = [...favs.value, route.params.id]
                // console.log(favs.value)
                // localStorage.setItem('favs', favs.value)
            }
        }

        const removeToFavs = () => {
            if(favs.value.includes(route.params.id)){
                // favs.value = [...favs.value, route.params.id]
                // console.log(favs.value)
                // localStorage.setItem('favs', favs.value)
            }
        }

        const getFavs = () => {
            console.log(localStorage.getItem('favs'))
            console.log(favs.value)
        }

        onMounted(async() => {
            getFavs()
            await getChapter()
            await getManga()
            await getAuthor()
            getChaptersByManga()
            renderManga()
        })

        watch(favs, (n, _) => {
            if(n) {
                console.log(favs,'watch: fav')
            }
        })

        return {    
            manga,
            portrait,
            mangaTitle,
            author,
            addToFavs,
            removeToFavs
        }
    }
})
</script>