export let hcxzOption: object = {
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br />{b}: {c} ({d}%)"
    },
    graphic: {
        type: 'group',
        left: '23%',
        top: 'center',

        children: [{
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    textAlign: 'center',
                    text: "总耗材数",
                    fontSize: 12,
                    fill: "#fff"
                }
            },
            {
                type: 'text',
                left: 'center',
                top: '12px',
                style: {
                    textAlign: 'center',
                    text: "2056",
                    fontSize: 14,
                    fill: "#fff",
                    fontStyle: 'bold'
                }
            }
        ]
    },
    legend: {
        orient: 'vertical',
        y: 'middle',
        right: '10%',
        textStyle: {
            fontSize: 12,
            color: '#FFF'
        },
        data: ['易燃易爆固体', '易燃液体试剂', '氧化性试剂',
            '毒害性试剂', '腐蚀性试剂', '低温存放试剂'
        ]
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '80%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{d}%',
                fontSize: 12
            },
            emphasis: {
                show: true,
                position: 'inside',
                formatter: '{d}%',
                fontSize: 12,
                fontStyle: 'bold'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: '易燃易爆固体'
            },
            {
                value: 310,
                name: '易燃液体试剂'
            },
            {
                value: 234,
                name: '氧化性试剂'
            },
            {
                value: 135,
                name: '毒害性试剂'
            },
            {
                value: 1548,
                name: '腐蚀性试剂'
            },
            {
                value: 128,
                name: '低温存放试剂'
            }
        ]
    }]
}

export let rljOption = {
    tooltip: {
        show: false
    },
    grid: {
        left: '5%',
        right: '10%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        name: '日',
        data: ['07', '08', '09', '10', '11', '12', '13'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#DCDCDC'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        name: '人数(人)',
        nameTextStyle: {
            color: '#fff'
        },
        nameGap: 30,
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: ' #4B4558'
            }
        }

    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '20%',
        itemStyle: {
            color: ['#40E0D0']
        },
        emphasis: {
            itemStyle: {
                color: ['#EE7F7C']
            },
        },
        data: [500, 480, 150, 200, 300, 490, 410]
    }]
}

export let sysyslOption = {
    tooltip: {
        show: false
    },
    grid: {
        left: '5%',
        right: '10%',
        bottom: '3%',
        containLabel: true,
    },
    legend: {
        data: ['总实验室用水量', '各实验室日平均用水量'],
        right: '5%',
        textStyle: {
            color: '#fff',
        }
    },
    xAxis: [{
        type: 'category',
        name: '日',
        data: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#DCDCDC'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        name: '人数(人)',
        nameTextStyle: {
            color: '#fff'
        },
        nameGap: 30,
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: ' #4B4558'
            }
        }

    }],
    series: [{
            name: '总实验室用水量',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                color: ['#6BACEA'],
                barBorderRadius: 5
            },
            emphasis: {
                itemStyle: {
                    color: ['#EE7F7C']
                },
            },
            data: [7, 9, 10, 8.8, 7, 8.9, 7, 9.1, 8.5, 7]
        },
        {
            name: '各实验室日平均用水量',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                color: ['#F08EB8'],
                barBorderRadius: 5
            },
            emphasis: {
                itemStyle: {
                    color: ['#EE7F7C']
                },
            },
            data: [1, 1.5, 1.8, 1.5, 1.2, 1.5, 1.2, 1.5, 1.6, 1.3]
        }
    ]
}


export let sysydlOption = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['01', '02', '03', '04', '05', '06', '07',
            '08', '09', '10', '11', '12', '13', '14', '15'
        ],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            //    margin: 30,
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '用电量\n(kwh)',
        nameGap: 30,
        nameTextStyle: {
            align: 'left',
            color: '#fff'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            //    margin: 30,
            textStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: ' #4B4558'
            }
        }
    },
    series: [{
        data: [400, 500, 410, 450, 410, 550, 510,
            500, 630, 610, 600, 690, 500, 480, 510
        ],
        type: 'line',
        areaStyle: {
            color: "#E5E5E5",
            opacity: .5
        },
        lineStyle: {
            color: "#E5E5E5"
        },
        itemStyle: {
            color: "#E5E5E5",
            borderColor: '#6BACEA',
        }

    }]
}