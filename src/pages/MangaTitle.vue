<template>
    <Nav />

    <section ref="mangaTitle" class="manga-title">
        <div v-if="author" class="manga-title__main">
            <div class="manga-title__left">
                <img ref="portrait" alt="portada" class="manga-title__portrait">
                <a v-if="!isFav" @click="addToFavs(manga._id)" class="manga-title__fav">Enviar a favoritos
                    <img class="books-icon" src="books.svg">
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
        <div class="manga-title__chapters">
            <h3 class="manga-title__title-chapters">
                Lista de Capítulos
            </h3>
            <h4 class="manga-title__title-state">
                En Hiatus
            </h4>
            <div class="manga-title__card" v-for="chapter in chapters">
                <img class="manga-title__card-image" alt="manga-page" src="getChapterPage(chapter._id)" />
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

    <Footer />
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent, onMounted, ref } from 'vue';
import { axios } from '../config';
import { useRoute } from 'vue-router';
import { MangaI, AuthorI, ChapterI } from '../interfaces'
import { useFavs } from '../hooks/useFavs';

export default defineComponent({
    name: 'manga-title',
    components: {
        Nav, Footer
    },
    setup() {
        const route = useRoute()
        const chapters = ref<ChapterI[]>()
        const manga = ref<MangaI>()
        const portrait = ref<HTMLImageElement>()
        const mangaTitle = ref<HTMLDivElement>()
        const author = ref<AuthorI>()

        const { addToFavs, removeFav, getFavs, isFav } = useFavs()

        const getManga = async () => {
            const { data } = await axios.get(`/manga/${route.params.id}`)
            manga.value = data.data
            getChaptersByManga()
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
        }

        const formattedPremiere = (premiere) => {
            const date = new Date(premiere)
            const day = date.getDate();
            const month = date.toLocaleString('es', { month: 'long' });
            const year = date.getFullYear();
            return `${day} ${month} ${year}`
        }

        const getChapterPage = async(chapterId) => {
            const {data} = await axios.get(`/pages/chapter/${chapterId}`)
            return data.data.pages[0].image
        }

        onMounted(async () => {
            await getManga()
            await getAuthor()
            getFavs(manga.value._id)
            renderManga()
        })

        return {
            manga,
            portrait,
            mangaTitle,
            author,
            chapters,
            formattedPremiere,
            getChapterPage,
            addToFavs,
            isFav,
            removeFav
        }
    }
})
</script>