<template>
    <Nav/>
    <div class="error404">
        <img class="error404__img" src="404.svg" alt="error404">
    </div>
    <Footer/>
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home',
    components: {
        Nav, Footer
    }

})
</script>

<style lang="scss">
    .error404{
        background: rgb(13,13,13);
        height: 70vh;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &__img{
            height:50vh;
        }
    }
</style>
