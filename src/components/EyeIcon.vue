<template>
    <img class="menu-icon" src="../../public/menu.svg" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MenuIcon',
})
</script>

<style>
.menu-icon {
    display: none;
    width: 2.4rem;
    height: 2.4rem;

    @media (width <=760px) {
        display: block;
    }
}
</style>