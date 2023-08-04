<template>
    <Nav/>

    FAVORITES

    <Footer/>
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'favorites',
    components: {
        Nav, Footer
    }
})
</script>
