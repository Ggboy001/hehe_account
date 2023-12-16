import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/account/Account.vue'
import Ticket from '../views/ticket/Ticket.vue'
import Post from '../views/post/Post.vue'
import User from '../views/user/User.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'
import Justify from '../views/home/Justify.vue'
import Analysis from '../views/home/Analysis.vue'
import Share from '../views/home/Share.vue'
import Show from '../views/home/Show.vue'
const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: 'justify',
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
                path: 'share',
                component: Share
            },
            {
                path: 'show',
                component: Show
            }
        ]
    },
    {
        path: '/account',
        component: Account
    },
    {
        path: '/ticket',
        component: Ticket
    },
    {
        path: '/post',
        component: Post
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/register',
        component: Register
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router