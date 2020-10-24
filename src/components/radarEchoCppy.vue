<template>
    <div class="flexbox">
        <div style="display:flex;width:100%" class="flexTitle">
            <img src="./../assets/icon/time@2x.png" alt="">
            <div>BTC：2019-06-10 12:00</div>
        </div>
        <img :src=cloudUrl alt="" class="radar">
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
let n=1;
export default {
    data(){
        return{
            typelist:[
                "红外","彩色"
            ],
            value:"",
            go:true,
            cloudUrl: require("./../assets/cloudImg/1.jpg"),
            timer:"",
            timerCount:1,
            radarImgs:[
                "./../assets/cloudImg/1.jpg",
                "./../assets/cloudImg/2.jpg",
                "./../assets/cloudImg/3.jpg",
                "./../assets/cloudImg/4.jpg",
                "./../assets/cloudImg/5.jpg",
                "./../assets/cloudImg/6.jpg",
                "./../assets/cloudImg/7.jpg",
                "./../assets/cloudImg/8.jpg",
                "./../assets/cloudImg/9.jpg",
                "./../assets/cloudImg/10.jpg",
                "./../assets/cloudImg/11.jpg",
                "./../assets/cloudImg/12.jpg",
                "./../assets/cloudImg/13.jpg",
                "./../assets/cloudImg/14.jpg",
                "./../assets/cloudImg/15.jpg",
                "./../assets/cloudImg/16.jpg",
                "./../assets/cloudImg/17.jpg",
                ]
        }

    },
     components: {
      Search,
      CheckIcon,
  },
  methods:{
      start(n){
          if(n){
            this.timer =  setInterval(()=>{
            if(n==17){
                n=1
                this.timerCount =1
            }
            this.cloudUrl = require('./../assets/cloudImg/'+(n+1)+'.jpg')
            this.timerCount = this.timerCount +1;
            n++;
            console.log(this.timerCount);  
          },1000)
          this.go = !this.go
        }
        else{
             clearInterval(this.timer);
            this.go = !this.go 
        }
      },
    //   n最大值为17
      stop(){
          clearInterval(this.timer); 
      },
      near(direction){
          if(direction){
            if(n>=17){n=17}else{}
           
            n<=16?this.cloudUrl = require('./../assets/cloudImg/'+(++n)+'.jpg'):this.cloudUrl = require('./../assets/cloudImg/17.jpg');
              console.log(n); 
          }
          else{
            if(n>=18){n=17}else{}
            
          n>1?this.cloudUrl = require('./../assets/cloudImg/'+(--n)+'.jpg'):this.cloudUrl = require('./../assets/cloudImg/1.jpg');
              console.log(n);   
          }
      },
      firstFrames(){
                n=1;
          this.cloudUrl = require('./../assets/cloudImg/1.jpg');
      },
            lastFrames(){
                n=17
          this.cloudUrl = require('./../assets/cloudImg/17.jpg');
      }

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
<style lang="scss" scoped>
    @import "../lib/hotcss/px2rem.scss";
.flexbox{
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: px2rem(601*4);
    background-color: #0A275A;
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
    width: px2rem(375*4);
    height: px2rem(261*4);
    display: inline-block;
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


