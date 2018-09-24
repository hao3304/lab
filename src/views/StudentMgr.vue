<template>
    <div class="studentmrg">
         <p class="studentmrg__bread">人员管理>学生管理>李江峰实验记录</p>
         <div class="studentmrg__userinfo">
             <div>
                 <Button type="info">李江峰</Button>
            </div>
            <div>
                <span>班级: </span>
                <span>高一一班</span>
            </div>
            <div>
                <span>学号: </span>
                <span>23</span>
            </div>
         </div>
         <div class="studentmrg__recordtype">
             <div>
                 <span>实验记录: </span>
             </div>
             <div>
                 <Button type="info">历史记录</Button>
             </div>
             <div>
                 <Button style="color:#fff;" type="text">未来记录</Button>
             </div>
         </div>
         <div class="studentmrg__list">
              <Table disabled-hover :columns="columns1" :data="data1"></Table>
         </div>
    </div>
</template>


<style lang="scss">
    @import "~@/styles/mixin/index.scss";
    .studentmrg{
        height: 100%;
        box-sizing: border-box;
        padding: px2vh(15px) 25px;
        color: #fff;
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
        &__userinfo {
            width: 400px;
            height: 64px;
            box-sizing: border-box;
            border: 1px solid #363c84;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: px2vh(16);
        }
         &__recordtype {
            width: 400px;
            height: 64px;
            box-sizing: border-box;
            border: 1px solid #363c84;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: px2vh(16);
        }
        &__list{
            width: 683px;
            height: px2vh(728);
            box-sizing: border-box;
            border: 1px solid #363c84;
            .ivu-table-wrapper {
                        border-width: 0;

                        .ivu-table {
                            background-color: transparent;

                            &:before {
                                height: 0;
                            }

                            &:after {
                                height: 0;
                            }

                            .ivu-table-header {
                                thead {
                                    tr {
                                        th {
                                            background-color: transparent;
                                            border-bottom-width: 0;
                                            color: #fff;
                                        }
                                    }
                                }

                            }

                            .ivu-table-body {
                                table {
                                    .ivu-table-tbody {
                                        tr {
                                            td {
                                                border-bottom-width: 0;
                                                color: #fff;
                                            }
                                        }

                                        tr:nth-child(odd) td {
                                            background-color: rgba(220, 220, 220, .1);
                                        }

                                    }
                                }
                            }

                            td {
                                background-color: transparent;
                            }

                        }
                    }
        }
    }
</style>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator'

@Component
export default class StudentMgr extends Vue {
     columns1: Array < object > = [{
                type: 'index',
                title: '序号',
                width: 60,
                align: 'center'
            },
            {
                title: '实验开始时间',
                key: 'starttime'
            },
            {
                title: '实验结束时间',
                key: 'endtime'
            },
        ]
        data1: Array < object > = [{
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
            {
                starttime: '2018-09-21 18:00',
                endtime: '2018-09-21 20:00',
            },
        ]
}
</script>

