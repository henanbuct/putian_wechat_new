<template>
    <div :style="bgclound" style="display: inline-block;background-size: cover;color: white;min-height:800px">
<!--         <div v-for="item in nowAlert" style="width: 100%;height: auto" v-if="nowAlert.length>0">
            <div class="nothing"></div>
            <div class="mark">
                <img :src=item.eventImg class="img">
            </div>
            <span class="evtTitle">{{item.eventTitle}}</span>
            <div class="text">{{item.description}}</div>
              <div class="alerts"></div>
        </div> -->

<!--         <div style="width: 100%;height: auto" v-if="nowAlert.length>1">
            <div class="nothing"></div>
            <div class="mark">
                <img :src=nowAlert[1].eventImg alt="" class="img"
                οnerrοr="this.src='http://218.86.120.188:7941/sanming/public/国突预警信号style2/others_yellow.png';this.οnerrοr=null;">
            </div>
            <span>{{nowAlert[0].eventTitle}}</span>
            <div class="text">{{nowAlert[1].description}}</div>
              <div class="alerts"></div>
        </div>
         -->
        <div style="width: 100%;height: auto">
            <div class="nothing"></div>
            <div class="mark">
                <img class="img" :src="titleInfo.img">
            </div>
            <span>{{titleInfo.t1}}{{titleInfo.t2}}预警[Ⅲ级/较重]</span>
            <div class="text">{{titleInfo.message}}</div>
              <div class="alerts"></div>
        </div>

