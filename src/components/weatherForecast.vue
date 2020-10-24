<template>
<div :style="{background: '#04132D'}">
    <!--
        <group>
        	<picker :data='selectLists' v-model='selectCss' @on-change='selectClass'></picker>
        </group> -->
<!--       遮盖层 -->

<!--    <div class="selectCity2" v-if="selectShow" @click="selectShows()">-->
<!--    </div>-->

    <div class="selectCity" v-if="selectShow">
        <div class="off" @click="selectShows()">取消</div>
        <div class="sure" @click="">确定</div>
        <div class="selectList">
            <div v-for="(selectList,index) in selectLists"
                 @click="selectClass(index)
            selectCounty(selectList.lon,selectList.lat,selectList.countyName)" :class="{active:selectCss==index}">
                {{selectList.countyName}}
            </div>
        </div>
    </div>
<!--       遮盖层 -->
<!--    <div class="selectCity3" v-if="selectShow" @click="selectShows()">-->
<!--    </div>-->
    <div class="general">
        <div class="pin"></div>
        <div class="address" @click="selectShows()">{{address}} | {{address}}</div>
        <div class="arrow"></div>
        <div class="freshTime">{{freshTime}} 更新</div>
        <div class="geng" @click="selectCounty(nowLocation.lon,nowLocation.lat,nowLocation.countyName)"></div>
    </div>
    <div class="titleName"><div>最近12小时逐小时预报</div></div>
    <Hours :hourReports="hourReports"></Hours>
    <div class="titleName">
        <div>一周预报</div>
    </div>
    <Weeks :reportDays="reportDays"></Weeks>
    <div class="nowTime">
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
      <div class="nowTime-child">02点</div>
    </div>
    <Times></Times>
</div>

</template>
<script>
  import airWind from '@/components/airWind'
  import Hours from '@/components/hourforecast'
  import Times from '@/components/timeforecast'
  import Weeks from '@/components/weekforecast'
  import Ecanvas from '@/components/Ecanvas'
  import myMarquee from '@/components/marquee'
  import axios from 'axios'
  import wx from 'weixin-js-sdk'
