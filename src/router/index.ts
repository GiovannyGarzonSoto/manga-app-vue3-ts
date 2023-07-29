import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue')
    },
    { 
        path: '/title/:id', 
        name: 'manga-title',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/MangaTitle.vue')
    },
    { 
        path: '/manga-list', 
        name: 'manga-list',
        component: () => import(/* webpackChunkName: "MangaList" */ '../pages/MangaList.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router