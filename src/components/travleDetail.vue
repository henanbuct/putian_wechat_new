<template>
  <div class="flexbox" :style="bg">
      <div class="flexbox-item">
        <div class="title"><img src="./../assets/icon/pin@2x.png">莆田工艺美术城 </div>
        <div class="rank"><span>AAAA</span></div>
        <div class="brief">莆田工艺甲天下，精品尽在工艺城</div>
        <div class="travleImg">
            <img src="@/assets/tourismWeather/工艺美术城/img_1.png">
            <img src="@/assets/tourismWeather/工艺美术城/img_2.png">
            <img src="@/assets/tourismWeather/工艺美术城/img_3.png">
        </div>
        <div class="brief2">莆田市地处北回归线北侧边缘，东濒海洋，属典型的亚热带海洋性季风气候。日照充足，温度适宜是本市气候的一大特征。平均年太阳辐射量达110.41千卡/平方厘米; 年日照时数平均为1995.9小时, 年均日照率为45%。日照时间从山区至沿海逐步增多。气温由东南沿海向西北内陆山区逐渐降低。各地年平均气温在16℃至21℃之间。无霜期年平均达316天至350天之间。全市绝大部份土地, 适宜农业生产上的一年三熟制作物栽培。

  蔬菜生产着重以荔城、涵江、鲤城等郊区型常年性万亩基地为主，并逐渐向山区反季节性蔬菜发展，蔬菜面积不断扩大，产量逐年增加。全市蔬菜产量达84.02万吨。现有种植蔬菜千亩以上的专业户2家、百亩以上的有200多家，并增加西洋芹、生菜、铁球菜、日本大葱、日本”五寸人参”萝卜等品种。

  闽中有机食品有限公司、福建省红太阳精品有限公司等一批龙头企业带动了5万亩蔬菜基地的发展。闽中蔬菜脱水厂生产的蔬菜汁中有南瓜汁、芹菜汁、胡萝卜汁三种产品2000年获国家农业部颁发的绿色食品标志....展开
        </div>
      </div>
      <div class="title2"><div>逐小时预报</div></div>
    <Hours :hourReports="hourReports"></Hours>
      <div class="title2"><div>未来七天预报</div></div>
      <div class="content">
        <div class="day"><p>星期六</p>03/30</div>
        <div class="weather1"><img src="./../assets/weatherIcon/晴.png"><div class="weatherInfo">晴</div><div class="temp">12°</div><div class="cloud">西北风3-4级</div></div>
        <div class="weather1"><img src="./../assets/weatherIcon/晴.png"><div class="weatherInfo">晴</div><div class="temp">12°</div><div class="cloud">西北风3-4级</div></div>
      </div>
  </div>
</template>
<script>
import { Flexbox,FlexboxItem } from 'vux'
  import Hours from '@/components/hourforecast'
export default {
  data(){
    return{
        bg:{
            backgroundImage: "url(" + require('./../assets/bg_shikuan.jpg')+ ")",
            height:'100%',
            // backgroundRepeat: "no-repeat",
            width:'100%'
        },
    }
  },
  components: {
        Hours,
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
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: px2rem(16*4);
  img{
    width: px2rem(11*4);
    height: px2rem(14*4);
    margin-right: px2rem(9*4);
  }
}
.title2 {
  color: #fff;
  width: 100%;
  height: px2rem(39*4);
  border-top: px2rem(1*4) solid rgba(255,255,255,0.5);
  border-bottom: px2rem(1*4) solid rgba(255,255,255,0.5);
  div{
    font-size: px2rem(14*4);
    margin-top: px2rem(9*4);
    margin-left: px2rem(21*4);
  }
}
.brief2{
  float: left;
  width: px2rem(330*4);
  height: px2rem(323*4);
  margin-top: px2rem(16*4);
  margin-left: px2rem(8*4);
 color: rgba(255,255,255,1);
    font-size: px2rem(12*4);
}
.rank{

  margin-left: px2rem(71*4);
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
  opacity: 0.6;
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
.day{
  float: left;
  font-size: px2rem(14*4);
  margin-left: px2rem(15*4);
  margin-top: px2rem(33*4);
  text-align: center;
}
.weather1{
  font-size: px2rem(14*4);
  margin-left: px2rem(80*4);
  margin-top: px2rem(10*4);
  img{
    width: px2rem(45*4);
    height: px2rem(40*4);
  }
  .weatherInfo{
    display: inline-block;
    margin-left: px2rem(13*4);
  }
  .temp{
    margin-left: px2rem(46*4);
    display: inline-block;
  }
  .cloud{
    margin-left: px2rem(44*4);
    display: inline-block;
  }
}
</style>


