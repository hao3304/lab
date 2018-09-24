<template>
    <div class="deviceinfo">
        <p class="deviceinfo__bread">设备管理>设备使用信息</p>
        <div class="deviceinfo__content">
            <div class="deviceinfo__content-search">
                <div class="deviceinfo__content-search-item">
                    <div>
                        设备名称:
                        <Input v-model="name" style="width:auto;" />
                    </div>
                </div>
                <div class="deviceinfo__content-search-item">
                    <div>
                        设备位置:
                        <Input v-model="position" style="width:auto;" />
                    </div>
                </div>
                <div class="deviceinfo__content-search-item">
                    <div>
                        设备状态:
                        <Input v-model="status" style="width:auto;" />
                    </div>
                </div>
                <div class="deviceinfo__content-search-btn">
                    <Button type="primary" size="small" style="margin-right:10px;">搜索</Button>
                    <Button type="primary" size="small">添加设备</Button>
                </div>

            </div>
            <div class="deviceinfo__content-table">
                <div class="deviceinfo__content-table-body">
                    <Table disabled-hover :columns="columns1" :data="data1"></Table>
                </div>
                <div class="deviceinfo__content-table-footer">
                        <Page :total="100" show-total />
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

    @Component({
        data() {
            return {
                name: '',
                position: '',
                status: ''
            }
        }
    })

    export default class DeviceInfo extends Vue {
        columns1: Array < object > = [{
                type: 'index',
                title: '序号',
                width: 60,
                align: 'center'
            },
            {
                title: '设备名称',
                key: 'name'
            },
            {
                title: '设备编号',
                width: 180,
                key: 'code'
            },
            {
                title: '设备位置',
                key: 'position'
            },
            {
                title: '数量',
                key: 'quantity',
            },
            {
                title: '购买日期',
                key: 'buydate'
            },
            {
                title: '维修日期',
                key: 'fixdate',
            },
            {
                title: '累计使用人数',
                key: 'numofusers'
            },
            {
                title: '累计使用总时长',
                key: 'useduration'
            },
            {
                title: '运行状态',
                key: 'action',
                align: 'center',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('Button', {
                                props: {
                                    type: params.row.action === 1 ? 'primary' : params.row.action ===
                                        2 ? 'success' : 'error',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        // this.show(params.index)
                                        console.log(params)
                                    }
                                }
                            }, params.row.action === 1 ? '使用中' : params.row.action === 2 ? '维修中' :
                            '无法检测')
                    ])
                }
            }
        ]
        data1: Array < object > = [{
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 1
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 1
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 2
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 1
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 3
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 1
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 2
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 1
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 1
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 3
            },
            {
                name: '酸度计',
                code: 2018080316043212,
                position: '实验室一',
                quantity: 1,
                buydate: '2018-09-20',
                fixdate: '2018-09-21',
                numofusers: '32人',
                useduration: '20小时50分',
                action: 2
            },
        ]

    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";
    $breadHeight: px2vh(105px);

    .deviceinfo {
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

        &__content {
            height: calc(100% - #{$breadHeight});
            display: flex;
            flex-flow: column nowrap;

            &-search {
                height: px2vh(60px);
                border: 1px solid #363c84;
                flex-shrink: 0;

                &-item {
                    width: 20%;
                    float: left;
                    padding-left: 40px;

                    &>div {
                        line-height: px2vh(60px);
                        color: #fff;
                    }
                }

                &-btn {
                    width: 40%;
                    float: left;
                    padding-left: 40px;
                    line-height: px2vh(60px);
                }
            }

            &-table {
                flex: 1;
                display: flex;
                flex-flow: column nowrap;
                border: 1px solid #363c84;
                margin-top: px2vh(20px);

                &-body {
                    height: px2vh(679px);

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

                        // .ivu-table-stripe .ivu-table-body tr:nth-child(2n) td, .ivu-table-stripe .ivu-table-fixed-body tr:nth-child(2n) td {
                        //         background-color: #fff;
                        //         opacity: .2;
                        // }
                    }
                }

                &-footer {
                    flex: 1;
                    position:relative;
                    .ivu-page{
                        position:absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        .ivu-page-total{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>