import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', component: HomePage, meta: { title: "Le P'tit Théo | Smoked Meat & Burgers — Sainte-Adèle" } },
  { path: '/menu', component: () => import('../pages/MenuPage.vue'), meta: { title: "Notre menu | Le P'tit Théo" } },
  { path: '/a-propos', component: () => import('../pages/AProposPage.vue'), meta: { title: "Notre histoire | Le P'tit Théo" } },
  { path: '/contact', component: () => import('../pages/ContactPage.vue'), meta: { title: "Nous trouver | Le P'tit Théo" } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || "Le P'tit Théo"
})

export default router
