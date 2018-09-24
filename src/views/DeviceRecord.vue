<template>
    <div class="devicerecord">
        <p class="devicerecord__bread">设备管理>设备使用记录</p>
        <div class="devicerecord__header">
            <div class="devicerecord__header-typename">设备位置:</div>
            <div class="devicerecord__header-list">
                <div class="devicerecord__header-list-header">
                    <ul>
                        <li @click="selectLab1(lab,index)" :class="{'active':index==currentIdx1}" v-for="(lab,index) in labs"
                            :key="lab.name">{{lab.name}}</li>
                    </ul>
                </div>
                <div class="devicerecord__header-list-content">
                    <ul class="devicerecord__header-list-content-items">
                        <li @click="selectLab2(lab,index)" :class="{'active':index==currentIdx2}" v-for="(lab,index) in currentLab1.children"
                            :key="lab.name" class="devicerecord__header-list-content-item">{{lab.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="devicerecord__body">
            <div class="devicerecord__body-item" v-for="(info,index) of currentLab2.children" :key="'item'+index">
                <div class="devicerecord__body-item-devicename">
                    设备名称: {{info.deviceName}}
                </div>
                <div class="devicerecord__body-item-info">
                    <table class="devicerecord__body-item-info-table">
                        <tr>
                            <td class="devicerecord__body-item-info-key">使用人姓名</td>
                            <td class="devicerecord__body-item-info-value">{{info.name}}</td>
                        </tr>
                        <tr>
                            <td class="devicerecord__body-item-info-key">使用人班级</td>
                            <td class="devicerecord__body-item-info-value">{{info.class}}</td>
                        </tr>
                        <tr>
                            <td class="devicerecord__body-item-info-key">实验开始时间</td>
                            <td class="devicerecord__body-item-info-value">{{info.start}}</td>
                        </tr>
                        <tr>
                            <td class="devicerecord__body-item-info-key">实验结束时间</td>
                            <td class="devicerecord__body-item-info-value">{{info.end}}</td>
                        </tr>
                    </table>
                </div>
                <div :class="{'devicerecord__body-item-btn-status1':info.status=='实验中','devicerecord__body-item-btn-status2':info.status=='实验结束'}">{{info.status}}</div>
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

    export default class DeviceRecord extends Vue {
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
        name?: string
        children?: Array < object >
    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";

    .devicerecord {
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

        &__header {
            box-sizing: border-box;
            height: px2vh(160);
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
            height: px2vh(700px);
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            color: #fff;

            &-item {
                flex-basis: 19.0184%;
                border: 1px solid #363c84;
                text-align: center;
                margin-right: 1.22699%;
                margin-bottom: px2vh(20);
                &:nth-child(5) {
                    margin-right: 0;
                }

                &-devicename {
                    display: inline-block;
                    width: 220px;
                    height: px2vh(50);
                    border-radius: 8px;
                    border: solid 2px #4a89df;
                    margin-top: px2vh(21);
                    font-size: 18px;
                    font-family: MicrosoftYaHei;
                    line-height: px2vh(50);
                }

                &-info {
                    padding: px2vh(36px) 30px;

                    &-table {
                        width: 100%;
                    }

                    &-key {
                        text-align: right;
                    }

                    &-value {
                        text-align: left;
                        padding-left: 20px;
                    }
                }

                &-btn-status1 {
                    height: px2vh(40);
                    line-height: px2vh(40);
                    text-align: center;
                    background: linear-gradient(to right, #4a6bf8, #5bb4fa)
                }

                &-btn-status2 {
                    height: px2vh(40);
                    line-height: px2vh(40);
                    text-align: center;
                    background: linear-gradient(to right, #e80200, #f35352)
                }
            }

        }
    }
</style>