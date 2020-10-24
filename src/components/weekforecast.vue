<template>
    <div class="prediction">
        <canvas id="main" width="1125" height="300"></canvas>
        <div class="prediction-children" v-for="(reportDay,index) in reportDays" :key="index" >
            <span>{{reportDay.fxTime | filterDate}}</span>
            <span>{{reportDay.fxTime | filterWeek}}</span>
            <img :src=reportDay.iconDay alt="">
            <div>{{reportDay.textDay}}</div>
            <div>{{reportDay.tempMax}}℃</div>
            <div class="bottom">{{reportDay.tempMin}}℃</div>
            <div class="bottom" style="top:65%">{{reportDay.textNight}}</div>
            <img class="bottom-img" :src="reportDay.iconNight">
            <div>{{reportDay.windDirDay}}</div>
            <div>{{reportDay.windScaleDay}}级</div>
        </div>
        <!--         <div class="prediction-children">
                    <span>01/17</span>
                    <span>今天</span>
                    <img src="./../assets/weatherIcon/晴.png" alt="">
                    <div>晴</div>
                    <div>12℃</div>
                    <div class="bottom">12℃</div>
                    <div class="bottom" style="top:65%">晴</div>
                    <img class="bottom-img" src="./../assets/weatherIcon/晴.png">
                    <div>东南风</div>
                    <div>3~4级</div>
                </div>-->
    </div>

