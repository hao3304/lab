<template>
    <div class="page-main">
        <h1>
            智慧实验室管理平台


        </h1>
        <div class="toolbar" >
            <Button type="primary" @click="onRouter('home')">进入后台</Button>
            <Button  @click="onRouter('login')">退出登录</Button>
        </div>
        <wrapper class="main-wrapper">
            <div slot="content">
                <Row  :gutter="10" >
                    <Col :span="7">
                        <div class="page-main__topleft row__item">

                            <div class="row__item-header">
                                耗材性质分类占比
                            </div>
                            <div class="row__item-content">
                                <div id="topleft" style="height: 100%"></div>
                            </div>
                        </div>
                        <div class="page-main__bottomleft row__item">
                            <div class="row__item-header">
                                日累计实验人数
                            </div>
                            <div class="row__item-content">
                                <Row :gutter="20">
                                    <Col :span="12">
                                        <div class="row__item-block left">
                                            <p>当前实验总人数（人）</p>
                                            <h5>
                                                <animated-number
                                                        value="286"
                                                        :formatValue="formatValue"
                                                        :duration="1000"
                                                />
                                            </h5>
                                        </div>
                                    </Col>
                                    <Col :span="12">
                                        <div class="row__item-block right">
                                            <p>累计实验总人数（人）</p>
                                            <h5>
                                                <animated-number
                                                        value="22186"
                                                        :formatValue="formatValue"
                                                        :duration="1000"></animated-number>
                                            </h5>
                                        </div>
                                    </Col>
                                </Row>

                                <div id="bottomleft"></div>
                            </div>
                        </div>
                    </Col>
                    <Col :span="10">
                        <div class="page-main__topcenter">

                            <h5>2018-08-10 14:13:12</h5>
                            <p>
                                <span>温度：26℃</span>
                                <span>湿度：73%</span>
                                <span>PM2.5：57</span>
                            </p>

                            <div class="row__item">
                                <div class="row__item-header">
                                    实验室大数据统计分析
                                </div>
                                <div class="row__item-content">
                                    <Row :gutter="10">
                                        <Col :span="5">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">当前访问人数（人）</div>
                                                <div  class="row__item-block-value">
                                                    <animated-number
                                                            value="26"
                                                            :formatValue="formatValue"
                                                            :duration="1000"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col :span="5">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">今日访问人数（人）</div>
                                                <div  class="row__item-block-value">
                                                    <animated-number
                                                            value="59"
                                                            :formatValue="formatValue"
                                                            :duration="1000"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col :span="6">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">平台累计访问人数（人）</div>
                                                <div  class="row__item-block-value">
                                                    <animated-number
                                                            value="4356"
                                                            :formatValue="formatValue"
                                                            :duration="1000"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col :span="8">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">累计平台使用时间（分）</div>
                                                <div  class="row__item-block-value">
                                                    <animated-number
                                                            value="563456"
                                                            :formatValue="formatValue"
                                                            :duration="1000"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row :gutter="10" style="margin-top: 10px">
                                        <Col :span="6">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">当前实验人数（分）</div>
                                                <div  class="row__item-block-value">
                                                    <animated-number
                                                            value="264"
                                                            :formatValue="formatValue"
                                                            :duration="1000"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col :span="6">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">设备总数（台）</div>
                                                <div  class="row__item-block-value">
                                                    <animated-number
                                                            value="256"
                                                            :formatValue="formatValue"
                                                            :duration="1000"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col :span="6">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">耗材总数（个）</div>
                                                <div  class="row__item-block-value">
                                                    <animated-number
                                                            value="3941"
                                                            :formatValue="formatValue"
                                                            :duration="1000"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col :span="6">
                                            <div class="row__item-block">
                                                <div class="row__item-block-title">能源指标</div>
                                                <div  class="row__item-block-value" style="font-weight: 400">正常</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div class="row__item page-main__bottomcenter">
                            <div class="row__item-header">
                                实验室用水量柱状图
                            </div>
                            <div class="row__item-content">

                                <div id="bottomcenter"></div>

                            </div>
                        </div>
                    </Col>
                    <Col :span="7">
                        <div class="page-main__topright row__item">
                            <div class="row__item-header">
                                设备运行状态
                            </div>
                            <div class="row__item-content">
                                <table>
                                    <tr>
                                        <th>序号</th>
                                        <th>设备名称</th>
                                        <th>设备位置</th>
                                        <th>实验状态</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>天文仪</td>
                                        <td>实验室一</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>PH计</td>
                                        <td>实验室一</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>生物显微镜</td>
                                        <td>实验室一</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>超声波清洗仪</td>
                                        <td>实验室一</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>水分测定仪</td>
                                        <td>实验室一</td>
                                        <td>
                                            <Tag color="default">未实验</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>振荡器</td>
                                        <td>实验室一</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>蒸馏水器</td>
                                        <td>实验室一</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>蒸馏水器</td>
                                        <td>实验室二</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>蒸馏水器</td>
                                        <td>实验室三</td>
                                        <td>
                                            <Tag color="primary">实验中</Tag>
                                        </td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                        <div class="page-main__bottomright row__item">
                            <div class="row__item-header">
                                实验室用电量趋势图
                            </div>
                            <div class="row__item-content">
                                <div id="bottomright"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </wrapper>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import wrapper from '@/components/Wrapper.vue'
    import echarts from 'echarts'
    import { hcxzOption, rljOption, sysyslOption, sysydlOption } from '@/views/homechart/options'
    import AnimatedNumber from 'animated-number-vue'

    @Component({
        components: {
            wrapper,
            AnimatedNumber
        }
    })
    export default class Main extends Vue {

        public formatValue(value: any): number {
            return parseInt(value, 10)
        }

        renderOne(): void {

            const chart = echarts.init(document.getElementById('topleft') as HTMLDivElement)
            chart.setOption(hcxzOption)

        }

        renderTwo(): void {

            const chart = echarts.init(document.getElementById('bottomleft') as HTMLDivElement)
            chart.setOption(rljOption)

        }

        renderThree(): void {

            const chart = echarts.init(document.getElementById('bottomcenter') as HTMLDivElement)
            chart.setOption(sysyslOption)

        }

        renderFour(): void {
            const chart = echarts.init(document.getElementById('bottomright') as HTMLDivElement)
            chart.setOption(sysydlOption)
        }

        public onRouter(router: string): void {
            this.$router.push({name: router})
        }


        public mounted(): void {
            this.renderOne()
            this.renderTwo()
            this.renderThree()
            this.renderFour()
        }
    }

