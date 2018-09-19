import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Lab from '@/views/Lab.vue'
import Home from '@/views/Home.vue'
import DeviceInfo from '@/views/DeviceInfo.vue'
import DeviceRecord from '@/views/DeviceRecord.vue'

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
                   path: 'deviceinfo',
                   name: '设备基本信息',
                   component: DeviceInfo 
                },
                { 
                    path: 'devicerecord',
                    name: '设备使用记录',
                    component: DeviceRecord
                }
            ]
        }
    ],
})
