<template>
        <div class="message">
            <div class="messageWind">
                <div class="windCar"></div>
                <div class="font1">风向&nbsp;{{airWind.windDir}}</div>
                <div class="font2">风力&nbsp;{{airWind.windSpeed}}</div>
            </div>
            <div class="messageMoisture">
                <div class="icon-shidu"></div>
                <div class="messageMoisture-font">湿度：{{airWind.humidity}}</div>
            </div>
            <div class="messageAir">
                <div class="icon-air"></div>
                <div class="messageAir-font">空气：{{airWind.aqi}} {{airWind.airCategory}}</div>
            </div>
        </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        props:["airWind"]

    };
</script>
<style lang="scss" scoped>
    @import "../lib/hotcss/px2rem.scss";
    .message {
        background: rgba(4 , 19, 45, 1);
        width: px2rem(375*4);
        height: px2rem(146*4);
        position: relative;
        background-size: cover;
        border-bottom: px2rem(1*4) solid rgba(255, 255, 255, 0.2);
        border-top: px2rem(1*4) solid rgba(255, 255, 255, 0.2);
        .messageWind {
            width: px2rem(187*4);
            height: px2rem(147*4);
            display: inline-block;
            position: absolute;
            border-right: px2rem(1*4) solid rgba(255, 255, 255, 0.1);

            .windCar {
                width: px2rem(63*4);
                height: px2rem(83*4);
                background-size: cover;
                margin-top: px2rem(25*4);
                display: inline-block;
                background-image: url('./../assets/airWind/风车.gif')
            }

            .font1 {
                width: auto;
                font-size: px2rem(14*4);
                line-height: px2rem(24*4);
                color: white;
                position: relative;
                top: px2rem(-76*4);
                left: px2rem(80*4);
            }

            .font2 {
                width: auto;
                font-size: px2rem(14*4);
                line-height: px2rem(24*4);
                color: white;
                position: relative;
                top: px2rem(-66*4);
                left: px2rem(80*4);

            }

        }

        .messageMoisture {
            width: px2rem(187*4);
            height: px2rem(72*4);
            position: absolute;
            left: px2rem(187*4);
            border-bottom: px2rem(1*4) solid rgba(255, 255, 255, 0.2);

            .icon-shidu {
                background-size: cover;
                width: px2rem(32*4);
                height: px2rem(32*4);
                display: inline-block;
                margin-top: px2rem(20*4);
                margin-left: px2rem(20*4);
                background-image: url('./../assets/icon/icon-shidu@2x.png')
            }

            .messageMoisture-font {
                display: inline-block;
                color: white;
                font-size: px2rem(14*4);
                line-height: px2rem(19*4);
                position: relative;
                top: px2rem(-10*4);
                left: px2rem(13*4);


            }
        }

        .messageAir {
            width: px2rem(187*4);
            height: px2rem(72*4);
            position: absolute;
            left: px2rem(187*4);
            top: px2rem(72*4);

            .icon-air {
                background-size: cover;
                width: px2rem(32*4);
                height: px2rem(32*4);
                display: inline-block;
                margin-top: px2rem(20*4);
                margin-left: px2rem(20*4);
                background-image: url('./../assets/icon/icon-aqi@2x.png')
            }

            .messageAir-font {
                display: inline-block;
                color: white;
                font-size: px2rem(14*4);
                line-height: px2rem(19*4);
                position: relative;
                top: px2rem(-10*4);
                left: px2rem(13*4);

            }
        }

    }
</style>
