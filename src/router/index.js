import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/account/Account.vue'
import Ticket from '../views/ticket/Ticket.vue'
import Post from '../views/post/Post.vue'
import User from '../views/user/User.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'
const routes = [
    {
        path: '/',
        component: Home
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