<template>
        <div class="flexbox">
        <div style="display:flex;width:100%" class="flexTitle">
            <img src="./../assets/icon/time@2x.png" alt="" style="margin-right: 10px" v-if="observeTime">
            <div v-if="observeTime">BTC：{{observeTime}}</div>
        </div>
        <swiper :options="swiperOption" >
          <swiper-slide >
            <div class="swiper-zoom-container">
              <img :src=cloudUrl alt="" class="radar">
            </div>
          </swiper-slide>
        </swiper>
        
        <div style="display:flex; justify-content:center;margin-top:5%">
            <div class="btns">
                <a  @click=" firstFrames()" class="btn first"></a>
                <a  @click="near(false)" class="btn backone"></a>
                <a  @click="start(go)" class="btn begin" :class="{active:!go}"></a>
                <a  @click="near(true)" class="btn forwardone"></a>
                <a  @click=" lastFrames()" class="btn last"></a>
            </div>
        </div>
    </div>
</template>
<script>
import { Search,CheckIcon } from 'vux'
import { setInterval, clearInterval } from 'timers';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

let n=0;
let Imgs = [
                "http://39.108.130.184/cloudImg/1.jpg",
                "http://39.108.130.184/cloudImg/2.jpg",
                "http://39.108.130.184/cloudImg/3.jpg",
                "http://39.108.130.184/cloudImg/4.jpg",
                "http://39.108.130.184/cloudImg/5.jpg",
                "http://39.108.130.184/cloudImg/6.jpg",
                "http://39.108.130.184/cloudImg/7.jpg",
                "http://39.108.130.184/cloudImg/8.jpg",
                "http://39.108.130.184/cloudImg/9.jpg",
                "http://39.108.130.184/cloudImg/10.jpg",
                "http://39.108.130.184/cloudImg/11.jpg",
                "http://39.108.130.184/cloudImg/12.jpg",
                "http://39.108.130.184/cloudImg/13.jpg",
                "http://39.108.130.184/cloudImg/14.jpg",
                "http://39.108.130.184/cloudImg/15.jpg",
                "http://39.108.130.184/cloudImg/16.jpg",
                "http://39.108.130.184/cloudImg/17.jpg",
                ]
