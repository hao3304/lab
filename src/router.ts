import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Lab from '@/views/Lab.vue'
import Home from '@/views/Home.vue'
import DeviceInfo from '@/views/DeviceInfo.vue'
import DeviceRecord from '@/views/DeviceRecord.vue'
import Material from '@/views/Material.vue'
import Laboratory from '@/views/Laboratory.vue'
import Energy from '@/views/Energy.vue'
import StudentMgr from '@/views/StudentMgr.vue'
import TeacherMgr from '@/views/TeacherMgr.vue'

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
                },
                {
                    path: 'material',
                    name: '耗材管理',
                    component: Material
                },
                {
                    path: 'laboratory',
                    name: '实验室管理',
                    component: Laboratory
                },
                {
                    path: 'energy',
                    name: '能源管理',
                    component: Energy,
                },
                {
                    path: 'studentmgr',
                    name: '学生管理',
                    component: StudentMgr,
                },
                {
                    path: 'teachermgr',
                    name: '教师管理',
                    component: TeacherMgr,
                }
            ]
        }
    ],
})
