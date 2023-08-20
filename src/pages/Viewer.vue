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
            <div class="wrapper__menu" @click="activeMenu">
                <MenuDotsIcon  />
                <div class="wrapper__container" ref="menuContainer">
                    <h3 class="wrapper__container-title">Resolución De pagína</h3>
                    <div class="wrapper__input-group">
                        <label class="wrapper__label">
                            <input class="wrapper__input" type="radio" name="orientation">
                            Vertical
                            <span class="wrapper__radio-button"></span>
                        </label>
                        <label class="wrapper__label">
                            <input class="wrapper__input" type="radio" name="orientation">
                            Horizontal
                            <span class="wrapper__radio-button"></span>
                        </label>
                    </div>
                    <h3 class="wrapper__container-title">Dirección De Lectura</h3>
                    <div class="wrapper__input-group">
                        <div class="wrapper__input-group">
                            <label class="wrapper__label">
                                <input class="wrapper__input" type="radio" name="quality">
                                Bajo
                                <span class="wrapper__radio-button"></span>
                            </label>
                            <label class="wrapper__label">
                                <input class="wrapper__input" type="radio" name="quality">
                                Medio
                                <span class="wrapper__radio-button"></span>
                            </label>
                            <label class="wrapper__label">
                                <input class="wrapper__input" type="radio" name="quality">
                                Alto
                                <span class="wrapper__radio-button"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
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
import MenuDotsIcon from '../components/MenuDotsIcon.vue'
import CommentsIcon from '../components/CommentsIcon.vue'

export default defineComponent({
    name: 'viewer',
    components: {
        MenuDotsIcon, CommentsIcon
    },
    setup() {
        const route = useRoute()
        const pages = ref([])
        const pageViewer = ref()
        const wrapper = ref<HTMLDivElement>()
        const router: Router = useRouter()
        const isWrapperActive = ref<boolean>(false)
        const isMenuActive = ref<boolean>(false)
        const chapter = ref<ChapterI>()
        const menuContainer = ref();

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

        const activeMenu = () => {
            if(!isMenuActive.value){
                menuContainer.value.style.display = 'flex'
                isMenuActive.value = true
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
            menuContainer,
            activeMenu
        }
    }
})
</script>
