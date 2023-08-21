<template>
    <div class="wrapper__menu" @click="activeMenu">
        <MenuDotsIcon />
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuDotsIcon from '../components/MenuDotsIcon.vue'

export default defineComponent({
    name: 'MenuViewer',
    components: { MenuDotsIcon},
    setup() {
        const isMenuActive = ref<boolean>(false)
        const menuContainer = ref()


        const activeMenu = () => {
            if(!isMenuActive.value){
                menuContainer.value.style.display = 'flex'
                isMenuActive.value = true
            }
        }
        return {
            activeMenu
        }
    }
})
</script>