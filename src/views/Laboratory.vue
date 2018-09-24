<template>
    <div class="laboratory">
        <p class="laboratory__bread">实验室管理</p>
        <div class="laboratory__content">
            <div class="laboratory__content-search">
                <div class="laboratory__content-search-item">
                    <div>
                        实验室名称:
                        <Input v-model="name" style="width:auto;" />
                    </div>
                </div>
                <div class="laboratory__content-search-btn">
                    <Button type="primary" size="small" style="margin-right:10px;">搜索</Button>
                    <Button type="primary" size="small">新增实验室</Button>
                </div>

            </div>
            <div class="laboratory__content-table">
                <div class="laboratory__content-table-body">
                    <Table disabled-hover :columns="columns1" :data="data1"></Table>
                </div>
                <div class="laboratory__content-table-footer">
                        <Page :total="100" show-total />
                </div>

            </div>
        </div>
        <div class="laboratory__tab">
            <div class="laboratory__tab-header">
                实验室统计信息
            </div>
            <div class="laboratory__tab-body">
                <div class="laboratory__tab-body-item" style="background-color: #02cdc2;">
                    <div class="laboratory__tab-body-item-text">
                        <p class="laboratory__tab-body-item-text-key">正在使用的实验室(个)</p>
                        <p class="laboratory__tab-body-item-text-value">6</p>
                    </div>
                </div>
                <div class="laboratory__tab-body-item" style="background-color: #ff7878;">
                    <div class="laboratory__tab-body-item-text">
                        <p class="laboratory__tab-body-item-text-key">今日以使用的实验室(个)</p>
                        <p class="laboratory__tab-body-item-text-value">8</p>
                    </div>
                </div>
                <div class="laboratory__tab-body-item" style="background-color: #56adf0;">
                    <div class="laboratory__tab-body-item-text">
                        <p class="laboratory__tab-body-item-text-key">维修中的实验室(个)</p>
                        <p class="laboratory__tab-body-item-text-value">6</p>
                    </div>
                </div>
                <div class="laboratory__tab-body-item" style="background-color: #ff87b9;">
                    <div class="laboratory__tab-body-item-text">
                        <p class="laboratory__tab-body-item-text-key">实验室总数(个)</p>
                        <p class="laboratory__tab-body-item-text-value">16</p>
                    </div>
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

    export default class Laboratory extends Vue {
        columns1: Array < object > = [{
                type: 'index',
                title: '序号',
                width: 60,
                align: 'center'
            },
            {
                title: '实验室名称',
                key: 'name',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('Button', {
                                props: {
                                    type: 'primary',
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
                            }, params.row.name)
                    ])
                }
            },
            {
                title: '环境参数',
                key: 'parameter',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('a', {
                            style: {
                                color: '#f00'
                            }
                        }, '点击详情')
                    ])
                }
            },
            {
                title: '设备数量',
                key: 'count',
                align: 'center'
            },
            {
                title: '电源状态',
                key: 'powerstatus',
                width: 180,
                align: 'center',
                render: (h: any, params: any) => {
                    return h('div', [h('Button', {
                        props: {
                            type: params.row.powerstatus == 1 ? 'primary' : 'error',
                            size: 'small'
                        },
                        style: {
                                    marginRight: '5px'
                        },
                    }, params.row.powerstatus == 1 ? '开启' : '关闭'),
                    h('a', {
                        style: {
                            color: '#f00'
                        }
                    }, '点击详情')
                    ])
                }
            },
            {
                title: '实验室状态',
                key: 'labstatus',
                align: 'center',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('Button', {
                                props: {
                                    type: params.row.labstatus === 1 ? 'primary' : 'error',
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
                            }, params.row.labstatus === 1 ? '使用中' : '未使用')
                    ])
                }
            },
            {
                title: '操作',
                key: 'operate',
                align: 'center',
                render: (h: any, params: any) => {
                    return h('div', [
                        h('a', {
                                props: {
                                    // size: 'small',
                                    // disabled: 'disabled'
                                },
                                style: {
                                    color: '#fff'
                                },
                                on: {
                                    // click: () => {
                                    //     // this.show(params.index)
                                    //     console.log(params)
                                    // }
                                }
                            }, '编辑')
                    ])
                }

            }

        ]
        data1: Array < object > = [{
                name: '实验室一',
                count: 40,
                powerstatus: 1,
                labstatus: 1,
            },
            {
                name: '实验室二',
                count: 20,
                powerstatus: 2,
                labstatus: 2,
            },
            {
                name: '实验室三',
                count: 30,
                powerstatus: 1,
                labstatus: 2,
            },
            {
                name: '实验室二',
                count: 34,
                powerstatus: 2,
                labstatus: 1,
            },
            {
                name: '实验室二',
                count: 26,
                powerstatus: 1,
                labstatus: 1,
            }
        ]

    }
</script>

<style lang="scss">
    @import "~@/styles/mixin/index.scss";
    $breadHeight: px2vh(105px);

    .laboratory {
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
            width: 1310px;
            margin-right: 20px;
            display: flex;
            flex-flow: column nowrap;
            float: left;

            &-search {
                height: px2vh(60px);
                border: 1px solid #363c84;
                flex-shrink: 0;

                &-item {
                    width: 25%;
                    float: left;
                    padding-left: 40px;

                    &>div {
                        line-height: px2vh(60px);
                        color: #fff;
                    }
                }

                &-btn {
                    width: 30%;
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

        &__tab{
            float: left;
            width:300px;
            height: px2vh(620px);
            box-sizing: border-box;
            border: 1px solid #363c84;
            &-header{
                height:px2vh(45);
                line-height:px2vh(45);
                border-bottom: 1px solid #363c84;
                text-align: center;
                vertical-align: px2vh(45);
                color: #01efbb;
                font-size: 14px;

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
</style>