<template>
    <div class="container">
        <div class="social-media">
           <div class="social-media__item">
                <div class="social-media__discord-box">
                    Discord
                </div>
                <div class="social-media__facebook-box">
                    Facebook
                </div>
           </div>
           <div class="social-media__item">
            </div>
        </div>

        <div class="ranking">
            <div class="ranking-box">
                <div class="ranking-box__header">
                    <span class="ranking-box__logo"></span>
                    <h3 class="ranking-box__title">Populares</h3> 
                    <a class="ranking-box__tag tag">Ver Todo &#x276D;</a>
                </div>
                <div class="ranking-box__titles">
                    <div @mouseleave="removeClass" @mouseenter="setClass" ref="titles" v-for="manga in mangasByViews" class="ranking-box__item">
                        <img class="ranking-box__image" :src="`${manga.images.cover}`">
                        <div class="ranking-box__info">
                            <h4 class="ranking-box__name">{{ manga.title }}</h4>
                            <h4 class="ranking-box__author">{{ manga.author.name }}</h4>
                            <h4 class="ranking-box__views"> <span class="ranking-box__logo-ranking"></span>{{ manga.views }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
  name: 'Sidebar',
  setup() {
    const mangasByViews = ref([])
    const titles = ref(null)
    
    const getMangasByViews = async() => {
        const {data} = await axios.get('/manga/views')
        mangasByViews.value = data.data
        console.log("🚀 ~ file: Sidebar.vue:72 ~ getMangasByVies ~ mangasByViews.value:", mangasByViews.value)
    }

    const setClass = (e) => {
        e.target.childNodes[1].childNodes[0].classList.add('ranking-box__name-hover')
    }

    const removeClass = (e) => {
        e.target.childNodes[1].childNodes[0].classList.remove('ranking-box__name-hover')
    }

    onMounted(() => {
        getMangasByViews()
    })
   
    return {
        mangasByViews,
        titles,
        setClass,
        removeClass
    }
  }
}

</script>

<style src="../scss/layout/_sidebar.scss"></style>