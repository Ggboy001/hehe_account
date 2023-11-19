import { createRouter } from 'vue-router'


const routes = [
    { path: '/' }
]


const router = createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router