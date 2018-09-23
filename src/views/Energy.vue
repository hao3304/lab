<template>
    <div class="energy">
        <p class="energy__bread">能源管理</p>
        <div class="energy__left">
            <div class="energy__header">
                <div class="energy__header-top">
                    <div class="energy__header-typename">实验室地点:</div>
                    <div class="energy__header-list">
                        <ul>
                           <li v-for="(lab,index) of labs" :key="lab.name" @click="selectLab1(lab,index)" :class="{active:currentIdx1==index}">{{lab.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="energy__header-bottom">
                    <div class="energy__header-select">
                        <div class="energy__header-typename">
                             能源类型:  
                        </div>
                        <Select v-model="model2"  style="width:8.3333vw">
                            <Option size="small" v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>  
                    </div>
                    <div class="energy__header-select" style="margin-right:1.40625vw">
                        <div class="energy__header-typename">
                             时间范围:  
                        </div>
                        <Select v-model="model2"  style="width:8.3333vw">
                            <Option size="small" v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>  
                        <span style="margin:0 0.2604vw"> 至 </span>
                        <Select v-model="model2"  style="width:8.3333vw">
                            <Option size="small" v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select> 
                    </div>
                    <div class="energy__header-select">
                         <Button type="info" size="small">查询</Button>
                    </div>
                     
                </div>
            </div>
            <div class="energy__body" id="energy_chart">

            </div>
        </div>
        <div class="energy__right">
            <div class="energy__right-header">
                <div class="energy__right-header-top">
                    实验室能源状态
                </div>
                <div class="energy__right-header-middle">
                    <div class="energy__right-header-middle-panel1">
                        <span>实验室总开关状态</span>
                        <Switch />                    
                    </div>
                    <div class="energy__right-header-middle-panel2">
                        <span>电缆接口温度 26℃</span>
                        <Switch /> 
                    </div>
                </div>
            </div>
            <div class="energy__right-body">
                <div class="energy__right-body-top">
                    水能源统计
                </div>
                 <div class="energy__right-body-body">
                <div class="energy__right-body-body-item" style="background-color: #02cdc2;">
                    <div class="energy__right-body-body-item-text">
                        <p class="energy__right-body-body-item-text-key">今日总用水量(m³)</p>
                        <p class="energy__right-body-body-item-text-value">20.5</p>
                    </div>
                </div>
                <div class="energy__right-body-body-item" style="background-color: #ff7878;">
                    <div class="energy__right-body-body-item-text">
                        <p class="energy__right-body-body-item-text-key">各实验室今日平均用水量(m³)</p>
                        <p class="energy__right-body-body-item-text-value">1.5</p>
                    </div>
                </div>
                <div class="energy__right-body-body-item" style="background-color: #56adf0;">
                    <div class="energy__right-body-body-item-text">
                        <p class="energy__right-body-body-item-text-key">本周总用水量(m³)</p>
                        <p class="energy__right-body-body-item-text-value">136.5</p>
                    </div>
                </div>
                <div class="energy__right-body-body-item" style="background-color: #ff87b9;">
                    <div class="energy__right-body-body-item-text">
                        <p class="energy__right-body-body-item-text-key">本月总用水量(m³)</p>
                        <p class="energy__right-body-body-item-text-value">4095</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { energyOption } from './homechart/options'
    import echarts from 'echarts'

    @Component({
        mounted() {
            echarts.init(document.querySelector('#energy_chart') as HTMLDivElement).setOption(energyOption)
        }
    })
    export default class Energy extends Vue {

          cityList: Array<object> =  [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ]
        model2: string = ''
        model3: string = ''
        model4: string = ''
        currentLab1: Lab = {}
        currentIdx1: number = 0

        currentItems: Array < object > = []

        labs: Array < object > = [{
                name: '总实验室',
            },
            {
                name: '实验室一',
            },
            {
                name: '实验室二',
            },
            {
                name: '实验室三',
            },
            {
                name: '实验室四',
            },
            {
                name: '实验室五',
            },
            {
                name: '实验室六',
            },
            {
                name: '实验室七',
            },
            {
                name: '实验室八',
            },
            {
                name: '实验室九',
            },
            {
                name: '实验室十',
            },
            {
                name: '实验室十一',
            },
            {
                name: '实验室十二',
            },
            {
                name: '实验室十三',
            },
            {
                name: '实验室十四',
            },
            {
                name: '实验室十五',
            },
            {
                name: '实验室十六',
            }
            
        ]

        constructor() {
            super()
            this.currentLab1 = this.labs[0]
        }

        selectLab1(lab: object, idx: number) {
            this.currentLab1 = lab
            this.currentIdx1 = idx
        }
    }

    interface Lab {
        name?: string
        children?: Array < object >
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
            &-top{
                height: 50%;
                overflow:hidden;
            }
            &-bottom{
                height:50%;
                overflow: hidden;
                display: flex;
                align-items: center;
            }
            &-select{

            }
            &-typename {
                float: left;
                width:80px;
                margin: 0 22px;
                height: px2vh(36);
                line-height: px2vh(36);
                text-align: right;
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
            padding: px2vh(40) 77px;
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
                        padding: px2vh(18) 20px;
                        font-size: 14px;
                        &:after{
                            display: inline-block;
                            content: '';
                            height: 100%;
                            overflow: hidden;
                            vertical-align: middle;
                        }
                        .ivu-switch{
                            margin-left: 25px;
                            content: ""!important;
                        }
                        .ivu-switch-checked, .ivu-switch-inner {
                            content: ""!important;
                        }
                        .ivu-switch-checked:after{
                            content: ""!important; 
                            left: 1.198vw;
                        }

                        
                    }
                    &-panel2{
                        height:px2vh(90);
                        background-color: #ffffff;
                        border-radius: 10px;
                        margin: 0 20px;
                        padding: px2vh(18) 20px;
                        font-size: 14px;
                        &:after{
                            display: inline-block;
                            content: '';
                            height: 100%;
                            overflow: hidden;
                            vertical-align: middle;
                        }
                        .ivu-switch{
                            margin-left: 25px;
                            content: ""!important;
                        }
                        .ivu-switch-checked, .ivu-switch-inner {
                            content: ""!important;
                        }
                        .ivu-switch-checked:after{
                            content: ""!important; 
                            left: 1.198vw;
                        }
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

                &-body{
                    height:px2vh(575);
                    box-sizing: border-box;
                    padding: px2vh(11)  35px px2vh(22);
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    &-item{
                         height: px2vh(120);
                         border-radius: 10px;
                         display: flex;
                         &-text{
                             width: 150px;
                             height: 60px;
                             margin: auto;
                             &-key{
                                 font-size: 12px;
                                 color: #fff;
                             }
                             &-value{
                                font-family: HelveticaNeue-CondensedBold;
                                font-size: 30px;
                                font-weight: bold;
                                color: #fff;
                             }
                         }
                    }
                }
            }
        }
    }
</style>