<!--         <div v-if="nowAlert.length ==0">
                <div class="nothing" style="width:100%;height:30px"></div>
            <img src="../assets/wuyujing.png" alt="" style="margin-left:24%;" id="noWarning">
        </div> -->
        <div class="census">
            <span class="censusTitle">近一个月预警统计</span>
         <!--   <div class="censusAlert">
                <img :src=countAlert.img alt="">
                <span style="display: inline-block;position: absolute;left: 15%" v-text="countAlert.typekey"></span>
                <span style="display: inline-block;position: absolute;left: 85%" v-text="countAlert.count">12次</span>
            </div>-->

            <div class="censusAlert">
                <img alt="">
                <span style="display: inline-block;position: absolute;left: 15%">大风红色预警</span>
                <span style="display: inline-block;position: absolute;left: 85%">{{alarmInfo.windRedCount}}次</span>
            </div>
            <div class="censusAlert">
                <img alt="">
                <span style="display: inline-block;position: absolute;left: 15%">大风橙色预警</span>
                <span style="display: inline-block;position: absolute;left: 85%">{{alarmInfo.windOrangeCount}}次</span>
            </div>
            <div class="censusAlert">
                <img alt="">
                <span style="display: inline-block;position: absolute;left: 15%">暴雨黄色预警</span>
                <span style="display: inline-block;position: absolute;left: 85%">{{alarmInfo.rainYellowCount}}次</span>
            </div>
            <div class="censusAlert">
                <img alt="">
                <span style="display: inline-block;position: absolute;left: 15%">台风蓝色预警</span>
                <span style="display: inline-block;position: absolute;left: 85%">{{alarmInfo.typhoonBlueCount}}次</span>
            </div>
            <div class="censusAlert">
                <img alt="">
                <span style="display: inline-block;position: absolute;left: 15%">高温蓝色预警</span>
                <span style="display: inline-block;position: absolute;left: 85%">{{alarmInfo.highTemBlueCount}}次</span>
            </div>
            <div class="censusAlert">
                <img alt="">
                <span style="display: inline-block;position: absolute;left: 15%">雷电黄色预警</span>
                <span style="display: inline-block;position: absolute;left: 85%">{{alarmInfo.thunderBlueCount}}次</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {getWarningData} from "../requests";

    export default {
    data() {
      return {
          alarmInfo:{},
          titleInfo:{},
            bgclound:{
                backgroundImage: "url(" + require('./../assets/bg_shikuan.jpg')+ ")",
                height:'100vh',
                backgroundRepeat: "no-repeat"
            },
            nowAlert:[],
         countAlerts:[],
          errorUserPhoto1:"this.src='http://218.86.120.188:7941/sanming/public/国突预警信号style2/others_yellow.png'"

      }
    },
    methods: {},
    mounted() {
        let id = this.$route.query.id
        console.log(id)
        if (id){
            getWarningData(id).then(res=>{
                console.log(res)
                this.titleInfo = {
                    img : res.data.data.disaster.warnImg,  //图片
                    message: res.data.data.disaster.Issuecontent,  //文字
                    t1:res.data.data.disaster.signaltype,
                    t2:res.data.data.disaster.signallevel,
                }
                this.alarmInfo = res.data.data.alarm_num


            })
        }

      //   this.$http.get('http://118.126.88.48/pt-server/public/index.php/wechat/Warning/disasterWarningCount?id=4').then(res=>{
      //       console.log(res)
      //   })
      // this.$http.get('http://218.86.120.188:7941/sanming/public/report/Alertinfo')
      //     .then((response)=>{
      //       this.nowAlert = response.data.nowAlert;
      //       console.log(response);
      //       this.countAlerts = response.data.statics;
      //     })

    }

  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .alerts{
        width: 100%;
        height: 20px;
        border-bottom: px2rem(1*4) solid rgba($color: #fff, $alpha: 0.5);
    }
    #noWarning{
        width: px2rem(192*4);
        height: px2rem(92*4);

    }
    .census{
        margin-bottom: px2rem(10*4);
        .censusAlert{
            height: px2rem(40*4);
            position: relative;
            margin-bottom:px2rem(8*4);
            img{
                width: px2rem(24*4);
                height: px2rem(24*4);
                margin-top: px2rem(8*4);
                margin-left: px2rem(10*4);
            }
        }
        .censusTitle{
            width: px2rem(375*4);
            text-align: center;
            display: inline-block;
            font-size: px2rem(14*4);
            line-height: px2rem(40*4);
            margin-top: px2rem(8*4);
        }
        div{
            background-color: rgba(34, 89, 161, 0.8);
            width: px2rem(340*4);
            height: px2rem(40*4);
            margin-right: auto;
            margin-left: auto;
            border-radius: px2rem(6*4);

        }
        span{
            font-size: px2rem(14*4);
            line-height: px2rem(40*4);
        }

    }
    hr{
        color: white;
        height: px2rem(1*4);
        background-color: rgba(255,255,255,0.4);
        margin-top: px2rem(10*4);
    }
    .nothing{
        width: px2rem(375*4);
        height: px2rem(30*4);

    }
    .text{
        margin-left: px2rem(18*4);
        width: px2rem(340*4);
        font-size: px2rem(14*4);

        color: rgba(255,255,255,1);
    }
    .mark{
        width: px2rem(58*4);
        height: px2rem(50*4);
        display: inline-block;
        font-size: 0;
        margin-left: px2rem(22*4);
        div{
            display: inline-block;
            font-size: px2rem(12*4);
            display: inline-block;
        }
        img{
            width: px2rem(66*4);
            height: px2rem(40*4);
            top: px2rem(51*4);
            /*background-image: url('http://218.86.120.188:7941/sanming/public/国突预警信号style2/others_yellow.png');*/
            background-size:cover;

        }
/*        img:after{
              content: url('http://218.86.120.188:7941/sanming/public/国突预警信号style2/others_yellow.png');
            display: block;
            position: absolute;
  // 底下是故意要填满并且背景填滿擋住底下那個很醜的加載失敗圖片(字体)
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;

        }*/
    }
    .mark + span{
        font-size: px2rem(20*4);
        position: absolute;
        left: px2rem(106*4);
        line-height: px2rem(40*4);
        // top: px2rem(37*4);
        /*color: white;*/
    }
</style>
