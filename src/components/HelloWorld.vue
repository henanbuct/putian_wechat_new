<template>
  <div>
    <div  style="width: 100%;display: flex;flex-direction: column">下面是页面的导航</div>
    <a href="#/county">区县级</a>
    <a href="#/putianCity">站点实况</a>
    <a href="#/weatherForecast">天气预报</a>
    <a href="#/weatherLive">天气实况</a>
    <a href="#/preWarning">预警信息</a>
    <a href="#/radarEcho">雷达</a>
    <a href="#/satellite">卫星</a>
    <a href="#/typhoon">台风路径</a>
    <a href="#/travle">旅游气象</a>
    <a href="#/travleDetail">旅游景区气象</a>
    <a href="#/nongYe">气象为农</a>
    <a href="#/zhuanti">专题预报</a>
    <a href="#/WeatherVideo">气象影视</a>
    <a href="#/WeatherPopularize">气象科普</a>
  </div>
</template>

<script>
import { Group } from 'vux'
import { mapState,mapGetters,mapActions } from 'vuex';
export default {
  data(){
    return{
      message:"我在那里"
      }

  },
  components: {
    Group
  },
  computed:{
    ...mapState({
      Xcount:state=>state.count,
      Xname:state=>state.name
    }),
    newmessage(){
      return (this.message+"!").charAt(4);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/main.scss";
.hello{
  color: black;
  font-size: 14*4px;
  width:px2rem(30*4);
  background-color:white;

}
a{
  margin-right: 5px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: px2rem(14*4);
  width: px2rem(100*4);
  border: 5px solid black;
}

</style>
