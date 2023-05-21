<template>
    <Nav/>
    <Hero/>

    <section>
        <form class="form">
            <input class="form__input input" maxlength="24" type="text" placeholder="Buscar por serie o autor">            <button class="button">Agregar</button>
        </form>
    </section>
    
    <Footer/>
</template>

<script setup>
import Nav from '../layout/Nav.vue'
import Hero from '../layout/Hero.vue'
import Footer from '../layout/Footer.vue'

name: 'Admin'
</script>