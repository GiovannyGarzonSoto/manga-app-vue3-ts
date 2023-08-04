const usefavs = () => {

    const addToFavs = () => {
        // if (!favs.value.includes(route.params.id)) {
        //     // favs.value = [...favs.value, route.params.id]
        //     // console.log(favs.value)
        //     // localStorage.setItem('favs', favs.value)
        // }
    }
    
    const removeToFavs = () => {
        // if (favs.value.includes(route.params.id)) {
        //     // favs.value = [...favs.value, route.params.id]
        //     // console.log(favs.value)
        //     // localStorage.setItem('favs', favs.value)
        // }
    }
    
    const getFavs = () => {
        // console.log(localStorage.getItem('favs'))
        // console.log(favs.value)
    }

    return {
        addToFavs,
        removeToFavs,
        getFavs
    }
}