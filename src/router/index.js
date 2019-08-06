/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta:{
                ShowFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta:{
                ShowFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta:{
                ShowFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta:{
                ShowFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/Msite'
        }
    ]
})