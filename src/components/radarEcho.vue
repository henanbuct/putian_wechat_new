<template>
    <div class="flexbox">
        <div style="width:100%;">
          <Group gutter="0">
            <popup-picker title="雷达回波类别" :data="typelist" v-model="Rvalue"  @on-change="selectValue(Rvalue)" class="typelist"></popup-picker>
          </Group>
<!--                 <input type="radio" id="fujian"
                v-model="Rvalue" value="province"><label for="fujian" style="color:white">福建省雷达拼图</label>
                <div style="width:10%"></div>
                <input type="radio" id="sanming"  
                v-model="Rvalue" value="city"><label for="sanming" style="color:white">三明单站雷达图</label> -->
        </div>
        <!--<div style="display:flex;width:100%" class="flexTitle">
            <img src="./../assets/icon/time@2x.png" alt="">
            <div>BTC：{{obser_time}}</div>
        </div>-->
        <moons ref='init' :radarImgs="radarImgs"></moons>
        <!-- <img :src=cloudUrl alt="" class="radar">
        <div style="display:flex; justify-content:center;margin-top:5%">
            <div class="btns">
                <a  @click=" firstFrames()" class="btn first"></a>
                <a  @click="near(false)" class="btn backone"></a>
                <a  @click="start(go)" class="btn begin" :class="{active:!go}"></a>
                <a  @click="near(true)" class="btn forwardone"></a>
                <a  @click=" lastFrames()" class="btn last"></a>
            </div>
    </div> -->
    </div>
</template>
<script>
import { Group,PopupPicker,Selector,Search,CheckIcon } from 'vux'
import { setInterval, clearInterval } from 'timers'
import moons from '@/components/moons'
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
            typelist:[["雷达拼图"]],
            value:"",
            go:true,
            cloudUrl: require("./../assets/cloudImg/1.jpg"),
            timer:"",
            timerCount:1,
            radarImgs:Imgs,
            Rvalue:["雷达拼图"],
            obser_time:"2019-06-12 12:00"
        }

    },
     components: {
      Search,
      CheckIcon,
      Group,
      Selector,
      moons,
      PopupPicker
  },
  mounted(){
        this.$http.get('http://218.86.120.188:7941/sanming/public/get/getradar?type=province').
      then((Response=>{
         let getcloud =  Response.data
         let imgs = [];
         console.log(getcloud)
            getcloud.forEach(element => {
             imgs.push(element.imgSrc)
         });
         this.radarImgs = getcloud[0].imgSrc?imgs:Imgs
         this.obser_time = getcloud[0].time?getcloud[0].time:"2019-06-12 12:00"
      })
      )
  },
  methods:{
      selectValue(value){
          if(value=="province"){
           this.$nextTick(function() {
           this.$http.get('http://218.86.120.188:7941/sanming/public/get/getradar?type=province').
           then((Response=>{
           let getcloud =  Response.data
              let imgs = [];
           console.log(getcloud)
              getcloud.forEach(element => {
               imgs.push(element.imgSrc)
           });
           this.radarImgs = getcloud[0].imgSrc?imgs:Imgs
           this.obser_time = getcloud[0].time?getcloud[0].time:"2019-06-12 12:00"
                }
                )
                )
            }
            )
          }
          if(value=="city"){
            this.$nextTick(function() {
             this.$http.get('http://218.86.120.188:7941/sanming/public/get/getradar?type=city').
             then((Response=>{
               let getcloud =  Response.data
               let imgs = [];
                  getcloud.forEach(element => {
                   imgs.push(element.imgSrc)
               });
               this.radarImgs = getcloud[0].imgSrc?imgs:Imgs
               this.obser_time = getcloud[0].time?getcloud[0].time:"2019-06-12 12:00"
                  }
                  )
                  )
              }
              )
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

      },
      Rvalue(newVal,oldVal){
          if(newVal == "province"){
              this.selectValue("province")
              
          }
          else if(newVal=="city"){
            this.selectValue("city")
          
          }

      }
}
}
</script>
<style lang="scss" scoped>
    @import "../lib/hotcss/px2rem.scss";


.radar{
    width: px2rem(375*4);
    height: px2rem(261*4);
    display: inline-block;
}

.flexbox{
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100vh;
    background-color: #04132D;
}
.typelist{
  color: white;
  border-bottom: px2rem(1*4) rgba(231,231,231,0.2) solid;
  padding-top: px2rem(4*4);
  background-color: #04132D;
}
</style>