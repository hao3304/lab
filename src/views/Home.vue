<template>
    <div class="home">
        <Row :gutter="20" class="row">
            <Col :span="8">
                <div class="row__item top">
                    <div class="row__item-header">
                        设备基本信息
                    </div>
                    <div class="row__item-content top-left">
                        <Row :gutter="16">
                            <Col :span="12">
                                <div style="background-color: #02cdc2" class="top-left__item">
                                    <h5>设备总数（台）</h5>
                                    <p>
                                        <animated-number
                                                value="500"
                                                :formatValue="formatValue"
                                                :duration="1000"
                                        />
                                    </p>
                                </div>
                            </Col>
                            <Col :span="12">
                                <div style="background-color: #ff7878" class="top-left__item">
                                    <h5>设备累计使用人数（人）</h5>
                                    <p> <animated-number
                                            value="528"
                                            :formatValue="formatValue"
                                            :duration="1000"
                                    /></p>
                                </div>
                            </Col>
                            <Col :span="12">
                                <div style="background-color: #56adf0" class="top-left__item">
                                    <h5>今年新增设备（台）</h5>
                                    <p>
                                        <animated-number
                                                value="22"
                                                :formatValue="formatValue"
                                                :duration="1000"
                                        />
                                    </p>
                                </div>
                            </Col>
                            <Col :span="12">
                                <div style="background-color: #ff87b9" class="top-left__item">
                                    <h5>设备累计使用时间（分）</h5>
                                    <p>
                                        <animated-number
                                                value="3244553"
                                                :formatValue="formatValue"
                                                :duration="1000"
                                        />
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Col>
            <Col :span="8">
                <div class="row__item top">
                    <div class="row__item-header">
                        耗材性质分类分析
                    </div>
                    <div class="row__item-content">
                        <div class="chart-block" ref="chart1"></div>
                    </div>
                </div>
            </Col>
            <Col :span="8">
                <div class="row__item top">
                    <div class="row__item-header">
                        日累计实验人数
                    </div>
                </div>
            </Col>
        </Row>
        <Row :gutter="20" class="row">
            <Col :span="12">
                <div class="row__item bottom">
                    <div class="row__item-header">
                        实验室用水量趋势图
                    </div>
                </div>
            </Col>
            <Col :span="12">
                <div class="row__item bottom">
                    <div class="row__item-header">
                        实验室用电量趋势图
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script lang="ts">
    import AnimatedNumber from 'animated-number-vue'
    import { Component, Vue } from 'vue-property-decorator'
    import eCharts from 'echarts'

    @Component({
        components: {
            AnimatedNumber
        }
    })
    export default class Home extends Vue {
        public $refs: any
        public formatValue(value: string): number {
            return parseInt(value, 10)
        }

        public renderChart1(): void {
            const $el =  this.$refs['chart1']
            const option = {
                color:['#965fe9', '#f35453', '#ff8e47', '#02cdc2', '#319d6e', '#56adf0'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: '10%',
                    y: 'center',
                    textStyle: {
                      color: '#fff'
                    },
                    data: ['易燃易爆固体', '易燃液体试剂', '氧化性试剂', '毒害性试剂', '腐蚀性试剂', '低温存放试剂']
                },
                series: [
                    {
                        name: '耗材性质分类分析',
                        type: 'pie',
                        center: ['30%','50%'],
                        radius: ['35%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                position: 'inner',
                                formatter:  (params:Object) => {
                                    return parseInt(params.percent, 10) + '%'
                                }
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '12',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 335, name: '易燃易爆固体'},
                            {value: 310, name: '易燃液体试剂'},
                            {value: 234, name: '氧化性试剂'},
                            {value: 135, name: '毒害性试剂'},
                            {value: 154, name: '腐蚀性试剂'},
                            {value: 1548, name: '低温存放试剂'}
                        ]
                    }
                ]
            }

            const myChart = eCharts.init($el)
            myChart.setOption(option)
        }

        public mounted(): void {
            this.renderChart1()
        }
    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";
    .home{
        height: 100%;
        box-sizing: border-box;
        padding: 15px 25px;

        .row {
            margin-bottom: px2vh(20px);
            &__item {
                border: 1px solid #363c84;
                box-sizing: border-box;
                width: 100%;
                display: flex;
                flex-direction: column;

                &-header {
                    height: px2vh(42px);
                    line-height: px2vh(42px);
                    color: #01efbb;
                    padding: 0 30px;
                    border-bottom: 1px solid #363c84;
                    box-sizing: border-box;
                }
                &-content {
                    flex: 1;
                }
            }

            .top {
                height: px2vh(400px);

                &-left {
                    padding: px2vh(44px) 28px;

                    &__item {
                        width: 230px;
                        height: px2vh(120px);
                        border-radius: 10px;
                        margin-bottom: px2vh(18px);
                        overflow: hidden;
                        padding-left: 20px;

                        h5 {
                            margin-top: px2vh(20);
                            font-weight: 400;
                            color: #fff;
                            font-size: 14px;
                        }

                        p {
                            color: #fff;
                            margin-top: px2vh(10px);
                            font-size: 24px;
                        }
                    }
                }
            }

            .bottom {
                height: px2vh(530px);
            }
        }
    }
</style>