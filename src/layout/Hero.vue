<template>
  <div class="hero-container">
    <picture class="hero">
      <template v-show="isPostersReady" v-for="poster in posters" :key="poster.id" >
        <img :src="poster.image" class="hero__item">
      </template>
    </picture>
  </div>
</template>

<script lang="ts">
import { axios } from '../config'
import { defineComponent } from 'vue'
import { onMounted, ref } from 'vue'

export default defineComponent({
  name: 'hero',
  setup() {
    const posters = ref([])
    const isPostersReady = ref(false)
    const getPosters = async() => {
      const {data} = await axios.get('/poster')
      posters.value = data.data
    }

    onMounted(async() => {
      await getPosters()
      isPostersReady.value = true
    })

    return {
      posters,
      isPostersReady
    }
  }
})
</script>

<style src="../scss/layout/_hero.scss"></style>