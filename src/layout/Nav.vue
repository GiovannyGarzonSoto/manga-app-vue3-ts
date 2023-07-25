<template>
  <!-- <nav class="nav" ref="banner" :class="{ 'animated-banner': showBanner }"> -->
  <nav ref="nav" class="nav animated-banner">
    <img class="menu-icon" src="menu.svg" />
    <a @click="toMain" class="nav__logo"><img src="../../public/logo-full.png" alt="logo"></a>
    <a @click="toMain" class="nav__item">Reciente</a>
    <a class="nav__item">Destacados</a>
    <a @click="toMangaList" class="nav__item">Descubre</a>
    <a class="nav__item" href="https://medibang.com/mpc/" target="__blank">Creators</a>
    <a class="nav__item">Favoritos</a>
    <a class="nav__item" href="https://www.shonenjump.com/mangaplus/whatismangaplus/" target="__blank">Sobre</a>
    <form @submit="toMangaList" ref="searchInput" class="nav__search">
      <input class="nav__search-input input" maxlength="24" type="text" placeholder="Buscar por serie o autor">
    </form>
    <img ref="searchIcon" @click="toMangaList" class="search-icon" src="search.svg" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Nav',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const nav = ref(null)
    const searchInput = ref(null)
    const searchIcon = ref(null)

    const isMain = () => {
      console.log(route.path)
      if(route.path !== '/')   {
        nav.value.style.background = "rgba(0, 0, 0, 1)"
        nav.value.style.background = "linear-gradient(to bottom, black 16%, #0D0D0D 100%)";
        searchInput.value.style.display = "none"
        searchIcon.value.style.display = "block"
        searchIcon.value.style.opacity = "0"
      }
    }

    const toMangaList = () => {
      router.push({name: 'manga-list'})
    }
    
    const toMain = () => {
      router.push({name: 'home'})
    }

    onMounted(() => {
      isMain()
    })

    return {
      nav,
      searchInput,
      searchIcon,
      toMangaList,
      toMain
    }
  }
})
</script>

<!-- <style src="../scss/layout/_nav.scss"></style> -->