</script>

<style lang="scss" >
    @import "~@/styles/mixin/index.scss";

    .page-main {
        background: url("~@/assets/images/bg.png") no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
        height: 100%;

        .toolbar {
            position: absolute;
            right: 20px;
            top: 10px;
            z-index: 100;
            button {
                width: 100px;
                margin: 10px;
            }
        }

        .main-wrapper {
            height: px2vh(1060px);
            margin-top: px2vh(20px);

            padding-top: px2vh(65px);
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: px2vh(45px);
        }

        h1 {
            text-align: center;
            color: #fff;
            font-size: 36px;
            font-weight: normal;
            position: absolute;
            width: 100%;
            padding-top: px2vh(5px);
        }

        &__topleft {
            height: px2vh(380px);
        }

        &__bottomleft {
            margin-top: px2vh(10px);
            height: px2vh(530px);

            #bottomleft {
                margin-top: px2vh(20);
                height: px2vh(312);
            }

            .row__item-content {
                padding: 20px;
            }

            .row__item-block {
                height: 120px;
                border-radius: 10px;
                color: #fff;

                padding: 20px;
                p {
                    font-size: 14px;
                }
                h5 {
                    font-size: 40px;
                }

                &.left {
                    background-color: #ff7878;
                }

                &.right {
                    background-color: #02cdc2;
                }
            }
        }

        &__topcenter {
            h5 {
                text-align: center;
                font-size: 24px;
                color: #e6edff;
            }
            p {
                text-align: center;
                line-height: px2vh(48px);
                font-size: 16px;
                color: #e6edff;
                margin-bottom: px2vh(10px);
                span {
                    margin: 0 10px;
                }
            }

            & .row__item {
                height: px2vh(330px);

                &-content {
                    padding:20px 10px;
                }

                &-block {
                    height: 110px;
                    background-color: rgba(74,137,223, .3);
                    padding: 10px 0;

                    &-title {
                        text-align: center;
                        font-size: 14px;
                        color: #01efbb;
                    }
                    &-value {
                        font-size: 50px;
                        color: #fff;
                        text-align: center;
                        font-weight: normal;
                    }
                }
            }

        }

        &__bottomcenter {
            margin-top: px2vh(10px);
            height: px2vh(488px);

            .row__item-content {
                padding: 25px;
            }

            #bottomcenter {
                height: px2vh(408px);
            }
        }

        &__topright {
            height: px2vh(500px);
            table {
                width: 100%;
                border-collapse: collapse;

                th {
                    height: px2vh(40px);
                    line-height: px2vh(40px);
                    color: #fff;
                    border: none;
                    background-color: #2945a4;
                    text-align: center;
                }

                td {
                    height: px2vh(40px);
                    line-height: px2vh(40px);
                    color: #fff;
                    text-align: center;
                    border-bottom: solid 1px #363c84;
                }
            }
        }

        &__bottomright {
            margin-top: px2vh(10px);
            height: px2vh(411px);

            #bottomright {
                height: px2vh(375px);
                padding: 25px;

            }
        }
    }

</style>