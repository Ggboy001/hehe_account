import VueRouter from 'vue-router'


const routes = [
    { path: '/' }
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router