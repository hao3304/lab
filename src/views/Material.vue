<template>
    <div class="deviceinfo">
        <p class="deviceinfo__bread">耗材管理</p>
        <div class="deviceinfo__content">
            <div class="deviceinfo__content-search">
                <div class="deviceinfo__content-search-item">
                    <div>
                        耗材名称:
                        <Input v-model="name" style="width:auto;" />
                    </div>
                </div>
                <div class="deviceinfo__content-search-item">
                    <div>
                        耗材批号:
                        <Input v-model="position" style="width:auto;" />
                    </div>
                </div>
                <div class="deviceinfo__content-search-item">
                    <div>
                        耗材状态:
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

    export default class Material extends Vue {
        columns1: Array < object > = [{
                type: 'index',
                title: '序号',
                width: 60,
                align: 'center'
            },
            {
                title: '耗材类别',
                key: 'category'
            },
            {
                title: '耗材名称',
                key: 'name'
            },
            {
                title: '耗材编号',
                width: 180,
                key: 'code'
            },
            {
                title: '最近购入时间',
                key: 'buytime'
            },
            {
                title: '总量',
                key: 'quantity',
            },
            {
                title: '存量',
                key: 'stock'
            },
            {
                title: '耗材状态',
                key: 'action',
                align: 'center',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('Button', {
                                props: {
                                    type: params.row.status === 1 ? 'primary' : params.row.status ===
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
                            }, params.row.status === 1 ? '充足' : params.row.status === 2 ? '少量' :
                            '缺少')
                    ])
                }
            },
            {
                title: '操作',
                key: 'operate',
                align: 'center',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('Button', {
                                props: {
                                    size: 'small',
                                    disabled: 'disabled'
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
                            }, '编辑')
                    ])
                }

            }

        ]
        data1: Array < object > = [{
                category: '腐蚀性试剂',
                name: '盐酸',
                code: '2018080316043212',
                buytime: '2018-09-21',
                quantity: '300g',
                stock: '30g',
                status: 1
            },
            {
                category: '腐蚀性试剂',
                name: '盐酸',
                code: '2018080316043212',
                buytime: '2018-09-21',
                quantity: '300g',
                stock: '30g',
                status: 2
            },
            {
                category: '腐蚀性试剂',
                name: '盐酸',
                code: '2018080316043212',
                buytime: '2018-09-21',
                quantity: '300g',
                stock: '30g',
                status: 1
            },
            {
                category: '腐蚀性试剂',
                name: '盐酸',
                code: '2018080316043212',
                buytime: '2018-09-21',
                quantity: '300g',
                stock: '30g',
                status: 3
            },
            {
                category: '腐蚀性试剂',
                name: '盐酸',
                code: '2018080316043212',
                buytime: '2018-09-21',
                quantity: '300g',
                stock: '30g',
                status: 2
            },
            {
                category: '腐蚀性试剂',
                name: '盐酸',
                code: '2018080316043212',
                buytime: '2018-09-21',
                quantity: '300g',
                stock: '30g',
                status: 1
            },
            {
                category: '腐蚀性试剂',
                name: '盐酸',
                code: '2018080316043212',
                buytime: '2018-09-21',
                quantity: '300g',
                stock: '30g',
                status: 3
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