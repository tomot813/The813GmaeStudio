import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'
import ProfilePage from './pages/ProfilePage.vue'
import GameStorePage from './pages/GameStorePage.vue'




import PageOne from './pages/one.vue'
import PageTwo from './pages/two.vue'
import PageThree from './pages/three.vue'




const routes = [
    { path: "/", component: MainPage, name: "MainPage" },
    { path: "/profile", component: ProfilePage, name: "ProfilePage" },
    { path: "/store", component: GameStorePage, name: "GameStorePage" },
    { path: "/one", component: PageOne, name: "pageOne" },
    { path: "/two", component: PageTwo, name: "pageTwo" },
    { path: "/three", component: PageThree, name: "pageThree" }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes
})