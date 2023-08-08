<template>
    <Nav />

    <div class="content">
        <section ref="mangaTitle" class="manga-title">
        <div v-if="author" class="manga-title__main">
            <div class="manga-title__left">
                <div ref="portrait" class="manga-title__portrait"></div>
                <a v-if="!isFav" @click="addToFavs(manga._id)" class="manga-title__fav">Enviar a favoritos
                    <BooksIcon />
                </a>
                <a v-if="isFav" @click="removeFav(manga._id)" class="manga-title__fav">Favorito
                    <img class="books-icon" src="check.svg">
                </a>
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
        <div v-if="manga" class="manga-title__chapters">
            <div class="manga-title__title-chapters">
                <h3 class="manga-title__title-list">Lista de Capítulos</h3>

                <span class="manga-title__title-views">
                    <img src="../../public/eye.svg" class="manga-title__title-icon">
                    <span class="manga-title__title-number">
                        987
                    </span>
                </span>
            </div>
            <h4 v-if="manga.state === 'hiatus'" class="manga-title__title-state">
                El manga se encuentra en Hiatus
            </h4>
            <h4 v-if="manga.state === 'emission'" class="manga-title__title-state">
                Cada semana un nuevo capitulo
            </h4>
            <h4 v-if="manga.state === 'complete'" class="manga-title__title-state">
                Manga finalizado
            </h4>
            <div class="manga-title__card" v-for="chapter in chapters" @click="toViewer(chapter._id)">
                <div ref="pageChapter" v-if="chapter.pageImage"  class="manga-title__card-image"></div>
                <div class="manga-title__card-content">
                    <span class="manga-title__card-number" v-if="Number(chapter.number) < 10">#00{{ chapter.number }}</span>
                    <span class="manga-title__card-number" v-else-if="Number(chapter.number) < 100">#0{{ chapter.number
                    }}</span>
                    <span class="manga-title__card-number" v-else>#{{ chapter.number }}</span>

                    <span class="manga-title__card-title">
                        {{ chapter.title }}
                    </span>
                    <span class="manga-title__card-date">
                        {{ formattedPremiere(chapter.premiere) }}
                    </span>
                </div>
            </div>
        </div>

        <div class="manga-title__social-media">

        </div>
    </div>
    </div>

    <Footer />
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { axios } from '../config'
import { Router, useRoute, useRouter } from 'vue-router'
import { MangaI, AuthorI, ChapterI } from '../interfaces'
import { useFavs, useCompressImg, useTo } from '../hooks'
import BooksIcon from '../components/BooksIcon.vue' 

export default defineComponent({
    name: 'manga-title',
    components: {
        Nav, Footer, BooksIcon
    },
    setup() {
        const route = useRoute()
        const router: Router = useRouter()
        const chapters = ref<ChapterI[]>()
        const manga = ref<MangaI>()
        const portrait = ref<HTMLImageElement>()
        const mangaTitle = ref<HTMLDivElement>()
        const pageChapter = ref<HTMLDivElement[]>([])
        const author = ref<AuthorI>()

        const { checkFavs, addToFavs, removeFav, getFavs, isFav } = useFavs()
        const { toViewer } = useTo(router)

        const getManga = async () => {
            const { data } = await axios.get(`/manga/${route.params.id}`)
            manga.value = data.data
            await getChaptersByManga()
            chapters.value.forEach(async(chapter, i) => {
                const pageImage = await getPagesbyChapter(chapter._id)
                if(!pageImage) return
                chapters.value[i] = {...chapters.value[i], pageImage: pageImage.image}
            })
        }

        const getPagesbyChapter = async(chapterId: string) => {
            const {data} = await axios.get(`/pages/chapter/${chapterId}`)
            return data.data.pages[0]
        }

        const getChaptersByManga = async () => {
            const { data } = await axios.get(`/chapter/manga/${manga.value._id}`)
            chapters.value = data.data
        }

        const getAuthor = async () => {
            const { data } = await axios.get(`/author/${manga.value.author}`)
            author.value = data.data
        }

        const renderManga = () => {
            portrait.value.style.backgroundImage = `url(${manga.value.images.cover})`
            mangaTitle.value.style.background = `url(${manga.value.images.background}) rgba(0, 0, 0) `
            setTimeout(() => {
                pageChapter.value.forEach((e, i) =>{
                    const url = chapters.value[i].pageImage
                    const { urlCompressed } = useCompressImg(url, 5)
                    setTimeout(() => {
                        e.style.backgroundImage = `url(${urlCompressed})`
                    }, 1200*i)
                })
            }, 2400)
        }

        const formattedPremiere = (premiere: Date) => {
            const date = new Date(premiere)
            const day = date.getDate()
            const month = date.toLocaleString('es', { month: 'long' })
            const year = date.getFullYear()
            return `${day} ${month} ${year}`
        }

        onMounted(async () => {
            await getManga()
            await getAuthor()
            getFavs()
            checkFavs(manga.value._id)
            renderManga()
        })

        return {
            manga,
            portrait,
            pageChapter,
            mangaTitle,
            author,
            chapters,
            formattedPremiere,
            getPagesbyChapter,
            addToFavs,
            isFav,
            removeFav,
            toViewer,
        }
    }
})
</script>