import { Group,Picker } from 'vux'
export default {
    data(){
        return{
            bg:require('./../assets/bg.jpg'),
            nowLon:"",
            nowLat:"",
            selectShow:false,
            selectCss:0,
            nowLocation:{
                countyName:"梅列区",
                    lon:'117.28',
                    lat:'26.12'
            },
            selectLists:[
                {
                    countyName:"梅列区",
                    lon:'117.28',
                    lat:'26.12'
                },
                 {
                    countyName:"三元区",
                    lon:'117.61',
                    lat:'26.24'
                },
                {
                    countyName:"永安市",
                    lon:'117.36',
                    lat:'25.94'
                },
                {
                    countyName:"沙县",
                    lon:'117.80',
                    lat:'26.41'
                },
                {
                    countyName:"尤溪县",
                    lon:'118.14',
                    lat:'26.17'
                },
                 {
                    countyName:"大田县",
                    lon:'117.85',
                    lat:'25.69'
                },
                {
                    countyName:"明溪县",
                    lon:'117.20',
                    lat:'26.36'
                },
                {
                    countyName:"清流县",
                    lon:'116.82',
                    lat:'26.18'
                },
                   {
                    countyName:"宁化县",
                    lon:'116.66',
                    lat:'26.26'
                },
                   {
                    countyName:"将乐县",
                    lon:'116.66',
                    lat:'26.26'
                },
                   {
                    countyName:"泰宁县",
                    lon:'117.18',
                    lat:'26.90'
                },
                   {
                    countyName:"建宁县",
                    lon:'116.85',
                    lat:'26.83'
                },
            ],
            hourReports:[],
            reportDays:[],
            sun:{},
            imgs:{
                sunImg:'./../assets/icon/sun5_7@2x.png'

            },
          address:"",
          freshTime:"",
          rainForecast:{
              message:"",
              rainMap:[]
          },
          changes:{
          one:require('./../assets/icon/sun5_7@2x.png'),
          two:require('./../assets/icon/sun7_9@2x.png'),
          three:require('./../assets/icon/sun9_11@2x.png'),
          four:require('./../assets/icon/sun11_13@2x.png'),
          five:require('./../assets/icon/sun13_15@2x.png'),
          six:require('./../assets/icon/sun15_17@2x.png'),
          seven:require('./../assets/icon/sun17_19@2x.png')
        },
          temp:"",
          weather:"",
          airWind: {
                    windDir: "东南风",
                    windSpeed: "5-6级",
                    rh: "55%",
                    mass: "38",
                    level: "优"
                },
        storeHouse:{},
        }
    },
    methods:{
        addZero(num) {

            if (num < 10) {
                return '0'+num
            } else {
                return num
            }
        },
        selectClass(n){
            this.selectCss = n
            this.selectShow = !this.selectShow
        },
        selectShows(){
            this.selectShow = !this.selectShow;
            if(document.body.style.overflow == 'hidden')
              document.body.style.overflow = 'visible';
            else
              document.body.style.overflow = 'hidden';
        },
        selectCounty(lon,lat,countyName){
              this.nowLat = lat
                this.nowLon = lon
            this.nowLocation = {
                lon,
                lat,
                countyName
            }
            console.log(this.hourReports)
            console.log(this.reportDays)
            this.$http.get('http://www.liangnutech.com/pt-wechat/public/index.php/api/pt_weather/weatherForecast',{
                params:{
                    lon:lon,
                    lat:lat
                }
            })
            .then((response)=>{
                this.address = countyName
                this.freshTime = response.data.data.updateTime.substring(11,16)

                this.hourReports = response.data.data.forecast24h
                this.hourReports.forEach((item)=>{
                    item.text = require('./../assets/weatherIcon/'+item.text+'.png')
                    item.windDir = require('./../assets/weatherIcon/'+item.windDir+'.png')
              })

              this.reportDays = response.data.data.forecast7D
                            this.reportDays.forEach((item)=>{
                                 item.iconDay =  require('./../assets/weatherIcon/'+item.textDay+'.png')
                                item.iconNight =  require('./../assets/weatherIcon/'+item.textNight+'.png')
                                // item.week = item.week.replace("星期","周")
                // this.sun =response.data.sunInfo
                // this.weather = response.data.weather
                // this.temp = response.data.temp
                // this.airWind.rh = response.data.rh
                // this.airWind.windSpeed = response.data.windSpeed
                // this.airWind.windDir = response.data.windDir
                // this.airWind.mass = response.data.water
                // this.rainForecast = response.data.rainForecast
                // this.address = countyName
                //
                // let nowDate = new Date();
                // let year = nowDate.getFullYear();
                // let month = nowDate.getMonth()+1;
                // let day = nowDate.getDate();
                // let hour = nowDate.getHours();
                // let minutes = nowDate.getMinutes();
                // this.freshTime = this.addZero(hour)+':'+this.addZero(minutes);
              })
            })
        },
    },
    components:{
        airWind,
        Hours,
        Weeks,
        Ecanvas,
        Times,
        Group,
        Picker
    },
    mounted(){

        let that = this
        // that.selectCounty(117.61, 26.24, '三元区')
       /* let script = document.createElement("script")
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=FdqfZxoVZGdKyemzXza9EsRNutuoGQuk&callback=createMap"
        document.head.appendChild(script)*/
        this.$http.get('http://www.liangnutech.com/pt-wechat/public/index.php/api/pt_weather/weatherForecast',{
            params:{
                lon:this.nowLocation.lon,
                lat:this.nowLocation.lat
            }
        })
            .then((response)=>{
                this.address = this.nowLocation.countyName
                this.freshTime = response.data.data.updateTime.substring(11,16)

                this.hourReports = response.data.data.forecast24h
                this.hourReports.forEach((item)=>{
                    item.text = require('./../assets/weatherIcon/'+item.text+'.png')
                    item.windDir = require('./../assets/weatherIcon/'+item.windDir+'.png')
                })

                this.reportDays = response.data.data.forecast7D
                this.reportDays.forEach((item)=>{
                    item.iconDay =  require('./../assets/weatherIcon/'+item.textDay+'.png')
                    item.iconNight =  require('./../assets/weatherIcon/'+item.textNight+'.png')

                })

            })
       /* window.createMap = () => {
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r) {
                if(this.getStatus() === 0) {
                    console.log(r.point);
                    axios.get('http://218.86.120.188:7941/sanming/public/report/Weather?lon='+r.point.lng + '&lat='+r.point.lat)
                    .then(
                        (response)=>{
                            console.log(response);
                            that.nowLon = r.point.lng
                        that.nowLat = r.point.lat
                        that.hourReports = response.data.hourReport
                        that.hourReports.forEach((item)=>{
                            item.windDir = require('./../assets/weatherIcon/'+item.windDir+'.png');
                        })
                        that.reportDays = response.data.reportDay
                        that.reportDays.forEach((item)=>{
                            item.week = item.week.replace("星期","周");
                            that.sun =response.data.sunInfo
                            that.weather = response.data.weather
                            that.temp = response.data.temp
                            that.airWind.rh = response.data.rh
                            that.airWind.windSpeed = response.data.windSpeed
                            that.airWind.windDir = response.data.windDir
                            that.airWind.mass = response.data.water
                            that.rainForecast = response.data.rainForecast
                            that.address = response.data.location.address

                            let nowDate = new Date();
                            let year = nowDate.getFullYear();
                            let month = nowDate.getMonth()+1;
                            let day = nowDate.getDate();
                            let hour = nowDate.getHours();
                            let minutes = nowDate.getMinutes();
                            that.freshTime = that.addZero(hour)+':'+that.addZero(minutes);
                        })
                    })
                } else {
                    console.log('定位失败，原因：' + this.getStatus());
                }
            },{enableHighAccuracy: true})
        }*/

    },
    updated(){
/*        this.$nextTick(function sunChange() {
        let sunDateHours = new Date().getHours();
        console.log("当前小时",sunDateHours)
        switch (Math.floor((sunDateHours + 1) / 2)) {
        case 3:
          this.imgs.sunImg = this.changes.one;
          break;
        case 4:
          this.imgs.sunImg = this.changes.two;
          break;
        case 5:
          this.imgs.sunImg = this.changes.three;
          break;
        case 6:
          this.imgs.sunImg = this.changes.four;
          break;
        case 7:
          this.imgs.sunImg = this.changes.five;
          break;
        case 8:
          this.imgs.sunImg = this.changes.six;
          break;
        case 9:
          this.imgs.sunImg = this.changes.seven;
          break;
        default:
          this.imgs.sunImg = this.changes.seven;
          break;
      };
        }
    )*/
    }

}
</script>
<style lang="scss" scoped>
   @import "../lib/hotcss/px2rem.scss";
   .selectCity{
       width: 100%;
       position: absolute;
       display: flex;
       flex-flow: row wrap;
       background-color: #04132D;
       align-content: flex-start;
       justify-content: center;
       z-index: 999;
	    border-bottom:px2rem(1*4) rgba(231,231,231,0.1) solid;
	    top:px2rem(400*4);
      .sure{
              font-size: px2rem(14*4);
              position: absolute;
              left: px2rem(14*4);
              top: px2rem(12*4);
              color: #FFFFFF;
          }
      .off{
              font-size: px2rem(14*4);
              position: absolute;
              right: px2rem(14*4);
              top: px2rem(12*4);
              color: #FFFFFF;
          }
       .selectList{
            width: 100%;
       		height: px2rem(222*4);
	    	overflow: scroll;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            margin-top: px2rem(44*4);
            border-top: px2rem(1*4) rgba(231,231,231,0.4) solid;
            .active{
                background-color: #04132D;
                border: px2rem(1*4) rgba(255,255,255,0.3) solid;
                color: (#FFFFFF);
            }
           div{
               width: 100%;
               height: px2rem(30*4);
               font-size: px2rem(14*4);
               display: flex;
               justify-content: center;
               align-items: center;
               color: rgba(255, 255, 255, 0.4);
               box-sizing: content-box;
           }

       }
   }
   .selectCity2{
       width: 100%;
       position: absolute;
       background-color: #000000;
       z-index: 999;
      opacity: 0.4;
      height:px2rem(400*4);
   }
   .selectCity3{
       width: 100%;
       position: absolute;
       background-color: #000000;
       z-index: 999;
      opacity: 0.4;
      top: px2rem(668*4);
      height:px2rem(770*4);
   }
   .line{
       width: 100%;
       overflow: hidden;
       .titleName{
           width: 100%;
           font-size: px2rem(14*4);
           height: px2rem(56*4);
           color: white;
           border: 0;
          overflow: hidden;
           border-bottom: px2rem(1*4) solid rgba(255,255,255,0.2);
           .region{
                background-size: cover;
                width: px2rem(32*4);
                height: px2rem(32*4);
                display: inline-block;
                padding-top: px2rem(8*4);
                margin-left: px2rem(32*4);
           }
           .temNumber{
                background-size: cover;
                width: px2rem(32*4);
                height: px2rem(32*4);
                display: inline-block;
                padding-top: px2rem(8*4);
                margin-left: px2rem(32*4);
           }
           .weatherIcons{
                background-size: cover;
                width: px2rem(45*4);
                height: px2rem(40*4);
                display: inline-block;
                margin-left: px2rem(88*4);
                background-image: url('./../assets/weatherIcon/多云.png')
            }
           .weatherIcons2{
                background-size: cover;
                width: px2rem(45*4);
                height: px2rem(40*4);
                display: inline-block;
                margin-left: px2rem(30*4);
                background-image: url('./../assets/weatherIcon/多云n.png')
            }
       }

       #line{
           width: 100%;
           height: pxwrem(192*4);
           position: relative;
       }
   }
   .titleName{
       display: flex;
       align-items: center;
       background: #030f26;
       width: 100%;
       font-size: px2rem(14*4);
       height: px2rem(39*4);
       line-height: px2rem(35*4);
       color: white;
       border-top: px2rem(1*4) solid rgba(255,255,255,0.2);
       overflow: hidden;
       div {
           margin-left: px2rem(20*4);
       }
   }
   .sun{
       display:flex;
       margin-top: px2rem(33*4);
       flex-flow: row wrap;
       width: 100%;;
       justify-content: center;
       img{
           width: px2rem(315*4);
           height: px2rem(100*4);
       }
       div{
           width: px2rem(328*4);
           display: flex;
           height: px2rem(19*4);
           justify-content: space-between;
           margin-top: px2rem(3*4);
           div{
               width: auto;
               font-size: px2rem(14*4);
               color: white;
           }

       }
     .sunTime{
         margin-top: px2rem(16*4);
     }

   }
  .general{
      width: 100%;
      height: px2rem(404*4);
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      .freshTime{
          font-size: px2rem(14*4);
          margin-top: px2rem(25*4);
          color: white;
          position: absolute;
          right: px2rem(32*4);
      }
      .pin{
          width: px2rem(10*4);
          height: px2rem(13*4);
          background-image: url('./../assets/icon/pin@2x.png');
          background-size: cover;
          margin-top: px2rem(25*4);
          margin-left: px2rem(12*4);
      }
      .pin +div{
          font-size: px2rem(14*4);
          color: white;
          margin-top: px2rem(23*4);
            margin-left: px2rem(3*4);
          width: px2rem(250*4);

      }
      .arrow{
          width: px2rem(8*4);
          height: px2rem(4*4);
          background-image: url('./../assets/icon/arrow@2x.png');
          background-size: cover;
          margin-top: px2rem(27*4);
          margin-left: px2rem(125*4);
      }
      .geng{
      width: px2rem(14*4);
      height: px2rem(14*4);
      background-image: url('./../assets/icon/refresh@2x.png');
      background-size: cover;
      margin-top: px2rem(26*4);
      position: absolute;
      right: px2rem(12*4);
      }
      .address{
          font-size: px2rem(14*4);
          margin-top: px2rem(25*4);
          color: white;
          position: absolute;
          left: px2rem(31*4);
      }
  }
  .nowTime{
    height: px2rem(31*4);
    background: rgb(29,44,66);
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  .nowTime-child{
    padding: px2rem(7*4);
  }




</style>

