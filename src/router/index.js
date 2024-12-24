import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MoviesView from '@/views/MoviesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
        },
        {
            path: '/movies',
            name: 'Movies',
            component: MoviesView,
        },
	

    ],
})

export default router
