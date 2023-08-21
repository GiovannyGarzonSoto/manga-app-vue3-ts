<template>
    <div class="viewer">
        <div class="pages" @click="activeWrapper">
            <div v-for="_ in pages" ref="pageViewer" class="pages__page">
            </div>
        </div>
        <div ref="wrapper" class="wrapper" @click="deactiveWrapper">
            <div class="wrapper__logo" @click="toMain">
                <img class="wrapper__img" src="../../public/logo.png" alt="logo">
                <!-- <div class="wrapper_container">
                <h3 v-if="chapter" class="wrapper__title">
                    {{ chapter?.title }}
                </h3>
            </div> -->
            </div> 

            <MenuViewer />

            <div class="wrapper__comments">
                <CommentsIcon />
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
import CommentsIcon from '../components/CommentsIcon.vue'
import MenuViewer from '../layout/MenuViewer.vue'

export default defineComponent({
    name: 'viewer',
    components: {
        CommentsIcon, MenuViewer
    },
    setup() {
        const route = useRoute()
        const pages = ref([])
        const pageViewer = ref()
        const wrapper = ref<HTMLDivElement>()
        const router: Router = useRouter()
        const isWrapperActive = ref<boolean>(false)
        const chapter = ref<ChapterI>()

        const { toMain } = useTo(router)

        const getPagesByChapter = async () => {
            const { data } = await axios.get(`/pages/chapter/${route.params.chapterId}`)
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

        const activeWrapper = () => {
            if (!isWrapperActive.value) {
                wrapper.value.style.display = 'block'
                isWrapperActive.value = true
            }
        }

        const deactiveWrapper = () => {
            if(isWrapperActive.value) {                
                wrapper.value.style.display = 'none'
                isWrapperActive.value = false
            }
        }

        onMounted(async () => {
            getPagesByChapter()
        })

        return {
            pages,
            pageViewer,
            wrapper,
            toMain,
            activeWrapper,
            deactiveWrapper,
            isWrapperActive,
            chapter,
        }
    }
})
</script>
