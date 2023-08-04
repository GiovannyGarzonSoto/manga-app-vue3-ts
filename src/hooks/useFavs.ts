// import { ref } from "vue"

// const favs = ref([])
// const isFav = ref(false)

// export const usefavs = () => {
//     const addToFavs = () => {
//         if (!favs.value.includes(manga.value._id)) {
//             favs.value = [...favs.value, manga.value._id]
//             localStorage.setItem('favs', JSON.stringify(favs.value))
//         }
//         isFav.value = true
//     }

//     const removeFav = () => {
//         if (favs.value.includes(manga.value._id)) {
//             const newFavs = favs.value.filter(fav => fav !== manga.value._id)
//             favs.value = newFavs
//             localStorage.setItem('favs', JSON.stringify(favs.value))
//         }
//         isFav.value = false
//     }

//     const getFavs = () => {
//         if (!localStorage.getItem('favs')) {
//             localStorage.setItem('favs', JSON.stringify(favs.value))
//         } else {
//             const getFavs = localStorage.getItem('favs')
//             favs.value = JSON.parse(getFavs)
//         }
//         if(favs.value.includes(manga.value._id)) {
//             isFav.value = true
//         }
//     }

//     return {
//         addToFavs,
//         removeToFavs,
//         getFavs
//     }
// }