<template>
<Scroller>
  <div>
    <canvas id="eharts"></canvas>
  </div>
</Scroller>
</template>
<script>
  import { Scroller } from 'vux'
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
export default {
    data(){
        return{
        startX: 0, //开始触摸的位置
        lastX: 0, //滑动时的位置
        endX: 0, //结束触摸的位置
        disX: 0, //移动距离
        lastX: 0, //上一次X坐标
        lastY: 0, //上一次Y坐标
        translateX: 'translateX(0px)',
        left:10,
        slide:""
        }
    },
    methods:{
      touchStart: function (ev) {
        ev = ev || event;
        // console.log(ev.targetTouches);
        // console.log(ev.changedTouches);
        if (ev.touches.length == 1) { //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startX = this.lastX = ev.touches[0].clientX;
          console.log("开始",this.startX) // 记录开始位置
          this.lastY = ev.touches[0].clientX;
           console.log("结束",this.startX)
        }
      },
      touchMove: function (ev) {
        ev = ev || event;
        // let slideWidth = this.$refs.slide.offsetWidth; //$refs 减少获取dom节点的消耗
        // console.log(ev.targetTouches);
        // console.log(ev.changedTouches);
        if (ev.touches.length == 1) {
          // 实时的滑动的距离-起始位置=实时移动的位置
          this.disX = this.lastX - this.startX;
          // 计算两次移动距离Y>X就不启动滑动动画,防止误滑
          var disX = ev.touches[0].clientX - this.lastX
          var disY = ev.touches[0].clientY - this.lastY
          // console.log(disX, disY);
          if (Math.abs(disX) > Math.abs(disY)) {
            // this.translateX = 'translateX(' + this.disX + 'px)';
            this.translateX = 'translateX(' + this.disX + 'px)'
            console.log(this.disX)
          }
          // 记录一次坐标值
          this.lastX = ev.touches[0].clientX;
          this.lastY = ev.touches[0].clientY;
        }
      },
      touchEnd: function (ev) {
        ev = ev || event;
        // let slideWidth = this.$refs.slide.offsetWidth;
        if (ev.changedTouches.length == 1) {
          let endX = ev.changedTouches[0].clientX;
          this.disX = endX - this.startX;
          // console.log(this.disX, 'this.disX')
          // console.log((slideWidth / 2), 'slideWidth/2');
        //   this.translateX = 'translateX('+this.disX+'px)';
          // 只有滑动大于一半距离才触发
               this.translateX = 'translateX(' + this.disX + 'px)'
        //   if (Math.abs(this.disX) > (slideWidth / 2)) {
        //     if (this.disX < 0) {
        //       console.log('左滑');
        //       this.$emit('change', 'left')
        //     } else {
        //       console.log('右滑');
        //       this.$emit('change', 'right')
        //     }
        //   }
        }
      }

    },
    mounted(){
      var main=document.getElementById("eharts");
      let myChart = echarts.init(document.getElementById('eharts'))
      var option = {
        textStyle:{
            color:'white',
            fontSize:12
        },
        grid:{
            top:'15%',
            bottom:'35%',
            left:'15%',
            right:'10%'

            }, 
        legend:{
            height:'100%',
            top:'15%',
            x:0,
            y:0,
            x2:0,
            y2:0
        },
        smooth:1,  
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['14:30', '15:00', '15:30', '16:00', '16:30', '17:00','17:30','18:00','18:30','19:30'],
        nameTextStyle:{
            color:'#ff4400'
        },
         axisLine: {
             show:false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#fff',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
        axisTick:{
                    show:false
                },
        axisLabel: {
        show: true,
        textStyle: {
          color: 'fff',  //更改坐标轴文字颜色
          fontSize : 8      //更改坐标轴文字大小
        }
     },
        
    },
        yAxis: {
        max:1500,
        min:0,
        splitNumber: 3,      
        show:true,
         type: 'value',
        // data:['小雨','中雨','大雨'],
        axisLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#fff',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
        axisLine: {
            show: false
                },
                axisTick:{
                    show:false
                },
        axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',  //更改坐标轴文字颜色
          fontSize : 8      //更改坐标轴文字大小
        }
     },
                
splitLine:{
    show:true,
    lineStyle:{
        type:'dashed'
    }
}
        // axisLabel:{
        //     show:false
        // }
        
    },
        series: [{
        symbol:'none', //去掉折线图中的节点
        smooth: true,  //true 为平滑曲线，false为直线    
        data: [220, 932, 201, 0, 0, 0, 0,100,150,188],
        type: 'line',
        areaStyle: {

        },
        itemStyle:{
            color:'#2BADE8',
            borderColor:'#fff',
            borderWidth:2,
            borderType:'solid'
        },
        // markLine: {
        //         data: [
        //             {type: 'average', name: '平均值'}
        //         ]
        //     }
        }
        ],
    };
         myChart.setOption(option);
    },
    components:{
      Scroller
    

    }
    //  updated(){
    //   var main=document.getElementById("eharts");
    //   let myChart = echarts.init(document.getElementById('eharts'))
    //   var option = {
    //     textStyle:{
    //         color:'white',
    //         fontSize:14
    //     },
    //     legend:{
    //         height:'100%',
    //         top:'15%',
    //         x:0,
    //         y:0,
    //         x2:0,
    //         y2:0
    //     },
    //     smooth:1,  
    //     xAxis: {
    //     type: 'category',
    //     boundaryGap: false,
    //     data: ['14:30', '15:00', '15:30', '16:00', '16:30', '17:00'],
    //     nameTextStyle:{
    //         color:'#ff4400'
    //     }
    // },
    //     yAxis: {
    //          scale:true,
    //     max:1200,
    //     min:400,                
    //     show:true,
    //     type: 'value'
    // },
    //     series: [{
    //     data: [420, 932, 401, 0, 0, 0, 0],
    //     type: 'line',
    //     areaStyle: {

    //     },
    //     itemStyle:{
    //         color:'#2BADE8',
    //         borderColor:'rgba(43,173,232,1.000)'
    //     }
    //     }
    //     ],
    // };
    //      myChart.setOption(option);
    // }
}
</script>
<style lang="scss" scoped>
   @import "../assets/style/main.scss";
   div{
       position:relative;
   }
canvas{
    width: 150%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    height:px2rem(192*4); 
}

</style>