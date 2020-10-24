<template>
    <div style="display: inline-block;font-size: 0;background-size: cover"
        :style="{backgroundImage: 'url(' +imgs.bgclound + ')'}">
        <div class="icon" :class="{active:icClick==1}" @click="iconClick(1);changeAjax('PRE_3h')">
            <img :src="imgs.forecastIcon.rain" alt="">
            <div>降水</div>
        </div>
        <div class="icon" :class="{active:icClick==2}" @click="iconClick(2);changeAjax('TEM')">
            <img :src=imgs.forecastIcon.temperature alt="">
            <div>气温</div>
        </div>
        <div class="icon" :class="{active:icClick==3}" @click="iconClick(3);changeAjax('RHU')">
            <img :src=imgs.forecastIcon.humidity alt="">
            <div>湿度</div>
        </div>
        <div class="icon" :class="{active:icClick==4}" @click="iconClick(4);changeAjax('WIN_S_Max')">
            <img :src=imgs.forecastIcon.wind alt="">
            <div>风</div>
        </div>
        <div class="ob">
            <img :src=imgs.timeIcon alt="" style="margin-left:22%">
            <div style="width:auto;font-size:30px;color:white;margin-left:2%;">观测时间：{{observes.observe_time}}</div>
        </div>
        <div class="doubleBtn">
            <!--按钮地图和列表的地方-->
            <img :src=btnList?imgs.btnList:imgs.btnListActice alt="" class="switch" @click="switchBtn(1)">
            <img :src=btnGis?imgs.btnGis:imgs.btnGisActice alt="" class="switch" style="margin-left: 7%"
                @click="switchBtn(2)">
            <img :src=btnGis?imgs.btnGis:imgs.btnGisActice alt="" class="switch" style="margin-left: 7%"
                @click="switchBtn(2)">
        </div>
        <!--显示降水和湿度等等的页面-->
        <div class="ObservationList" v-show="showList">
            <div class="observation">
                <div style="background-color: red;border-radius: 50%;">1</div>
                <span>{{this.no1_3[0].stationName}}</span>
                <span>{{this.no1_3[0].value}}</span>
            </div>
            <div class="observation">
                <div style="background-color: #F5A623;border-radius: 50%;">2</div>
                <span>{{this.no1_3[1].stationName}}</span>
                <span>{{this.no1_3[1].value}}</span>
            </div>
            <div class="observation">
                <div style="background-color:#F8E71C;border-radius: 50%;">3</div>
                <span>{{this.no1_3[2].stationName}}</span>
                <span>{{this.no1_3[2].value}}</span>
            </div>
            <div class="observation" v-for="(observe,index) in  observes.observe_data">
                <div style="background-color:#03A4FF;border-radius: 50%;">{{index+4}}</div>
                <span>{{observe.stationName}}</span>
                <span>{{observe.value}}</span>
            </div>
        </div>
        <!--显示地图的页面-->
        <div class="mapList" v-show="showMap">
            <div class="map">
                <div class="mapTitle">
                    <div :class="{active:btnNo==1}" @click="isBtn(1)">过去1h</div>
                    <div :class="{active:btnNo==2}" @click="isBtn(2)">过去3h</div>
                    <div :class="{active:btnNo==3}" @click="isBtn(3)">过去6h</div>
                    <div :class="{active:btnNo==4}" @click="isBtn(4)">过去12h</div>
                </div>
                <div class="header">静海过去一小时色斑图</div>
                <div class="seban">
                    <iframe v-if="patch==1" id="1"></iframe>
                    <iframe v-if="patch==2" id="2"></iframe>
                    <iframe v-if="patch==3" id="3"></iframe>
                    <iframe v-if="patch==4" id="4"></iframe>
                </div>
            </div>
            <img :src=imgs.tip alt="" class="tip" align="left">
            <div>看不清？拉伸可放大</div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                showList: true,
                showMap: false,
                postfix: "",
                patch: 1,
                no1_3: {},
                observes: {
                    observe_time: "2019-06-15 12：00",
                    observe_data: [
                        {
                            "stationName": "王口镇",
                            "value": "28.1"
                        },
                        {
                            "stationName": "台头",
                            "value": "28.1"
                        },
                        {
                            "stationName": "双塘",
                            "value": "27.6"
                        },
                        {
                            "stationName": "陈官屯",
                            "value": "27.2"
                        },
                        {
                            "stationName": "杨成庄",
                            "value": "27.1"
                        },
                        {
                            "stationName": "独流",
                            "value": "27"
                        },
                        {
                            "stationName": "大丰堆",
                            "value": "26.8"
                        },
                        {
                            "stationName": "沿庄",
                            "value": "26.6"
                        },
                        {
                            "stationName": "静海镇",
                            "value": "26.5"
                        },
                        {
                            "stationName": "西翟庄",
                            "value": "26.5"
                        },
                        {
                            "stationName": "唐官屯",
                            "value": "26.4"
                        },
                        {
                            "stationName": "团泊",
                            "value": "26.2"
                        },
                        {
                            "stationName": "中旺",
                            "value": "25.9"
                        },
                        {
                            "stationName": "大邱庄",
                            "value": "25.8"
                        },
                        {
                            "stationName": "蔡公庄",
                            "value": "25.8"
                        }
                    ]
                },
                no1_3: [{
                        "stationName": "子牙",
                        "value": "28.6"
                    },
                    {
                        "stationName": "梁头",
                        "value": "28.5"
                    },
                    {
                        "stationName": "良王庄",
                        "value": "28.2"
                    }
                ],
                btnNo: 1,
                imgs: {
                    forecastIcon: {
                        rain: require('./../assets/icon/forecast_ico2@2x.png'),
                        temperature: require('./../assets/icon/forecast_ico1@2x.png'),
                        humidity: require('./../assets/icon/forecast_ico3@2x.png'),
                        wind: require('./../assets/icon/forecast_ico4@2x.png'),
                        windPress: require('./../assets/icon/forecast_ico5@2x.png')
                    },
                    btnList: require('./../assets/icon/btn_list@2x.png'),
                    btnListActice: require('./../assets/icon/btn_list_pressed@2x.png'),
                    btnGis: require('./../assets/icon/btn_gis@2x.png'),
                    btnGisActice: require('./../assets/icon/btn_gis_pressed@2x.png'),
                    timeIcon: require('./../assets/icon/time@2x.png'),
                    bg: require('./../assets/bg_shikuan.jpg'),
                    tip: require('./../assets/icon/tips@2x.png'),
                    bgclound: require('./../assets/bg_shikuan.jpg')

                },
                icClick: 1,
                btnList: false,
                btnGis: true
            }
        },
        methods: {
            iconClick(n) {
                this.icClick = n
            },
            isBtn(n) {
                this.btnNo = n;
                this.patch = n;

            },
            changeAjax(type) {
                //        this.$http.get('http://129.211.63.193/jh/public/live/stationInfo?type='+type)
                this.$http.get('http://129.211.63.193/jh/public/live/stationInfo', {
                        params: {
                            type: type
                        }
                    })
                    .then((response) => {
                        console.log(response.data);
                        this.observes = response.data;
                        this.observes.observe_data.forEach((item, index) => {
                            if (true) {
                                if (Number(item.value) > 9000 || item.value == 0) {
                                    item.value = "0";
                                    this.observes.observe_data.push(item);
                                    this.observes.observe_data.shift();
                                } else {
                                    console.log(item.value);
                                    switch (type) {
                                        case 'PRE_3h':
                                            item.value = item.value + "mm";
                                            break;
                                        case 'TEM':
                                            item.value = item.value + "℃";
                                            break;
                                        case 'RHU':
                                            item.value = item.value + "%";
                                            break;
                                        case 'PRS':
                                            item.value = item.value + "pa";
                                            break;
                                        case 'WIN_S_Max':
                                            item.value = item.value + "m/s";
                                            break;
                                        default:
                                            item.value = item.value + "mm";
                                            break;
                                    }

                                }
                            } else {}

                        })
                        this.no1_3 = this.observes.observe_data.splice(0, 3);
                    }).catch((response) => {
                        console.log(response);
                    })

            },
            switchBtn(e) {
                if (e == 1) {
                    this.btnList = false;
                    this.btnGis = true;
                    this.showList = true;
                    this.showMap = false;

                } else {
                    this.btnList = true;
                    this.btnGis = false;
                    this.showList = false;
                    this.showMap = true;
                }
            }
        },
        mounted() {
            this.$nextTick(function firstLoad(){
                this.$http.get('http://39.108.130.184/demo.php').then((response)=>{
                this.observes = response.data.observes;
                console.log(this.observes)
            }).catch((response)=>{
                    console.log(response);
                  })
            })

            //       this.$http.get('http://129.211.63.193/jh/public/live/stationInfo?type=PRE_3h')
            //           .then((response)=>{
            //         console.log(response.data);
            //         this.observes = response.data;
            // //         this.observes.observe_data.value.forEach(function (item) {
            // //           item.value= item.value+"mm";
            // //         })
            //             this.observes.observe_data.forEach((item,index)=> {
            //               if (item.value){
            //                 if (Number(item.value)> 9000||Number(item.value)==0) {
            //                   item.value = "0";
            //                 }
            //                 else {
            //                   item.value = item.value + "mm";
            //                 }
            //               }
            //             })
            //         console.log(this.observes.observe_data.splice(0,3));
            //         this.no1_3 = this.observes.observe_data.splice(0,3);
            //           }).catch((response)=>{
            //         console.log(response);
            //       })
        }
    }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .icon {
        width: px2rem(92.5*4);
        height: px2rem(86*4);
        background-color: rgba(0, 0, 0, 0.4);
        display: inline-block;
        border-left: px2rem(1*4) solid rgba(255, 255, 255, 0.1);

        img {
            width: px2rem(35*4);
            height: px2rem(35*4);
            margin-left: px2rem(30*4);
            margin-top: px2rem(7*4);
        }

        div {
            width: 100%;
            font-size: px2rem(14*4);
            color: white;
            text-align: center;
            margin-top: px2rem(12*4);
        }
    }

    .icon.active {
        background-color: #28BAF3;

    }

    .mapList {
        width: px2rem(375*4);
        height: px2rem(447*4);

        .tip {
            margin-left: px2rem(102*4);
            margin-top: px2rem(6*4);
            width: px2rem(36*4);
            height: px2rem(27*4);
            display: inline-block;
            position: relative;
        }

        .tip+div {
            font-size: px2rem(14*4);
            color: white;
            display: inline-block;
            height: px2rem(20*4);
            margin-top: px2rem(10*4);
            margin-left: px2rem(10*4);
        }

        .map {
            width: px2rem(340*4);
            height: px2rem(400*4);
            background-color: rgba(34, 89, 161, 0.8);
            margin-left: px2rem(18*4);
            margin-top: px2rem(15*4);
            overflow: hidden;

            .seban {
                width: px2rem(227*4);
                height: px2rem(258*4);
                margin-left: px2rem(57*4);

                iframe {
                    width: px2rem(227*4);
                    height: px2rem(297*4);

                }
            }

            .header {
                width: px2rem(340*4);
                height: px2rem(20*4);
                line-height: px2rem(20*4);
                font-size: px2rem(14*4);
                text-align: center;
                color: white;
                margin-top: px2rem(25*4);
            }

            .mapTitle {
                width: px2rem(375*4);
                height: px2rem(25*4);
                margin-left: px2rem(42*4);
                margin-top: px2rem(32*4);

                div {
                    width: px2rem(56*4);
                    height: px2rem(24*4);
                    background-color: rgba(255, 255, 255, 0.2);
                    display: inline-block;
                    font-size: px2rem(12*4);
                    color: white;
                    line-height: px2rem(24*4);
                    text-align: center;
                    border-radius: 10%;
                    margin-left: px2rem(6*4);
                }

                div.active {
                    background-color: #28BAF3;
                }

            }
        }
    }
    .ob{
        display:flex;
        width:auto;
        height:50px;
        align-items:center;
        margin-top:2%;
        div{
            font-size: px2rem(14*4)

        }

    }

    .doubleBtn {
        .switch {
            width: px2rem(40*4);
            height: px2rem(40*4);
            margin-left: px2rem(110*4);
            margin-top: px2rem(8*4);
        }

    }

    .doubleBtn+img {
        width: px2rem(13*4);
        height: px2rem(13*4);
        font-size: px2rem(14*4);
        margin-left: px2rem(84*4);
        display: inline-block;
        margin-top: px2rem(15*4);
    }

    .doubleBtn+img+div {
        height: px2rem(20*4);
        font-size: px2rem(14*4);
        color: white;
        display: inline-block;
        margin-left: px2rem(6*4);
    }

    .ObservationList {
        display: inline-block;
        width: px2rem(375*4);
        height: auto;
        margin-top: px2rem(10*4);

        .observation {
            width: px2rem(340*4);
            margin-left: px2rem(17*4);
            height: px2rem(40*4);
            background-color: rgba(34, 89, 161, 0.8);
            margin-bottom: px2rem(4*4);
            overflow: hidden;
            border-radius: 3%;

            div {
                width: px2rem(18*4);
                height: px2rem(18*4);
                margin-top: px2rem(10*4);
                margin-left: px2rem(6*4);
                color: white;
                font-size: px2rem(10*4);
                text-align: center;
                line-height: px2rem(18*4);
                display: inline-block;
            }

            span {
                width: px2rem(140*4);
                height: px2rem(20*4);
                display: inline-block;
                font-size: px2rem(14*4);
                line-height: px2rem(20*4);
                color: white;
                margin-top: px2rem(10*4);
                margin-left: px2rem(5*4);
            }

            span+span {
                width: auto;
                height: px2rem(20*4);
                display: inline-block;
                font-size: px2rem(14*4);
                line-height: px2rem(20*4);
                color: white;
                margin-top: px2rem(10*4);
                margin-left: px2rem(90*4);
            }
        }
    }
</style>