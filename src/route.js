import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'
import ProfilePage from './pages/ProfilePage.vue'
import GameStorePage from './pages/GameStorePage.vue'
import NewsPage from './pages/NewsPage.vue'

import AboutPage from './pages/AboutPage.vue'




import PageOne from './pages/one.vue'
import PageTwo from './pages/two.vue'




const routes = [
    { path: "/", component: MainPage, name: "MainPage" },
    { path: "/profile", component: ProfilePage, name: "ProfilePage" },
    { path: "/store", component: GameStorePage, name: "GameStorePage" },
    { path: "/news", component: NewsPage, name: "NewsPage" },
    { path: "/about", component: AboutPage, name: "AboutPage" }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    }
})