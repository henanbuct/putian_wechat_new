<!--气象科普-->
<template>
    <div id="weather-video">
        <div class="video-item">
            <img src="@/assets/tourismWeather/temp2.png" alt="">
            <div>
                <span class="title">专题报道：天气知识知多少</span>
                <br>
                <span class="detail">天气类型繁多多变，我们每天都在经历各种各样的天气…</span>
            </div>
        </div>
        <div class="video-item">
            <img src="@/assets/tourismWeather/temp1.png" alt="">
            <div>
                <span class="title">图说天气：天气预报的历史</span>
                <br>
                <span class="detail">天气预报并不是近代才开始的，在我国，天气预报有着……</span>
            </div>
        </div>
        <div class="video-item">
            <img src="@/assets/tourismWeather/temp1.png" alt="">
            <div>
                <span class="title">图说天气：天气预报的历史</span>
                <br>
                <span class="detail">天气预报并不是近代才开始的，在我国，天气预报有着……</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherPopularize"
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
