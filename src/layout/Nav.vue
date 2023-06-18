<template>
  <nav class="nav" ref="banner" :class="{ 'animated-banner': showBanner }">
    <!-- <nav class="nav" ref="banner"> -->
    <a class="nav__logo"><img src="../../public/logo-full.png" alt="logo"></a>
    <a class="nav__item">Reciente</a>
    <a class="nav__item">Destacados</a>
    <a class="nav__item">Descubre</a>
    <a class="nav__item">Creators</a>
    <a class="nav__item">Favoritos</a>
    <a class="nav__item">Sobre</a>
    <div class="nav__search">
        <input class="nav__search-input input" maxlength="24" type="text" placeholder="Buscar por serie o autor">
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Nav',
  setup() {
    const router = useRouter()
    const banner = ref(null)
    const showBanner = ref(false)

    const isMainScreen = () => {
      if(router.currentRoute.value.path === '/')   {
        showBanner.value = true
      }else{
        showBanner.value = true
        banner.value.style.background = "rgba(0, 0, 0, 1)"
      }
    } 

    onMounted(() => {
      isMainScreen()
    })

    return {
      banner,
      showBanner
    }
  }
})
</script>

<!-- <style src="../scss/layout/_nav.scss"></style> -->