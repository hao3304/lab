import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Lab from '@/views/Lab.vue'
import Home from '@/views/Home.vue'
import Device from '@/views/Device.vue'
import DeviceC1 from '@/views/DeviceC1.vue'
import DeviceC2 from '@/views/DeviceC2.vue'

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
                },
                {
                   path: 'device',
                   component: Device ,
                   children:[
                       {
                           path:'',
                           name:'baseinfo',
                           component: DeviceC1
                       },
                       {
                        path:'baserecord',
                        name:'br',
                        component: DeviceC2
                       }
                   ]
                }
            ]
        }
    ],
})
