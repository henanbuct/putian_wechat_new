<template>
<div style="position:relative;height:150px" id="eharts">
    <canvas  width="1080px" height="271px"></canvas>
</div>
</template>
<script>
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/legend')
  require('echarts/lib/component/dataZoom')
export default {
    data(){
        return{
          xin:"",  
          rain:[],
          rainTime:[],

        }
    },
    methods:{

    },
    watch:{
        elon(){
             console.log("数据变化了");
        this.$http.get('http://132.232.85.47/sanming/public/report/Weather?lon='+this.elon+'&lat='+this.elat).then(
        (response=>{
             let myChart = echarts.init(document.getElementById('eharts'))
          let rainMap = response.data.rainForecast.rainMap
          if(response.data.rainForecast.rainMap[0]){
            this.rain = [];
            this.rainTime = [];
            rainMap.forEach(item=>{
              this.rain.push(item.rain)
              this.rainTime.push(item.rainTime)
            })
          }
  
      var option = {
        // tooltip:{
        //   show:true,
        //   // trigger : 'axis',
        // },
        textStyle:{
            color:'white',
            fontSize:10
        },
         dataZoom:[
           {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: 50
           }
         ],
       tooltip : {
        formatter:'时间:{b}<br>降水:{c}mm',
        trigger:'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow',
        }
    },
        grid:{
            top:'20%',
            bottom:'25%',
            left:'10%',
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
        data: this.rainTime,
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
          color: 'fff',
          fontSize:10  //更改坐标轴文字颜色
        //更改坐标轴文字大小
        }
     },
        
    },
        yAxis: {
        min:0,
        labels: {
            
  
            },
        axisPointer:{
            type:'shadow',
            label:{
                formatter:"{value}mm"
            }

        },
        
        // tickInterval: 4,
        min:0,
        tickPositions: [0, 2.5, 8, 16, 26],
        splitNumber: 2,
        // tickInterval: 2,
                    // tickInterval: 2,
        tickPositions: [0, 2.5, 8, 16,25],
        show:true,
         type: 'value',
        data:['小雨','中雨','大雨'],
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
        formatter:function(value,index){
                    if(value>0 && value <=2.5) {
                        return"小雨";
                    }else if(value >2.5 && value <=8) {
                        return"中雨";
                    }else if(value >8 && value <=16){
                        return"大雨";
                    } else if (value > 16) {
                        return'暴雨';
                    }
                },
        show: true,
        textStyle: {
          color: '#fff',  //更改坐标轴文字颜色
          fontSize : 10      //更改坐标轴文字大小
        }
     },
                
splitLine:{
    show:true,
    lineStyle:{
        type:'dashed'
    }
}       
    },
        series: [{
        symbol:'none', //去掉折线图中的节点
        smooth: true,  //true 为平滑曲线，false为直线    
        data: this.rain,
        type: 'line',
        areaStyle: {

        },
        itemStyle:{
            color:'#2BADE8',
            borderColor:'#fff',
            borderWidth:2,
            borderType:'solid'
        },
        }
        ],
    };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
					    myChart.resize();
				});
              console.log(this.rain,this.rainTime)

        })
      ) 
      

        }
        
    },

    props:['elon','elat'],
    updated(){
            //   this.$http.get('http://218.86.120.188:7941/sanming/public/report/Weather?lon='+this.elon+'&lat='+this.elat).then(
//         (response=>{
//           let rainMap = response.data.rainForecast.rainMap
//           if(response.data.rainForecast.rainMap[0]){
//             rainMap.forEach(item=>{
//               this.rain.push(item.rain)
//               this.rainTime.push(item.rainTime)
//             })
//           }
//           else{
//           }
//             myChart.setOption(option);
//             window.addEventListener("resize", function() {
// 					    myChart.resize();
// 				});
//               console.log(this.rain)

//         })
//       )
//       var main=document.getElementById("eharts");
//       let myChart = echarts.init(document.getElementById('eharts'))
//       var option = {
//         // tooltip:{
//         //   show:true,
//         //   // trigger : 'axis',
//         // },
//         textStyle:{
//             color:'white',
//             fontSize:10
//         },
//          dataZoom:[
//            {
//             type: 'inside',
//             xAxisIndex: [0],
//             start: 0,
//             end: 50
//            }
//          ],
//         tooltip: {
//           show:true,
//         },
//         grid:{
//             top:'20%',
//             bottom:'25%',
//             left:'10%',
//             right:'10%'

//             }, 
//         legend:{
//             height:'100%',
//             top:'15%',
//             x:0,
//             y:0,
//             x2:0,
//             y2:0
//         },
//         smooth:1,  
//         xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: this.rainTime,
//         nameTextStyle:{
//             color:'#ff4400'
//         },
//          axisLine: {
//              show:false,
//                     lineStyle: {
//                         type: 'dashed',
//                         color: '#fff',//左边线的颜色
//                         width:'2'//坐标线的宽度
//                     }
//                 },
//         axisTick:{
//                     show:false
//                 },
//         axisLabel: {
//         show: true,
//         textStyle: {
//           color: 'fff',
//           fontSize:10  //更改坐标轴文字颜色
//         //更改坐标轴文字大小
//         }
//      },
        
//     },
//         yAxis: {
//         max:30,
//         min:0,
//         labels: {
  
//             },
//         // tickInterval: 4,
//         // tickPositions: [0, 2.5, 8, 16, 26],
//         splitNumber: 3,
//         tickInterval: 2,   
//         show:true,
//          type: 'value',
//         data:['小雨','中雨','大雨'],
//         axisLine: {
//                     lineStyle: {
//                         type: 'dashed',
//                         color: '#fff',//左边线的颜色
//                         width:'2'//坐标线的宽度
//                     }
//                 },
//         axisLine: {
//             show: false
//                 },
//                 axisTick:{
//                     show:false
//                 },
//         axisLabel: {
//         formatter:function(value,index){
//                     if(value>0 && value <=2.5) {
//                         return"小雨";
//                     }else if(value >2.5 && value <=8) {
//                         return"中雨";
//                     }else if(value >8 && value <=16){
//                         return"大雨";
//                     } else if (value > 16) {
//                         return'暴雨';
//                     }
//                 },
//         show: true,
//         textStyle: {
//           color: '#fff',  //更改坐标轴文字颜色
//           fontSize : 10      //更改坐标轴文字大小
//         }
//      },
                
// splitLine:{
//     show:true,
//     lineStyle:{
//         type:'dashed'
//     }
// }       
//     },
//         series: [{
//         symbol:'none', //去掉折线图中的节点
//         smooth: true,  //true 为平滑曲线，false为直线    
//         data: this.rain,
//         type: 'line',
//         areaStyle: {

//         },
//         itemStyle:{
//             color:'#2BADE8',
//             borderColor:'#fff',
//             borderWidth:2,
//             borderType:'solid'
//         },
//         }
//         ],
//     };
//          myChart.setOption(option);
    },
    updated(){
           console.log("数据变化了");
        this.$http.get('http://132.232.85.47/sanming/public/report/Weather?lon='+this.elon+'&lat='+this.elat).then(
        (response=>{
          let rainMap = response.data.rainForecast.rainMap
          if(response.data.rainForecast.rainMap[0]){
            this.rain = [];
            this.rainTime = [];
            rainMap.forEach(item=>{
              this.rain.push(item.rain)
              this.rainTime.push(item.rainTime)
            })
          }
          else{
          }

        })
      )
      var main=document.getElementById("eharts");
      let myChart = echarts.init(document.getElementById('eharts'))
      var option = {
        // tooltip:{
        //   show:true,
        //   // trigger : 'axis',
        // },
        textStyle:{
            color:'white',
            fontSize:10
        },
         dataZoom:[
           {
            type: 'inside',
            xAxisIndex: [0],
            start: 0,
            end: 50
           }
         ],
       tooltip : {
        formatter:'时间:{b}<br>降水:{c}mm',
        trigger:'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow',
        }
    },
        grid:{
            top:'20%',
            bottom:'25%',
            left:'10%',
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
        data: this.rainTime,
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
          color: 'fff',
          fontSize:10  //更改坐标轴文字颜色
        //更改坐标轴文字大小
        }
     },
        
    },
        yAxis: {
        min:0,
        labels: {
            
  
            },
        axisPointer:{
            type:'shadow',
            label:{
                formatter:"{value}mm"
            }

        },
        
        // tickInterval: 4,
        min:0,
        tickPositions: [0, 2.5, 8, 16, 26],
        splitNumber: 2,
        // tickInterval: 2,
                    // tickInterval: 2,
        tickPositions: [0, 2.5, 8, 16,25],
        show:true,
         type: 'value',
        data:['小雨','中雨','大雨'],
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
        formatter:function(value,index){
                    if(value>0 && value <=2.5) {
                        return"小雨";
                    }else if(value >2.5 && value <=8) {
                        return"中雨";
                    }else if(value >8 && value <=16){
                        return"大雨";
                    } else if (value > 16) {
                        return'暴雨';
                    }
                },
        show: true,
        textStyle: {
          color: '#fff',  //更改坐标轴文字颜色
          fontSize : 10      //更改坐标轴文字大小
        }
     },
                
splitLine:{
    show:true,
    lineStyle:{
        type:'dashed'
    }
}       
    },
        series: [{
        symbol:'none', //去掉折线图中的节点
        smooth: true,  //true 为平滑曲线，false为直线    
        data: this.rain,
        type: 'line',
        areaStyle: {

        },
        itemStyle:{
            color:'#2BADE8',
            borderColor:'#fff',
            borderWidth:2,
            borderType:'solid'
        },
        }
        ],
    };
         myChart.setOption(option);

        } 
}
</script>
<style lang="scss" scoped>
   @import "../assets/style/main.scss";
   div{
       position:relative;
   }
   canvas{
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    height:100%;
}
</style>

