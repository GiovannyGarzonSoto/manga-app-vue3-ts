<template>
    <Nav />

    <main class="top-ranking">
        <div @click="toTitle(manga._id)" ref="titles" v-for="manga in mangasByViews" class="top-ranking-box__item">
            <img class="top-ranking-box__image" :src="`${manga.images.cover}`">
            <div class="top-ranking-box__info">
                <h4 class="top-ranking-box__name">{{ manga.title }}</h4>
                <h4 class="top-ranking-box__author">{{ manga.author.name }}</h4>
                <h4 class="top-ranking-box__views"> <span class="ranking-box__logo-ranking"></span>{{ manga.views }}
                </h4>
            </div>
        </div>
    </main>

    <Footer />
</template>
 
<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { axios } from '../config'
import { defineComponent, onMounted, ref } from 'vue'
import { useTo } from '../hooks'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Ranking',
    components: {
        Nav, Footer
    },
    setup() {
        const mangasByViews = ref([])
        const router = useRouter()

        const { toTitle } = useTo(router)

        const getMangasByViews = async () => {
            const { data } = await axios.get('/manga/views')
            mangasByViews.value = data.data
        }

        onMounted(() => {
            getMangasByViews()
        })

        return {
            mangasByViews,
            toTitle
        }
    }
})
</script>
 
<style lang="scss"></style>