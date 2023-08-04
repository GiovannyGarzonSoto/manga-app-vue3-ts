import { Router } from "vue-router"

export const useTo = (router: Router) => {
    const toTopRanking = () => {
        router.push({ name: 'top-ranking' })
    }

    const toTitle = (id: string) => {
        router.push({ name: 'manga-title', params: { id } })
    }

    const toMangaList = () => {
        router.push({ name: 'manga-list' })
    }

    const toMain = () => {
        router.push({ name: 'home' })
    }

    const toFavorites = () => {
        router.push({ name: 'favorites' })
    }

    return {
        toTopRanking,
        toTitle,
        toMangaList,
        toFavorites,
        toMain
    }
}