export default {
    data(){
        return{
            typelist:[
                "红外","彩色"
            ],
            observeTime: "2019-08-19 08:00:00",
            value:"",
            go:true,
            cloudUrl: Imgs[n],
            timer:"",
            timerCount:0,
            radarImgs:[
                ],
            swiperOption: {
              notNextTick: true,
              width: window.innerWidth,
              zoom: true,
              initialSlide: 0,
              zoomMax: 7,
              observer: true,
              observeParents: true,
              observeSlideChildren:true,
            
           }
        }

    },
     components: {
      Search,
      CheckIcon,
      swiper,
      swiperSlide
  },
  methods:{
      addZero(num) {
          if (num < 10) {
              return '0'+num;
          } else {
              return num;
          }
      },
      getObserveTime(url) {
          let arr = [];
          arr = url.split('espt')
          if (arr.length <= 1) {
            arr = arr[0].split('FY2G')
            if (arr.length <=1) {
                return;
            }
            let timeStr = arr[1];
            let time = timeStr.substr(1, 4) + '/' + timeStr.substr(6, 2) + '/' + timeStr.substr(9, 2) +
            ' ' + timeStr.substr(12, 2) + ':00:00';
            let timeStamp = new Date(time).getTime() + 8*3600*1000;
            let newDate = new Date(timeStamp)
            return newDate.getFullYear() + '-' + this.addZero((newDate.getMonth()+1)) + '-' + this.addZero(newDate.getDate()) +
            ' ' + this.addZero(newDate.getHours()) + ':00:00';
          } else {
            let timeStr = arr[1];
            return timeStr.substr(0, 4) + '-' + timeStr.substr(4, 2) + '-' + timeStr.substr(6, 2)
            + ' ' + timeStr.substr(8, 2) + ':' + timeStr.substr(10, 2) + ':00'; 
          }

      },
      start(g){
          if(g){
              if(n==this.radarImgs.length-1){
                    n=0;
              }else{

              }
         
            this.timer =  setInterval(()=>{
           
            if(n<16){
                ++n;
            }else{  
            }
            console.log("正在运行时为"+n,"正在运行时为"+this.timerCount); 
            this.cloudUrl = this.radarImgs[n]
            this.observeTime = this.getObserveTime(this.cloudUrl)
            this.timerCount = this.timerCount +1;
        
            console.log("运行后为"+n,"运行后为"+this.timerCount); 
          },1000)
          this.go = !this.go
        }
        else{
             clearInterval(this.timer);
               this.go = !this.go
        }
      },
    //   n最大值为16
      stop(){
          clearInterval(this.timer); 
      },
      near(direction){
          if(direction){
            if(n>=this.radarImgs.length){n=this.radarImgs.length-1}else{
            }
            n<=this.radarImgs.length-2?this.cloudUrl = this.radarImgs[++n]:this.cloudUrl = this.radarImgs[this.radarImgs.length-1];
              console.log(n); 
            n<=this.radarImgs.length-2?this.observeTime = this.getObserveTime(this.radarImgs[n]):this.observeTime = this.getObserveTime(this.radarImgs[this.radarImgs.length-1]);
              console.log(n); 
          }
          else{
            n>1?this.cloudUrl = this.radarImgs[--n]:this.cloudUrl = this.radarImgs[0];
         
            //   if(n==this.radarImgs.length-1 ){n=this.radarImgs.length}
            n>1?this.observeTime = this.getObserveTime(this.radarImgs[n]):this.observeTime = this.getObserveTime(this.radarImgs[0]);
     
              console.log(n);   
          }
      },
      firstFrames(){
        n=0;
        this.timerCount = 0
        this.cloudUrl = this.radarImgs[0];
        this.observeTime = this.getObserveTime(this.cloudUrl)
      },
      lastFrames(){
        n=this.radarImgs.length-1
        this.timerCount = this.radarImgs.length-1
        this.cloudUrl = this.radarImgs[n];
        this.observeTime = this.getObserveTime(this.cloudUrl)
      }

  },
    watch:{
      timerCount(val, oldVal){//普通的watch监听
         if(val==this.radarImgs.length-1){
         clearInterval(this.timer);
         this.go = !this.go
         this.timerCount =0
         }
         else{

         }

      },
    radarImgs: {
　　　　handler(newValue, oldValue) {
            this.cloudUrl = this.radarImgs[this.radarImgs.length-1]
            console.log(this.cloudUrl)
            this.observeTime = this.getObserveTime(this.cloudUrl)
            n=0
            this.timerCount = 0
　　　
　　　　},
　　　　deep: true
　　}
},

    mounted(){
        Imgs = this.radarImgs;
        this.cloudUrl = this.radarImgs[Imgs.length-1];
        this.observeTime = this.getObserveTime(this.cloudUrl)
    },
    props:['radarImgs']
}
</script>
<style lang="scss" scoped>

    @import "../lib/hotcss/px2rem.scss";
    .vux-no-group-title{
        background-color: #0A275A;
    }
.flexbox{
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
     height: px2rem(601*4); 
    background-color: #04132D;
    align-items: center;
    .flexTitle{
        width: 100%;
        height: px2rem(50*4);
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        img{
            width: px2rem(13*4);
            height: px2rem(13*4);
        }
        div{
            font-size: px2rem(14*4);
            color: white;

        }
    }
}
.radar{
    width: 100%;
    height: px2rem(433*4);
    display: inline-block;
    object-fit:cover;
}
.btns{
    width: px2rem(190*4);
    height: px2rem(30*4);
    display: flex;
    justify-content: space-between;
    a{
        width: px2rem(30*4);
        height: px2rem(30*4);
        font-size: px2rem(14*4)
    }
 
    .begin{
        background-image: url('./../assets/animatButton/btn3@2x.png');
        background-size: cover;
    }
    .stop{
        background-image: url('./../assets/animatButton/btn4@2x.png');
        background-size: cover;
    }
    .active{
        background-image: url('./../assets/animatButton/btn4@2x.png')
    }
    .backone{
        background-image: url('./../assets/animatButton/btn2@2x.png');
        background-size: cover;
    }
    .forwardone{
          background-image: url('./../assets/animatButton/btn5@2x.png');
        background-size: cover;
    }
    .first{
        background-image: url('./../assets/animatButton/btn1@2x.png');
        background-size: cover;
    }
    .last{
           background-image: url('./../assets/animatButton/btn6@2x.png');
        background-size: cover;
    }
}
.title{
    widows: 100%;
    height:px2rem(91*4);
    background-color: #0A275A;
    background-color: beige;
    input{
        width: px2rem(16*4);
        height: px2rem(16*4);
    }
}
</style>


