<template>
  <div class="flexbox">
      <div class="flexbox-item">
        <div class="content">
          <div class="title">莆田工艺美术城</div>
          <div class="rank"><span>AAAA</span></div>
          <div class="brief">莆田工艺甲天下，精品尽在工艺城</div>
        </div>
        <div class="weatherLink"><div>天气</div></div>
        <div class="travleImg">
            <img src="@/assets/tourismWeather/工艺美术城/img_1.png">
            <img src="@/assets/tourismWeather/工艺美术城/img_2.png">
            <img src="@/assets/tourismWeather/工艺美术城/img_3.png">
        </div>
      </div>
      <div class="flexbox-item">
        <div class="content">
          <div class="title">中国古典工艺博览城</div>
          <div class="rank"><span>AAAA</span></div>
          <div class="brief">盛唐明宫建筑，苏州园林景观</div>
        </div>
        <div class="weatherLink"><div>天气</div></div>
        <div class="travleImg">
            <img src="@/assets/tourismWeather/工艺博览/img_1.png">
            <img src="@/assets/tourismWeather/工艺博览/img_2.png">
            <img src="@/assets/tourismWeather/工艺博览/img_3.png">
        </div>
      </div>
      <div class="flexbox-item">
        <div class="content">
          <div class="title">湄洲岛</div>
          <div class="rank"><span>AAAA</span></div>
          <div class="brief">东南临台湾海峡，妈祖庙闻名海内外</div>
        </div>
        <div class="weatherLink"><div>天气</div></div>
        <div class="travleImg">
            <img src="@/assets/tourismWeather/湄洲岛/img_1.png">
            <img src="@/assets/tourismWeather/湄洲岛/img_2.png">
            <img src="@/assets/tourismWeather/湄洲岛/img_3.png">
        </div>
      </div>
      <div class="flexbox-item">
          <div class="content">
              <div class="title">莆田九龙谷</div>
              <div class="rank"><span>AAAA</span></div>
              <div class="brief">集天然与人文景观于一体的生态风景区</div>
          </div>
          <div class="weatherLink"><div>天气</div></div>
          <div class="travleImg">
              <img src="@/assets/tourismWeather/九龙谷/img_1.png">
              <img src="@/assets/tourismWeather/九龙谷/img_2.png">
              <img src="@/assets/tourismWeather/九龙谷/img_3.png">
          </div>
      </div>
      <div class="flexbox-item">
          <div class="content">
              <div class="title">仙游九鲤湖风景区</div>
              <div class="rank"><span>AAAA</span></div>
              <div class="brief">与武夷山、玉华洞并称福建“三绝”</div>
          </div>
          <div class="weatherLink"><div>天气</div></div>
          <div class="travleImg">
              <img src="@/assets/tourismWeather/九鲤湖/img_1.png">
              <img src="@/assets/tourismWeather/九鲤湖/img_2.png">
              <img src="@/assets/tourismWeather/九鲤湖/img_3.png">
          </div>
      </div>
      <div class="flexbox-item" style="margin-bottom: 20px">
          <div class="content">
              <div class="title">瑞云山森林公园</div>
              <div class="rank"><span>AAAA</span></div>
              <div class="brief">省级森林公园</div>
          </div>
          <div class="weatherLink"><div>天气</div></div>
          <div class="travleImg">
              <img src="@/assets/tourismWeather/森林公园/img_1.png">
              <img src="@/assets/tourismWeather/森林公园/img_2.png">
              <img src="@/assets/tourismWeather/森林公园/img_3.png">
          </div>
      </div>
  </div>
</template>
<script>
import { Flexbox,FlexboxItem } from 'vux'
export default {
  data(){
    return{
    }
  },
  components: {
    Flexbox,FlexboxItem
  },
  mounted(){
  },
  methods:{
  },
  watch:{
  }
}
</script>
<style>
.weui-cells{
        background-color: #0A275A;
    }

</style>

<style lang="scss" scoped>
    @import "../lib/hotcss/px2rem.scss";
    body{
        color:white;
    }
.flexbox{
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    /*background-color: #04132D;*/
}
.flexbox-item{
  margin-top: px2rem(20*4);
  margin-left: px2rem(13*4);
}
.title{
    color: rgba(55, 55, 55, 1);
    font-size:px2rem(14*4);
}
.content{
  float: left;
}
.rank{
  float: left;
  background-color: rgba(29, 203, 152, 1);
  width: px2rem(40*4);
  height: px2rem(16*4);
    line-height:px2rem(16*4);
  margin-top: px2rem(3*4);
    display: flex;
    align-items: center;
    justify-content: center;
}
.brief{
  float: left;
  width: px2rem(230*4);
  height: px2rem(16*4);
  margin-top: px2rem(3*4);
  margin-left: px2rem(8*4);
  color: rgba(155, 155, 155, 1);
}
.weatherLink{
  float: left;
  width: px2rem(61*4);
  height: px2rem(25*4);
  right: px2rem(15*4);
  text-align: center;
  border:1px solid rgba(40, 186, 243, 1);
  border-radius:4px;
  div{
      color: rgba(40, 186, 243, 1);
      font-size: px2rem(14*4);
    margin-top:px2rem(4*4);
  }
}
.travleImg{
  margin-top: px2rem(8*4);
  float: left;
  img{
    height: px2rem(114*4);
    width: px2rem(114*4);
    padding-right: px2rem(4*4);
  }
}
</style>


