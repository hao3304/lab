<template>
    <div class="slider">
        <div class="slider__header">
            实验室管理系统
        </div>
        <ul class="slider__menu">
            <li v-for="menu in menus" @click="onMenuClick(menu)" :key="menu.path" class="slider__menu-item" :class="{'slider__menu-item--active': active == menu.path}">
                {{menu.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    @Component
    export default class Slider extends Vue {
        public menus: object[] = [
            {
                name: '主页',
                path: '/',
                icon: 'home'
            },
            {
                name: '设备管理',
                path: '/device',
                icon: 'device'
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
            this.active = menu.path
            this.$router.push('/lab' + this.active)
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
            }
        }
    }
</style>