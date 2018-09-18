<template>
    <div class="slider">
        <div class="slider__header">
            实验室管理系统
        </div>
        <ul class="slider__menu">
            <li v-for="menu in menus" @click="onMenuClick(menu)" :key="menu.path" class="slider__menu-item" :class="{'slider__menu-item--active': active == menu.name}">
                {{menu.name}}
                <ul v-if="!!currentMenu.children&& currentMenu.path == menu.path" class="slider__menu-item-sonitem" >
                    <li v-for="sm in currentMenu.children" :key="sm.path" @click.stop="onMenuClick(sm)" :class="{'slider__menu-item--active': active == sm.name}">
                        {{sm.name}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    interface IMenu{
        name?: string,
        path?: string,
        icon?: string,
        children?:Array<IMenu>
    }

    @Component({
        watch:{
            current(v,ov){

            }
        }
    })
    export default class Slider extends Vue {
        
        public currentMenu: IMenu = {}

        public menus: object[] = [
            {
                name: '主页',
                path: '/',
                icon: 'home'
            },
            {
                name: '设备管理',
                path: '',
                icon: 'device',
                children:[
                    {
                        name: '设备基本信息',
                        path: '/deviceinfo',
                        icon:'',
                    } ,
                    {
                        name: '设备使用记录',
                        path: '/devicerecord',
                        icon:'',
                    }      
                ]
            },
            {
                name: '耗材管理',
                path: '/material',
                icon: 'material'
            },
            {
                name: '人员管理',
                path: '/user',
                icon: 'user'
            },
            {
                name: '能源管理',
                path: '/energy',
                icon: 'energy'
            },
            {
                name: '实验室管理',
                path: '/laboratory',
                icon: 'laboratory'
            },
            {
                name: '安防管理',
                path: '/security',
                icon: 'security'
            }
        ]
        public active: string = '/home'

        public onMenuClick(menu: any): void {
            if(menu.name==this.currentMenu.name){
                this.currentMenu = {}
                this.active = ''
                return 
            }

            if(!!menu.children) {
                this.currentMenu = menu
            }
            this.active = menu.name
            if(!!menu.path) {
                this.$router.push('/lab' + menu.path)
            }
        }
    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";
    .slider {
        &__header {
            line-height: px2vh(70px);
            text-align: center;
            color: #fff;
            font-size: 18px;
        }

        &__menu {
            margin: 0;
            padding: 0;

            &-item {
                list-style: none;
                text-align: center;
                color: #fff;
                line-height: px2vh(60);
                font-size: 14px;
                cursor: pointer;
                transition: all .3s;

                &:hover {
                    background-color: rgba(255,255,255,.1);
                }

                &--active {
                    background-color: #4a89df !important;
                }
                &-sonitem {
                    list-style-type:disc;
                    list-style-position: inside;
                    background-color: #3a3f4e;
                    &>li{
                        width:100%;
                        text-align: right;
                        padding-right: 20px;
                        &:hover{
                            background-color: rgba(255,255,255,.1);
                        }
                    }
                }
            }
        }
    }
</style>