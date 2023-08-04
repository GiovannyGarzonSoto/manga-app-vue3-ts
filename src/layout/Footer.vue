<template>
    <div class="footer">
        <img @click="toMain" class="footer__logo" src="../../public/logo.png" alt="logo">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Footer',
    setup() {
        const router = useRouter()

        const toMain = () => {
            router.push({ name: 'home' })
        }

        return {
            toMain
        }
    }
})
</script>