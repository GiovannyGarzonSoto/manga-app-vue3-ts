<template>
    <Nav/>

    TOP RANKING

    <Footer/>
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'top-ranking',
    components: {
        Nav, Footer
    }

})
</script>
