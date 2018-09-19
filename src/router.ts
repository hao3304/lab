import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Lab from '@/views/Lab.vue'
import Home from '@/views/Home.vue'
import Device from '@/views/Device.vue'
import DeviceC1 from '@/views/DeviceC1.vue'
import DeviceC2 from '@/views/DeviceC2.vue'
import Energy from '@/views/Energy.vue'

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
            alias: '/',
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
                },
                {
                    path: 'energy',
                    name: 'energy',
                    component: Energy
                },
                {
                   path: 'device',
                   component: Device ,
                   children: [
                       {
                           path: '',
                           name: 'baseinfo',
                           component: DeviceC1
                       },
                       {
                        path: 'baserecord',
                        name: 'br',
                        component: DeviceC2
                       }
                   ]
                }
            ]
        }
    ],
})
