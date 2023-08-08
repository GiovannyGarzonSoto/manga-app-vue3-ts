<template>
    <div class="viewer">
       <div class="pages">
            <div v-for="_ in pages" ref="pageViewer" class="pages__page">
            </div>
       </div>
       <div ref="wrapper" @click="toggleWrapper" class="wrapper">
        <div class="wrapper__logo" @click="toMain">
            <img class="wrapper__img" src="../../public/logo.png" alt="logo">
            <!-- <div class="wrapper_container">
                <h3 v-if="chapter" class="wrapper__title">
                    {{ chapter?.title }}
                </h3>
            </div> -->
        </div>
        <div class="wrapper__menu">
            <img src="../../public/menu-dots.svg" class="wrapper__menu-icon" alt="menu">
        </div>
        <div class="wrapper__comments">
            <img src="../../public/comments.svg" class="wrapper__comments-icon" alt="comments">
        </div>
       </div>
    </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { axios } from '../config'
import { defineComponent, onMounted, ref } from 'vue'
import { useTo } from '../hooks'
import { useRouter, Router } from 'vue-router'
import { ChapterI } from '../interfaces'

export default defineComponent({
    name: 'viewer',
    components: {
    },
    setup() {
        const route = useRoute()
        const pages = ref([])
        const pageViewer = ref()
        const wrapper = ref<HTMLDivElement>()
        const router: Router = useRouter()
        const isWrapperActive = ref(true)
        const chapter = ref<ChapterI>()

        const { toMain } = useTo(router)

        const getPagesByChapter = async() => {
            const {data} = await axios.get(`/pages/chapter/${route.params.chapterId}`)
            pages.value = data.data.pages
            chapter.value = data.data.chapter
            renderPages()
        }

        const renderPages = () => {
            setTimeout(() => {
                pageViewer.value.forEach((e, i) => {
                    e.style.backgroundImage = `url(${pages.value[i].image})`
                })
            }, 1000)
        }

        const toggleWrapper = () => {
            if(isWrapperActive) {
                isWrapperActive.value = !isWrapperActive.value
            }else{
                isWrapperActive.value = true
            }
        }
 
        onMounted(async() => {
            getPagesByChapter()   
        })

        return {
            pages,
            pageViewer,
            wrapper,
            toMain,
            toggleWrapper,
            isWrapperActive,
            chapter
        }
    }
})
</script>
