<template>
    <div id="MainChart" :style="{width: '100%', height: '100%'}"> </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: 'MainChart',
        data() {
            return {
                time: [["2019-03-26 21:37", 10] , 
                    ["2019-03-26 21:38", 15] , 
                    ["2019-03-26 21:39", 20], 
                    ["2019-03-26 21:40", 25], 
                    ["2019-03-26 21:41", 20],
                    ["2019-03-26 21:42", 15]],
                time2: [["2019-03-26 21:37", 40] , 
                    ["2019-03-26 21:38", 50] , 
                    ["2019-03-26 21:39", 60], 
                    ["2019-03-26 21:40", 50], 
                    ["2019-03-26 21:41", 55],
                    ["2019-03-26 21:42", 50]]
            }
        },
        mounted() {
            this.draw()
        },
        methods: {
            randomData() {
                new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
            },
            draw() {
                let mainChart = echarts.init(document.getElementById('MainChart'))
                mainChart.setOption({
                    backgroundColor: '#2f343a',
                    title: {
                        text: '流量曲线图',
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 16,
                            color: '#F1F1F3'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    dataZoom: [{
                        type: 'inside',   
                        minValueSpan: "0:1:0"
                    }],
                    xAxis: {
                        type: 'time',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ffffff'
                            }
                        },
                    },
                    yAxis: [{
                        type: 'value',
                        name: '单位（KB）',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ffffff'
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 14
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    }],
                    series: [{
                        name: '总量',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(137, 189, 27, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(137, 189, 27, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(137,189,27)',
                                borderColor: 'rgba(137,189,2,0.27)',
                                borderWidth: 12

                            }
                        },
                        data: this.time,
                    }, {
                        name: '测试',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0, 136, 212, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(0, 136, 212, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        data: this.time2,
                    }]
                })
            }
        }
    }
</script>