</template>
<script>
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar')
    require('echarts/lib/chart/line')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    import moment from 'moment'

    export default {
        props:[
            'reportDays'
        ],
        data() {
            return {
                futures: [{}, {}, {}, {}, {}, {}, {}],
                imgs: {
                    weatherIcon: {
                        fine: require('./../assets/weatherIcon/晴.png'),
                        fineN: require('./../assets/weatherIcon/晴n.png'),
                        cloud: require('./../assets/weatherIcon/多云.png'),
                        cloudN: require('./../assets/weatherIcon/多云n.png'),
                        dark: require('./../assets/weatherIcon/阴天.png'),
                        smallRain: require('./../assets/weatherIcon/小雨.png'),
                        middleRain: require('./../assets/weatherIcon/中雨.png'),
                        southWind: require('./../assets/weatherIcon/西北风.png')
                    }
                }
            }
        },
        methods: {
            changeDate() {
                let myChart = echarts.init(document.getElementById('main'));
                myChart.setOption({
                    xAxis: {
                        show: false,
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                        splitLine: {
                            show: false
                        }

                    },
                    series: [{
                        // 根据名字对应到相应的系列
                        name: '白天气温',
                        type: 'line',
                        data: [15, 15, 15, 15, 15, 15, 15]
                    }]
                });
            }
        },
        filters: {
            filterDate(val){
             return   moment(val,'YYYY-MM-DD').format('MM/DD')
            },
            filterWeek(val){
                let today = moment().format('YYYY-MM-DD')
                let item = parseInt(moment(val,'YYYY-MM-DD').format('e'))
                if (today == val){
                    return '今天'
                }
                else {
                    switch (item) {
                        case 0:
                            return '周日'
                        break;
                        case 1:
                            return '周一'
                            break;
                        case 2:
                            return '周二'
                            break;
                        case 3:
                            return '周三'
                            break;
                        case 4:
                            return '周四'
                            break;
                        case 5:
                            return '周五'
                            break;
                        case 6:
                            return '周六'
                            break;

                    }
                }

            }
        },
        mounted() {


   /*         let DayWeiDu = [];
            this.reportDays.forEach((item) => {
                DayWeiDu.push(item.tempMax)
            });
            let NightWeiDu = [];
            this.reportDays.forEach((item) => {
                NightWeiDu.push(item.tempMin)
            });
            var main = document.getElementById("main");
            let myChart = echarts.init(document.getElementById('main'))
            // 绘制图表
            var option = {
                title: {},
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: '35%',
                    bottom: '0%'
                },
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    splitLine: {
                        show: false
                    }

                },
                yAxis: {
                    show: false,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    splitLine: {
                        show: false
                    }

                },
                series: [
                    {
                        name: '白天气温',
                        type: 'line',
                        symbol: 'circle',     //设定为实心点
                        symbolSize: 24,
                        data: DayWeiDu,
                        itemStyle: {
                            normal: {
                                color: '#F9B632',
                                lineStyle: {
                                    width: 4//设置线条粗细
                                }
                            }
                        }
                    },
                    {
                        name: '夜晚气温',
                        type: 'line',
                        symbol: 'circle',     //设定为实心点
                        symbolSize: 24, //设定实心点的大小
                        data: NightWeiDu,
                        lineStyle: {
                            color: '#00FF00'
                        },
                        itemStyle: {
                            normal: {
                                color: '#00ADEF',
                                lineStyle: {
                                    width: 4,//设置线条粗细
                                    borderWidth: 0
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);*/


        },
        updated() {
            let DayWeiDu = [];
            this.reportDays.forEach((item) => {
                DayWeiDu.push(item.tempMax)
            });
            let NightWeiDu = [];
            this.reportDays.forEach((item) => {
                NightWeiDu.push(item.tempMin)
            });
            var main = document.getElementById("main");
            let myChart = echarts.init(document.getElementById('main'))
            // 绘制图表
            var option = {
                title: {},
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: '25%',
                    bottom: '10%'
                },
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    splitLine: {
                        show: false
                    }

                },
                yAxis: {
                    show: false,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    splitLine: {
                        show: false
                    }

                },
                series: [
                    {
                        name: '白天气温',
                        type: 'line',
                        symbol: 'circle',     //设定为实心点
                        symbolSize: 24,
                        data: DayWeiDu,
                        itemStyle: {
                            normal: {
                                color: '#F9B632',
                                lineStyle: {
                                    width: 4//设置线条粗细
                                }
                            }
                        }
                    },
                    {
                        name: '夜晚气温',
                        type: 'line',
                        symbol: 'circle',     //设定为实心点
                        symbolSize: 24, //设定实心点的大小
                        data: NightWeiDu,
                        lineStyle: {
                            color: '#00FF00'
                        },
                        itemStyle: {
                            normal: {
                                color: '#00ADEF',
                                lineStyle: {
                                    width: 4,//设置线条粗细
                                    borderWidth: 0
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);

        }

    }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";

    .prediction {
        border-top: px2rem(1*4) solid rgba(255, 255, 255, 0.4);
        font-size: 0;
        border-bottom: px2rem(1*4) solid rgba(255, 255, 255, 0.4);
        height: px2rem(460*4);
        position: relative;

        #main {
            height: px2rem(100*4);
            width: px2rem(375*4);
            position: absolute;
            top: px2rem(175*4);
        }

        .prediction-children {
            display: inline-block;
            width: px2rem(52.5*4);
            height: px2rem(460*4);
            border-right: px2rem(0.5*4) solid rgba(255, 255, 255, 0.4);
            text-align: center;
            position: relative;

            span {
                display: inline-block;
                height: px2rem(16*4);
                position: absolute;
                color: white;
                font-size: px2rem(12*4);
                left: px2rem(13*4);
                top: px2rem(18*4);
            }

            span + span {
                display: inline-block;
                width: px2rem(27*4);
                height: px2rem(16*4);
                position: absolute;
                color: white;
                font-size: px2rem(12*4);
                left: px2rem(13*4);
                top: px2rem(36*4);

            }

            div {
                display: inline-block;
                width: px2rem(53*4);
                height: px2rem(16*4);
                position: absolute;
                color: white;
                text-align: center;
                font-size: px2rem(12*4);
                left: px2rem(-0*4);
                top: px2rem(140*4);
            }

            div + div {
                display: inline-block;
                width: px2rem(27*4);
                height: px2rem(16*4);
                position: absolute;
                color: white;
                font-size: px2rem(12*4);
                left: px2rem(13*4);
                top: px2rem(170*4);


            }

            img {
                position: absolute;
                top: px2rem(90*4);
                left: px2rem(0*4);
                width: px2rem(14.4*14);
                height: px2rem(11.2*14);
            }

            .arrow {
                position: absolute;
                width: px2rem(15*4);
                height: px2rem(15*4);
                top: px2rem(137*4);
                left: px2rem(17*4);
            }

            .arrow + div {
                display: inline-block;
                width: 100%;
                height: auto;
                left: 0;
                text-align: center;
                top: px2rem(165*4);
            }

            .bottom {
                position: absolute;
                width: px2rem(53*4);
                left: 0;
                text-align: center;
                top: px2rem(269*4);

                .bottom .last {
                    top: px2rem(294*4);
                }
            }

            .bottom-img {
                position: absolute;
                top: px2rem(336*4);
                width: px2rem(14.4*14);
                height: px2rem(11.2*14);

            }

            .bottom-img + div {
                position: absolute;
                top: px2rem(382*4);
                font-size: px2rem(12*4);
                width: px2rem(40*4);
                left: px2rem(5*4);

            }

            .bottom-img + div + div {
                position: absolute;
                top: px2rem(413*4);
                font-size: px2rem(12*4);
                width: px2rem(40*4);
                left: px2rem(5*4);

            }

        }

        .last {
            display: inline-block;
            width: px2rem(53*4);
            height: px2rem(460*4);
            border-right: px2rem(0.5*4) solid rgba(255, 255, 255, 0.4);
            text-align: center;
            position: relative;

        }

    }
</style>
