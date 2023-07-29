<template>
    <Nav />

    <section ref="mangaTitle" class="manga-title">
        <div v-if="author" class="manga-title__main">
            <div class="manga-title__left">
                <img ref="portrait" class="manga-title__portrait">
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

        <div class="title__content">

        </div>
    </section>

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

        const getChapters = async () => {
            const { data } = await axios.get(`/chapter/${route.params.id}`)
            chapter.value = data.data
        }

        const getManga = async() => {
            const { data } = await axios.get(`/manga/${chapter.value.manga}`)
            manga.value = data.data
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
            addToFavs()
            await getChapters()
            await getManga()
            await getAuthor()
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