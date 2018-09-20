<template>
    <div class="energy">
        <p class="energy__bread">能源管理</p>
        <div class="energy__left">
            <div class="energy__header">
                <div class="energy__header-typename">设备位置:</div>
                <div class="energy__header-list">
                    <div class="energy__header-list-header">
                        <ul>
                            <li @click="selectLab1(lab,index)" :class="{'active':index==currentIdx1}" v-for="(lab,index) in labs"
                                :key="lab.name">{{lab.name}}</li>
                        </ul>
                    </div>
                    <div class="energy__header-list-content">
                        <ul class="energy__header-list-content-items">
                            <li @click="selectLab2(lab,index)" :class="{'active':index==currentIdx2}" v-for="(lab,index) in currentLab1.children"
                                :key="lab.name" class="energy__header-list-content-item">{{lab.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="energy__body">

            </div>
        </div>
        <div class="energy__right">
            <div class="energy__right-header">
                <div class="energy__right-header-top">
                    实验室能源状态
                </div>
                <div class="energy__right-header-middle">
                    <div class="energy__right-header-middle-panel1">
                        <Switch size="large" />                    
                    </div>
                    <div class="energy__right-header-middle-panel2">
                        
                    </div>
                </div>
            </div>
            <div class="energy__right-body">
                <div class="energy__right-body-top">
                    水能源统计
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator'

    @Component

    export default class Energy extends Vue {
        currentLab1: Lab = {}
        currentIdx1: number = 0

        currentLab2: object = {}
        currentIdx2: number = 0

        currentItems: Array < object > = []

        labs: Array < object > = [{
                name: '全部实验室',
                children: [{
                        name: '实验室一',
                        children: [{
                                deviceName: '天文仪',
                                name: '张晓',
                                class: '高一一班',
                                start: '2018-08-10 10:46',
                                end: '2018-08-12 12:00',
                                status: '实验中',
                            },
                            {
                                deviceName: '天文仪',
                                name: '张晓',
                                class: '高一一班',
                                start: '2018-08-10 10:46',
                                end: '2018-08-12 12:00',
                                status: '实验结束',
                            },
                            {
                                deviceName: '天文仪',
                                name: '张晓',
                                class: '高一一班',
                                start: '2018-08-10 10:46',
                                end: '2018-08-12 12:00',
                                status: '实验中',
                            },
                            {
                                deviceName: '天文仪',
                                name: '张晓',
                                class: '高一一班',
                                start: '2018-08-10 10:46',
                                end: '2018-08-12 12:00',
                                status: '实验结束',
                            },
                            {
                                deviceName: '天文仪',
                                name: '张晓',
                                class: '高一一班',
                                start: '2018-08-10 10:46',
                                end: '2018-08-12 12:00',
                                status: '实验中',
                            },
                            {
                                deviceName: '天文仪',
                                name: '张晓',
                                class: '高一一班',
                                start: '2018-08-10 10:46',
                                end: '2018-08-12 12:00',
                                status: '实验中',
                            },

                        ]
                    },
                    {
                        name: '实验室二',
                        children: []
                    },
                    {
                        name: '实验室三',
                        children: []
                    },
                    {
                        name: '实验室四',
                        children: []
                    },
                    {
                        name: '实验室五',
                        children: []
                    },
                    {
                        name: '实验室六',
                        children: []
                    },
                    {
                        name: '实验室七',
                        children: []
                    },
                    {
                        name: '实验室八',
                        children: []
                    },
                    {
                        name: '实验室九',
                        children: []
                    },
                    {
                        name: '实验室十',
                        children: []
                    },
                    {
                        name: '实验室十一',
                        children: []
                    },
                    {
                        name: '实验室十二',
                        children: []
                    },
                    {
                        name: '实验室十三',
                        children: []
                    },
                    {
                        name: '实验室十四',
                        children: []
                    },
                    {
                        name: '实验室十五',
                        children: []
                    },
                ]
            },
            {
                name: '特殊实验室',
                children: [{
                        name: '实验室一',
                        children: []
                    },
                    {
                        name: '实验室二',
                        children: []
                    },
                    {
                        name: '实验室三',
                        children: []
                    },
                    {
                        name: '实验室四',
                        children: []
                    },
                    {
                        name: '实验室五',
                        children: []
                    },
                    {
                        name: '实验室六',
                        children: []
                    },
                ]
            }
        ]

        constructor() {
            super()
            this.currentLab1 = this.labs[0]
            this.currentLab2 = (this.currentLab1 as any).children[0]
        }

        selectLab1(lab: object, idx: number) {
            this.currentLab1 = lab
            this.currentIdx1 = idx
        }

        selectLab2(lab: object, idx: number) {
            this.currentLab2 = lab
            this.currentIdx2 = idx
        }
    }

    interface Lab {
        name ? : string
        children ? : Array < object >
    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";

    .energy {
        height: 100%;
        box-sizing: border-box;
        padding: 15px 25px;

        &__bread {
            color: #fff;
            font-size: 14px;
            height: px2vh(24px);
            line-height: px2vh(24px);
            margin-bottom: px2vh(33px);

            &:before {
                display: block;
                float: left;
                content: '';
                height: 1.5em;
                margin-right: 6px;
                border-left: 6px solid #4a89df;
            }
        }
        &__left{
            float: left;
            width: 1310px;
            margin-right: 20px;
        }

        &__header {
            box-sizing: border-box;
            height: px2vh(180);
            border: 1px solid #363c84;
            padding: 20px 60px;
            color: #fff;
            font-size: 14px;
            margin-bottom: px2vh(20);

            &-typename {
                float: left;
                margin: 0 22px;
                height: px2vh(36);
                line-height: px2vh(36);
            }

            &-list {
                overflow: hidden;
                height: 100%;

                ul {
                    list-style: none;

                    li {
                        float: left;
                        width: 100px;
                        height: px2vh(36);
                        line-height: px2vh(36);
                        text-align: center;
                        margin-right: 11px;
                    }
                }

                ul:after {
                    display: block;
                    content: '';
                    height: 0;
                    overflow: hidden;
                    visibility: hidden;
                    clear: both;
                }

                &-header {}

                &-content {
                    &-items {}
                }

                .active {
                    background-color: #4e9afa;
                    border-radius: 4px;
                }
            }

        }

        &__body {
            height: px2vh(685px);
            border: 1px solid #363c84;
        }

        &__right{
            float:left;
            width:300px;
            &-header{
                height:px2vh(268);
                box-sizing: border-box;
                border: 1px solid #363c84;
                margin-bottom: px2vh(12);
                &-top{
                    height: px2vh(45);
                    line-height: px2vh(45);
                    border-bottom:1px solid #363c84;
                    text-align: center;
                    color: #01efbb;
                }
                &-middle{
                    &-panel1{
                        height:px2vh(60);
                        background-color: #ffffff;
                        border-radius: 10px;
                        margin: px2vh(20) 20px;
                    }
                    &-panel2{
                        height:px2vh(90);
                        background-color: #ffffff;
                        border-radius: 10px;
                        margin: 0 20px;
                    }
                }
              
            }
            &-body{
                height:px2vh(560);
                box-sizing: border-box;
                border: 1px solid #363c84;
                &-top{
                    height: px2vh(45);
                    line-height: px2vh(45);
                    border-bottom:1px solid #363c84;
                    text-align: center;
                    color: #01efbb;
                }
            }
        }
    }
</style>