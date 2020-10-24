<template>
    <div class="flexbox">
          <Group gutter="0">
            <div class="typelist">
              <popup-picker title="云图类别" :data="list1" v-model="value1"  @on-change="selectValue(value1)"></popup-picker>
            </div>
        </Group>
        <!--<div style="display:flex;width:100%" class="flexTitle">
            <img src="./../assets/icon/time@2x.png" alt="">
            <div>BTC：{{this.obser_time}}</div>
        </div>-->
        <moons :radarImgs='radarImgs'></moons>
    </div>
</template>
<script>
import { Group } from 'vux'
import { PopupPicker } from 'vux'
import { setInterval, clearInterval } from 'timers'
import moons from '@/components/moons'
import { get } from 'http';
let n=1;
let Imgs = [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ]
let Imgs1 = [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                ]
export default {
  data(){
    return{
        value1:['FY4A真彩'],
        list1:[['FY4A真彩', 'FY4A_RED红外']],
        typelist:[
           'FY4A真彩色','FY4A_RED红外'
        ],
        value:"",
        go:true,
        cloudUrl: require("./../assets/cloudImg/1.jpg"),
        timer:"",
        timerCount:1,
        radarImgs:Imgs,
        obser_time:"2019-06-10 12:00"
    }
  },
  components: {
    Group,
    moons,
    PopupPicker
  },
  mounted(){
    this.selectValue("FY4A真彩色")
  },
  methods:{
    selectValue(value){
      console.log(value)
      if(value=="FY4A_RED红外"){
        this.$nextTick(function () {         
          this.$http.get('http://218.86.120.188:7941/sanming/public/get/getcloud?type=FY4A_COLOR').
          then((Response=>{
              let imgs = []
              let getcloud =  Response.data
              console.log(getcloud)
              getcloud.forEach(element => {
                  imgs.push(element.imgSrc)
              });
              this.radarImgs = imgs[0]?imgs:Imgs1
              //  this.obser_time = getcloud[0].time?getcloud[0].time:"2019-06-10 12:00"
          }))
                
        })

      }
      if(value=="FY4A真彩色"){
         this.$nextTick(function () {         
           this.$http.get('http://218.86.120.188:7941/sanming/public/get/getcloud?type=FY4A_COLOR').
           then((Response=>{
             let imgs = []
             let getcloud =  Response.data
             console.log(getcloud)
             getcloud.forEach(element => {
                 imgs.push(element.imgSrc)
             });
             this.radarImgs = imgs[imgs.length-1]?imgs:Imgs
             this.obser_time = getcloud[imgs.length-1].time?getcloud[imgs.length-1].time:"2019-06-10 12:00"
           }))
        })
      }
    },
  },
  watch:{
    timerCount(val, oldVal){//普通的watch监听
       if(val==17){
       clearInterval(this.timer);
       }
       else{

       }

    }
  }
}
</script>

<style lang="scss">
@import "../lib/hotcss/px2rem.scss";
body{
    color:white;
}

.flexbox{
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    background-color: #04132D;
    
}
.typelist{
  border-bottom: px2rem(1*4) rgba(231,231,231,0.2) solid;
  padding-top: px2rem(4*4);
  background-color: #04132D;
/deep/ .vux-popup-header{
    background-color: red;

}
}
</style>


