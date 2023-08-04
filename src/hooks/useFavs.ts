import { ref } from "vue"

export const useFavs = () => {
    const favs = ref([])

    const isFav = ref(false)
    
    const addToFavs = (mangaId) => {
        console.log(mangaId)
        if (!favs.value.includes(mangaId)) {
            favs.value = [...favs.value, mangaId]
            localStorage.setItem('favs', JSON.stringify(favs.value))
        }
        isFav.value = true
    }

    const removeFav = (mangaId) => {
        if (favs.value.includes(mangaId)) {
            const newFavs = favs.value.filter(fav => fav !== mangaId)
            favs.value = newFavs
            localStorage.setItem('favs', JSON.stringify(favs.value))
        }
        isFav.value = false
    }

    const getFavs = (mangaId) => {
        if (!localStorage.getItem('favs')) {
            localStorage.setItem('favs', JSON.stringify(favs.value))
        } else {
            const getFavs = localStorage.getItem('favs')
            favs.value = JSON.parse(getFavs)
        }
        if(favs.value.includes(mangaId)) {
            isFav.value = true
        }
    }

    return {
        addToFavs,
        removeFav,
        getFavs,
        isFav,
        favs
    }
}