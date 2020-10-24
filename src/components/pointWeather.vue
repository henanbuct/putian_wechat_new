<template>
    <div class="point-weather">
      <!-- <div id="map" class="map"></div> -->
      <iframe name="child" src="/public/seb/map.html"></iframe>
      <div class="weather-list">
        <div class="weather-item" v-for="item,index in weatherList" :key="index" v-show="item.show">
          <span class="close" @click="close(index)">×</span>
          <div class="item-top">{{item.name}}</div>
          <div class="item-bottom">
            <div class="time">
              <span>{{item.hour}}时</span>
              <span>{{item.month}}月{{item.day}}日</span>
              <span>星期{{item.week}}</span>
            </div>
            <div class="temp">
              <span>温度</span>
              <img class="temp-img" :src="require('./../assets/weatherIcon/'+item.weather+'.png')" alt="">
              <span>{{item.temp}}℃&nbsp;{{item.weather}}</span>
            </div>
            <div class="humidity">
              <span>相对湿度</span>
              <img class="humidity-img" src="./../assets/shidu.png" alt="">
              <span>{{item.humidity}}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    components: {
        
    },    
    data(){
        return {
            weatherList: [
              {
                name:'莆田市科技中试大楼',
                hour:'17',
                month:'03',
                day:'21',
                week:'六',
                temp:'25',
                weather:'晴',
                humidity:'65',
                show: true
              },
              {
                name:'莆田市科技中试大楼',
                hour:'18',
                month:'03',
                day:'21',
                week:'六',
                temp:'20',
                weather:'多云',
                humidity:'65',
                show: true
              }
            ]
        }
    },
    methods: {
      close (i) {
        console.log (i)
        this.weatherList[i].show = false
      },
      callchild(){
        var obj1=window.frames["child"];//获得对应iframe的window对象
        console.log(obj1.coordinate);
      }
    },
    mounted() {
        // this.$refs.ifra.src = "./../../public/seb/map.html";
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/style/main.scss";
    .point-weather{
      color: #000000;
      font-size:11px;
      font-family:MicrosoftYaHei;
      color:rgba(0,0,0,1);
      line-height:px2rem(17*4);
      position: relative;
    }
    .map {
      height: 100vh;
      width: 100%;
    }
    iframe {
      height: 100vh;
      width: 100%;
    }
    .weather-list{
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding: 10px;
      position: absolute;
      bottom: px2rem(30*4);
      left: 0;
      .weather-item{
        position: relative;
        padding: 0 7px;
        background:#FFFFFF;
        border-radius:11px;
        text-align: center;
        margin-right: 10px;
        min-width: 160px;
        .close{
          position: absolute;
          content: '';
          right: px2rem(8*4);
          top: px2rem(8*4);
          font-size: 18px;
        }
        .item-top{
          font-size:14px;
          line-height:px2rem(19*4);
          padding: 10px 20px 10px 0;
          border-bottom: 1px solid #979797;
          text-align: left;
        }
        .item-bottom{
          display: flex;
          padding: 3px 7px;
          justify-content: space-between;
          >div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .temp-img{
              width: 17px;
            }
            .humidity-img{
              width: 11px;
            }
          }
        }
      }
    }
</style>