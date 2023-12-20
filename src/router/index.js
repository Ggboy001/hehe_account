import { createRouter, createWebHashHistory } from 'vue-router'
import Justify from '../views/home/Justify.vue'
import Analysis from '../views/home/Analysis.vue'
import Share from '../views/home/Share.vue'
import Show from '../views/home/Show.vue'
const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: '/justify',
                component: Justify

            },
            {
                path: '/',
                redirect: '/justify'
            },
            {
                path: 'analysis',
                component: Analysis
            },
            {
                path: '/share',
                component: Share
            },
            {
                path: '/show',
                component: Show
            }
        ]
    },
    {
        path: '/account',
        component: () => import('../views/account/Account.vue')
    },
    {
        path: '/ticket',
        component: () => import('../views/ticket/Ticket.vue')
    },
    {
        path: '/post',
        component: () => import('../views/post/Post.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login/Login.vue'),
        children: [
            {
                path: 'password',
                component: () => import('../views/login/LoginByPassword.vue')
            },
            {
                path: 'code',
                component: () => import('../views/login/LoginByCode.vue')
            },
            {
                path: 'register',
                component: () => import('../views/login/Register.vue')
            },
            {
                path: 'resetpsw',
                component: () => import('../views/login/ForgetPassword.vue')
            }
        ]
    },
    {
        path: '/user',
        component: () => import('../views/account/Account.vue')
    },

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router