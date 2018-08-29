import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Lab from '@/views/Lab.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/main',
            name: 'main',
            component: Main
        },
        {
            path: '/lab',
            name: 'lab',
            component: Lab,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                }
            ]
        }
    ],
})
