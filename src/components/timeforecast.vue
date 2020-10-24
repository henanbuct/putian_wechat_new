<template>
  <div class="hourlyForecast">
        <x-table :cell-bordered="false">
          <tbody>
            <tr>
              <td v-for="(item,index) in hourReports">
                <div class="weatherSceneTdWrap">
                  <img :src="item.weather" alt="weather">
                  <p class="weatherSceneTdText">{{item.temp}}℃</p>
                  <img class="windDirection" :src="item.windDir" alt="weather">
                  <p class="weatherSceneTdText">{{item.windSpeed}}风</p>
                </div>
              </td>
              <td>
                <div class="weatherSceneTdWrap">
                  <img src="./../assets/weatherIcon/晴.png" alt="weather">
                  <p class="weatherSceneTdText">12℃</p>
                  <img src="./../assets/icon/icon_wet.png" alt="weather" class="wetStyle">
                  <p class="wetNumber">0%</p>
                  <img class="windDirection" src="./../assets/weatherIcon/南风.png" alt="weather">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">3级</p>
                </div>
              </td>
              <td>
                <div class="weatherSceneTdWrap">
                  <img src="./../assets/weatherIcon/晴.png" alt="weather">
                  <p class="weatherSceneTdText">12℃</p>
                  <img src="./../assets/icon/icon_wet.png" alt="weather" class="wetStyle">
                  <p class="wetNumber">0%</p>
                  <img class="windDirection" src="./../assets/weatherIcon/南风.png" alt="weather">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">3级</p>
                </div>
              </td>
              <td>
                <div class="weatherSceneTdWrap">
                  <img src="./../assets/weatherIcon/晴.png" alt="weather">
                  <p class="weatherSceneTdText">12℃</p>
                  <img src="./../assets/icon/icon_wet.png" alt="weather" class="wetStyle">
                  <p class="wetNumber">0%</p>
                  <img class="windDirection" src="./../assets/weatherIcon/南风.png" alt="weather">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">3级</p>
                </div>
              </td>
              <td>
                <div class="weatherSceneTdWrap">
                  <img src="./../assets/weatherIcon/晴.png" alt="weather">
                  <p class="weatherSceneTdText">12℃</p>
                  <img src="./../assets/icon/icon_wet.png" alt="weather" class="wetStyle">
                  <p class="wetNumber">0%</p>
                  <img class="windDirection" src="./../assets/weatherIcon/南风.png" alt="weather">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">3级</p>
                </div>
              </td>
              <td>
                <div class="weatherSceneTdWrap">
                  <img src="./../assets/weatherIcon/晴.png" alt="weather">
                  <p class="weatherSceneTdText">12℃</p>
                  <img src="./../assets/icon/icon_wet.png" alt="weather" class="wetStyle">
                  <p class="wetNumber">0%</p>
                  <img class="windDirection" src="./../assets/weatherIcon/南风.png" alt="weather">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">3级</p>
                </div>
              </td>
              <td>
                <div class="weatherSceneTdWrap">
                  <img src="./../assets/weatherIcon/晴.png" alt="weather">
                  <p class="weatherSceneTdText">12℃</p>
                  <img src="./../assets/icon/icon_wet.png" alt="weather" class="wetStyle">
                  <p class="wetNumber">0%</p>
                  <img class="windDirection" src="./../assets/weatherIcon/南风.png" alt="weather">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">3级</p>
                </div>
              </td>
              <td>
                <div class="weatherSceneTdWrap">
                  <img src="./../assets/weatherIcon/晴.png" alt="weather">
                  <p class="weatherSceneTdText">12℃</p>
                  <img src="./../assets/icon/icon_wet.png" alt="weather" class="wetStyle">
                  <p class="wetNumber">0%</p>
                  <img class="windDirection" src="./../assets/weatherIcon/南风.png" alt="weather">
                  <p class="weatherSceneTdText weatherSceneTdTextClose">3级</p>
                </div>
              </td>
            </tr>
          </tbody>
        </x-table>
      </div>  
</template>
<script>
import { XTable } from 'vux'
  export default {
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
    components:{
      XTable
    },
    props:['hourReports']

  }
</script>
<style lang="scss">
   @import "../lib/hotcss/px2rem.scss";
.hourlyForecast{
    width: 100%;
    overflow: scroll;
    height: px2rem(233*4);
  }

  .weatherSceneTdWrap{
    width: px2rem(53*4);
    margin-top: px2rem(10*4)
  }
  .weatherSceneTdWrap img{
      width: px2rem(53.4*4);
      height:px2rem(40.6*4);
    }
  .weatherSceneTdWrap .wetStyle{
      width: px2rem(17*4);
      height:px2rem(17*4);
  }
  .weatherSceneTdWrap .windDirection{
    width: px2rem(16*4);
    height: px2rem(17*4);
  }
  .weatherSceneTdWrap p{
    margin: 0 0 0 0;
    color: #FFF;
    font-size: px2rem(12*4);/*px*/
  }
  .weatherSceneTdTextClose{
    margin:0px;
    height: px2rem(25*4);/*no*/
    line-height: px2rem(15*4);/*no*/
  }
  .weatherSceneTdWrap .wetNumber{
    color: #78D2FF;
    font-size: px2rem(12*4);
    line-height: px2rem(15*4);/*no*/
  }
  .vux-table td{
    padding-bottom: 20px;/*no*/
  }
</style>