<template>
    <div class="prediction">
        <div class="prediction-children" style="color: white" v-for="(item,index) in hourList" :key="index" v-if="index < 12">
<!--            <span>{{test}}</span>-->
<!--            <img :src=hourReport.weather alt="">-->
<!--            <div>2°</div>-->
<!--            <img :src=hourReport.windDir class="arrow">-->
<!--            <div>3级</div>-->
            <p class="weatherSceneTdText">{{item.fxTime.substring(11,13)}}时</p>
            <img :src="item.text" alt="weather">
            <p class="weatherSceneTdText">{{item.temp}}℃</p>
            <img class="windDirection" :src="item.windDir" alt="weather">
            <p class="weatherSceneTdText weatherSceneTdTextClose">{{item.windScale}}级</p>
        </div>
    </div>

</template>
<script>
  export default {
      name: 'hour1',
    data() {
      return {
        futures:[{},{},{},{},{},{},{}],
        imgs:{
          weatherIcon:{
            fine:require('./../assets/weatherIcon/晴.png'),
            fineN:require('./../assets/weatherIcon/晴n.png'),
            cloud:require('./../assets/weatherIcon/多云.png'),
            cloudN:require('./../assets/weatherIcon/多云n.png'),
            dark:require('./../assets/weatherIcon/阴天.png'),
            smallRain:require('./../assets/weatherIcon/小雨.png'),
            middleRain:require('./../assets/weatherIcon/中雨.png'),
            southWind:require('./../assets/weatherIcon/西北风.png')
          }

        }
      }
    },
    methods: {},
    mounted() {



    },
    props: {
        hourList:{
            type:Array
        },
        test:{
            type: String
        }
    },
      watch:{
          hourList:{
            immediate:true,
            handler(val){
                console.log(val)
            }
        }
      }

  }
</script>
<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
    .prediction{
        border-top: px2rem(1*4) solid rgba(255,255,255,0.4);
        font-size: 0;
        border-bottom: px2rem(1*4) solid rgba(255,255,255,0.4);
    .prediction-children{
        display: inline-block;
        width: px2rem(52.3*4);
        height: px2rem(200*4);
        border-right: px2rem(0.5*4) solid rgba(255,255,255,0.4);
        text-align: center;
        position: relative;
    span{
        display: inline-block;
        width: px2rem(27*4);
        height: px2rem(16*4);
        position: absolute;
        color: white;
        font-size: px2rem(12*4);
        left: px2rem(13*4);
        top: px2rem(18*4);
    }
    div{
        display: inline-block;
        width: px2rem(27*4);
        height: px2rem(16*4);
        position: absolute;
        color: white;
        font-size: px2rem(12*4);
        left: px2rem(13*4);
        top: px2rem(112*4);
    }
    img{
        position: absolute;
        top: px2rem(50*4);
        left: px2rem(0*4);
        width: px2rem(14.4*14);
        height: px2rem(11.2*14);
    }
    .arrow{
        position: absolute;
        width: px2rem(15*4);
        height: px2rem(15*4);
        top: px2rem(137*4);
        left: px2rem(17*4);
    }
    .arrow +div{
        display: inline-block;
        width: 100%;
        height: auto;
        left: 0;
        text-align: center;
        top: px2rem(165*4);
    }
    }
    }
</style>
