<template>
    <div class="flexbox">
        <div class="flexbox-item">
            <div class="title">·莆田市气候 ·农业概况</div>
            <div class="nongYeImg"><img src="@/assets/tourismWeather/nong.png"></div>
            <div class="brief">&#8195;&#8195;莆田市地处北回归线北侧边缘，东濒海洋，属典型的亚热带海洋性季风气候。日照充足，温度适宜是本市气候的一大特征。平均年太阳辐射量达110.41千卡/平方厘米;
                年日照时数平均为1995.9小时,
                年均日照率为45%。日照时间从山区至沿海逐步增多。气温由东南沿海向西北内陆山区逐渐降低。
                各地年平均气温在16℃至21℃之间。无霜期年平均达316天至350天之间。全市绝大部份土地,
                适宜农业生产上的一年三熟制作物栽培。<br><br>
                &#8195;&#8195;蔬菜生产着重以荔城、涵江、鲤城等郊区型常年性万亩基地为主，并逐渐向山区反季节性蔬菜发展，蔬菜面积不断扩大，
                产量逐年增加。全市蔬菜产量达84.02万吨。现有种植蔬菜千亩以上的专业户2家、百亩以上的有200多家，并增加西洋芹、生菜、铁球菜、
                日本大葱、日本”五寸人参”萝卜等品种。<br><br>

                &#8195;&#8195;闽中有机食品有限公司、福建省红太阳精品有限公司等一批龙头企业带动了5万亩蔬菜基地的发展。闽中蔬菜脱水厂生产的蔬菜汁中有南瓜汁、芹菜汁、胡萝卜汁三种产品2000年获国家农业部颁发的绿色食品标志....展开
            </div>
        </div>
        <div class="title2">
            <div>服务产品</div>
        </div>
        <div class="content" v-for="item in fileList">
            <img src="@/assets/icon/pdf-iocn@2x.png">
            <div class="content2">{{item.fileName | filterFileName}}
                <div class="contentTime">{{item.updateTime.substring(0,10)}}</div>
            </div>
        </div>
<!--        <div class="content">-->
<!--            <img src="./../assets/weatherScene/icon-diaoyu@2x.png">-->
<!--            <div class="content2">福建夏收夏种气象服务专报-->
<!--                <div class="contentTime">2019年02月17日</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="content">-->
<!--            <img src="./../assets/weatherScene/icon-diaoyu@2x.png">-->
<!--            <div class="content2">福建夏收夏种气象服务专报-->
<!--                <div class="contentTime">2019年02月17日</div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>
<script>
    import {Flexbox, FlexboxItem} from 'vux'
    import {getAgriculturalList} from "../requests";

    export default {
        data() {
            return {
                fileList:[]
            }
        },
        components: {
            Flexbox, FlexboxItem
        },
        mounted() {
            //获取列表数据
            getAgriculturalList().then(res =>{
                this.fileList = res.data.data
            })
        },
        filters:{
            // 过滤文件名
            filterFileName(val){
                let arr = []
                arr = val.split('.')
                return arr[0]
            }
        },
        methods: {},
        watch: {}
    }
</script>
<style>
    .weui-cells {
        background-color: #0A275A;
    }

</style>

<style lang="scss" scoped>
    @import "../lib/hotcss/px2rem.scss";

    body {
        color: white;
    }

    .flexbox {
        display: flex;
        flex-flow: column wrap;
        width: 100%;
        height: 100%;
        background-color: rgba(41, 123, 210, 1);
    }

    .flexbox-item {
        /* margin-top: px2rem(20*4);
         margin-left: px2rem(23*4);*/
        margin: 0 px2rem(22*4);
    }

    .title {
        color: #fff;
        width: 100%;
        text-align: center;
        font-size: px2rem(16*4);
    }

    .title2 {
        display: flex;
        background: rgba(0, 0,0, 0.1);
        font-size: px2rem(14*4);
        height: px2rem(39*4);
        align-items: center;
        color: #fff;
        width: 100%;
        border-top: px2rem(1*4) solid rgba(255, 255, 255, 0.5);
        border-bottom: px2rem(1*4) solid rgba(255, 255, 255, 0.5);

        div {
            margin-left: px2rem(20*4);
        }
    }

    .brief {
        float: left;
        width: 100%;
        height: px2rem(320*4);
        text-align: justify;
        letter-spacing:px2rem(1*4);
    }

    .nongYeImg {
        margin-top: px2rem(8*4);
        float: left;

        img {
            height: px2rem(210*4);
            width: px2rem(326*4);
        }
    }

    .content {
        height: px2rem(67*4);
        border-bottom: px2rem(1*4) solid rgba(255, 255, 255, 0.5);
        margin:  px2rem(0*4) px2rem(18*4) px2rem(10*4) px2rem(18*4);

        img {
           /* margin-left: px2rem(28*4);*/
            width: px2rem(30*4);
            height: px2rem(38*4);
            margin-bottom: px2rem(28*4);
        }
    }

    .content2 {
        display: inline-block;
        margin-top: px2rem(13*4);
        margin-left: px2rem(10*4);
        font-size: px2rem(16*4);
    }

    .contentTime {

        margin-left: px2rem(5*4);
        margin-top: px2rem(8*4);
        opacity: 0.6;
        font-size: px2rem(12*4);
    }
</style>


