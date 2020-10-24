<!--气象影视-->

<template>
<div id="weather-video">
    <div class="video-item">
    <img src="@/assets/tourismWeather/temp2.png" alt="">
    <div>
        <span class="title">4月16日：莆田市天气预报内容</span>
        <br>
        <span class="detail">莆田气象台2020年04月16日08时发布今日全市天气预报。</span>
    </div>
</div>
    <div class="video-item">
        <img src="@/assets/tourismWeather/temp2.png" alt="">
        <div>
            <span class="title">4月16日：莆田市天气预报内容</span>
            <br>
            <span class="detail">莆田气象台2020年04月16日08时发布今日全市天气预报。</span>
        </div>
    </div>
    <div class="video-item">
        <img src="@/assets/tourismWeather/temp2.png" alt="">
        <div>
            <span class="title">4月16日：莆田市天气预报内容</span>
            <br>
            <span class="detail">莆田气象台2020年04月16日08时发布今日全市天气预报。</span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "WeatherVideo"
    }
</script>

<style scoped lang="scss">
    @import "../lib/hotcss/px2rem.scss";
#weather-video{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;

    .video-item{
        color: black;
        border-bottom: 1px solid rgba(52, 63, 82, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height:px2rem(280*4);
        margin-top: px2rem(10*4);
        img{
            width:px2rem(317*4);
            height:px2rem(210*4);
        }
        div{
            width:px2rem(317*4);
            margin-top: px2rem(10*4);

            .title{

                font-size:px2rem(12*4);
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(0,0,0,1);
                line-height:px2rem(17*4);
            }
            .detail{

                font-size:px2rem(12*4);
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(0,0,0,1);
                line-height:px2rem(17*4);
                opacity: 0.6;
            }
        }
    }
}
</style>
