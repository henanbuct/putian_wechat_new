<template>
    <div class="county">
        <flexbox :gutter="0" style="text-align:center;background: #2259A1;" class="head_bx">
            <flexbox-item class="fxi" :class="{active:changeSwitch==1}">
                <div @click="changeType(1)">
                    <img src="./../assets/qiweng.png" alt=""  class="fxi_img" >
                    <div class="fxi_label">气温(℃)</div>
                </div>
            </flexbox-item>
            <flexbox-item  class="fxi" :class="{active:changeSwitch==2}">
                <div @click="changeType(2)">
                    <img src="./../assets/jiangshui.png" alt=""  class="fxi_img">
                    <div class="fxi_label">降水(mm)</div>
                </div>
            </flexbox-item>
        </flexbox>
        <div class="observe_time">
            <div class="timeIcon"></div>
            观测时间: {{observeTime}}
        </div>
        <div class="county_selector">
            <div class="county_select_group">
                <span class="type_selector2" :class="{active:countySwitch==0}" @click="changeCounty(0, 'mingxi')">明溪县</span>
                <span class="type_selector2" :class="{active:countySwitch==1}" @click="changeCounty(1, 'qingliu')">清流县</span>
                <span class="type_selector2" :class="{active:countySwitch==2}" @click="changeCounty(2, 'ninghua')">宁化县</span>
                <span class="type_selector2" :class="{active:countySwitch==3}" @click="changeCounty(3, 'sha')">沙县</span>
                <span class="type_selector2" :class="{active:countySwitch==4}" @click="changeCounty(4, 'youxi')">尤溪县</span>
            </div>
            <div class="county_select_group2">
                <span class="type_selector2" :class="{active:countySwitch==5}" @click="changeCounty(5, 'datian')">大田县</span>
                <span class="type_selector2" :class="{active:countySwitch==6}" @click="changeCounty(6, 'taining')">泰宁县</span>
                <span class="type_selector2" :class="{active:countySwitch==7}" @click="changeCounty(7, 'jianning')">建宁县</span>
                <span class="type_selector2" :class="{active:countySwitch==8}" @click="changeCounty(8, 'yongan')">永安市</span>
                <span class="type_selector2" :class="{active:countySwitch==9}" @click="changeCounty(9, 'jiangle')">将乐县</span>
            </div>
        </div>
       <!-- <iframe ref="ifra" src=""></iframe>-->
        <div class="type_select_group" v-if="changeSwitch == 1">
            <span class="type_selector" :class="{active:changeSubSwitch==1}" @click="changeSubType(1)">当前气温</span>
            <span class="type_selector" :class="{active:changeSubSwitch==2}" @click="changeSubType(2)">高温24h</span>
            <span class="type_selector" :class="{active:changeSubSwitch==3}" @click="changeSubType(3)">低温24h</span>
        </div>
        <div class="type_select_group type_select_group2" v-if="changeSwitch == 2">
            <span class="type_selector2" :class="{active:changeSubSwitch==1}" @click="changeSubType(1)">当前降水</span>
            <span class="type_selector2" :class="{active:changeSubSwitch==2}" @click="changeSubType(2)">3h降水</span>
            <span class="type_selector2" :class="{active:changeSubSwitch==3}" @click="changeSubType(3)">6h降水</span>
            <span class="type_selector2" :class="{active:changeSubSwitch==4}" @click="changeSubType(4)">12h降水</span>
            <span class="type_selector2" :class="{active:changeSubSwitch==5}" @click="changeSubType(5)">24h降水</span>
        </div>
        <div class="tb_box" v-if="changeSwitch == 1">
            <flexbox :gutter="0" class="tb_row">
                <flexbox-item :span="1/2.5" class="tb_item1">
                    站名
                </flexbox-item>
                <flexbox-item class="tb_item" :class="{activeCol: colSwitch == 1}">
                    <div @click="changeCol(1, 'tem')">当前<img v-if="colSwitch == 1" :src=srcImg class="arrow"></div>
                </flexbox-item>
                <flexbox-item class="tb_item" :class="{activeCol: colSwitch == 2}">
                    <div @click="changeCol(2, 'tem_max')">24h最高<img v-if="colSwitch == 2" :src=srcImg class="arrow"></div>
                </flexbox-item>
                <flexbox-item class="tb_item4" :class="{activeCol: colSwitch == 3}">
                    <div @click="changeCol(3, 'tem_min')">24h最低<img v-if="colSwitch == 3" :src=srcImg class="arrow"></div>
                </flexbox-item>
            </flexbox>
            <flexbox :gutter="0" class="tb_row" v-for="(item,index) in dataList" :key="index">
                <flexbox-item :span="1/2.5" class="tb_item1 tb_itemc">
                    <div class="round" :class="{active1:index==0,active2:index==1,active3:index==2}">{{index+1}}</div>
                    {{item.owner_city}} - {{item.name}}
                </flexbox-item>
                <flexbox-item class="tb_item">
                    {{item.tem}}
                </flexbox-item>
                <flexbox-item class="tb_item">
                    {{item.tem_max}}
                </flexbox-item>
                <flexbox-item class="tb_item4">
                    {{item.tem_min}}
                </flexbox-item>
            </flexbox>
        </div>
        <div class="tb_box" v-if="changeSwitch == 2">
            <flexbox :gutter="0" class="tb_row">
                <flexbox-item :span="1/2.5" class="tb_item1">
                    站名
                </flexbox-item>
                <flexbox-item class="tb_item" :class="{activeCol: colSwitch == 1}">
                    <div @click="changeCol(1, 'pre_1h')">当前<img v-if="colSwitch == 1" :src=srcImg class="arrow"></div>
                </flexbox-item>
                <flexbox-item class="tb_item" :class="{activeCol: colSwitch == 2}">
                    <div @click="changeCol(2, 'pre_3h')">3h<img v-if="colSwitch == 2" :src=srcImg class="arrow"></div>
                </flexbox-item>
                <flexbox-item class="tb_item4" :class="{activeCol: colSwitch == 3}">
                    <div @click="changeCol(3, 'pre_6h')">6h<img v-if="colSwitch == 3" :src=srcImg class="arrow"></div>
                </flexbox-item>
                <flexbox-item class="tb_item" :class="{activeCol: colSwitch == 4}">
                    <div @click="changeCol(4, 'pre_12h')">12h<img v-if="colSwitch == 4" :src=srcImg class="arrow"></div>
                </flexbox-item>
                <flexbox-item class="tb_item4" :class="{activeCol: colSwitch == 5}">
                    <div @click="changeCol(5, 'pre_24h')">24h<img v-if="colSwitch == 5" :src=srcImg class="arrow"></div>
                </flexbox-item>
            </flexbox>
            <flexbox :gutter="0" class="tb_row" v-for="(item,index) in dataList" :key="index">
                <flexbox-item :span="1/2.5" class="tb_item1">
                    <div class="round" :class="{active1:index==0,active2:index==1,active3:index==2}">{{index+1}}</div>
                    {{item.owner_city}} - {{item.name}}
                </flexbox-item>
                <flexbox-item class="tb_item">
                    {{item.pre_1h}}
                </flexbox-item>
                <flexbox-item class="tb_item">
                    {{item.pre_3h}}
                </flexbox-item>
                <flexbox-item class="tb_item4">
                    {{item.pre_6h}}
                </flexbox-item>
                <flexbox-item class="tb_item">
                    {{item.pre_12h}}
                </flexbox-item>
                <flexbox-item class="tb_item4">
                    {{item.pre_24h}}
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Flexbox, FlexboxItem } from 'vux'
export default {
    components: {
        Flexbox,
        FlexboxItem
    },
    data(){
        return {
            observeTime: 1,
            dataList: [],
            changeSwitch: 1,
            changeSubSwitch: 1,
            countySwitch: 0,
            colSwitch: 1,
            sort: 'desc',
            srcImg: require("./../assets/path_down.png")
        }
    },
    methods: {
        compare(property) {
            let that = this;
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                if (that.sort == 'desc') {
                    return value2 - value1;
                } else {
                    return value1 - value2;
                }

            }
        },
        changeCounty(n, m) {
            this.countySwitch =n;
            this.sort = 'desc';
            axios.get('http://218.86.120.188:7941/sanming/public/get/getground?county='+m).then(
                response=>{
                    let m;
                    localStorage.setItem("sebData", JSON.stringify(response.data));
                    if (this.changeSwitch == 2) {
                        m = this.changeSubSwitch + 3;
                    } else {
                        m = this.changeSubSwitch
                    }
                    this.$refs.ifra.src = "/smwx/seb/index.html?type="+m+"&county="+n;
                    let allCounty = response.data
                    console.log(allCounty)
                    this.observeTime = allCounty[0].time
                    this.dataList = allCounty;
                })
        },
        changeType(n){
            this.changeSwitch=n;
            this.changeSubSwitch=1;
            this.sort = 'desc';
            this.countySwitch = 0;
            this.srcImg = require("./../assets/path_down.png");
            axios.get('http://218.86.120.188:7941/sanming/public/get/getground?county=mingxi').then(
                (response=>{
                    localStorage.setItem("sebData", JSON.stringify(response.data));
                    if (n == 2) {
                        this.$refs.ifra.src = "/smwx/seb/index.html?type=4&county=0";
                    } else {
                        this.$refs.ifra.src = "/smwx/seb/index.html?type=1&county=0";
                    }

                    let allCounty = response.data
                    console.log(allCounty)
                    this.observeTime = allCounty[0].time
                    this.dataList = allCounty;
                    if (n == 2) {
                        this.dataList = this.dataList.sort(this.compare('pre_1h'));
                    } else {
                        this.dataList = this.dataList.sort(this.compare('tem'));
                    }
                })
            )

        },
        changeSubType(n){
            this.changeSubSwitch=n;
            let m;
            if (this.changeSwitch == 2) {
                m = n + 3
            } else if (this.changeSwitch == 3) {
                m = 9;
            } else {
                m = n;
            }
            this.sort = 'desc';
            this.$refs.ifra.src = "/smwx/seb/index.html?type="+m+"&county="+this.countySwitch;
        },
        changeCol(n, property) {
            if (this.colSwitch == n && this.sort == 'desc') {
                this.sort = 'asc';
                this.srcImg = require("./../assets/path_up.png");
            } else if (this.colSwitch == n && this.sort == 'asc') {
                this.sort = 'desc';
                this.srcImg = require("./../assets/path_down.png");
            } else {
                this.colSwitch = n;
                this.sort = 'desc';
                this.srcImg = require("./../assets/path_down.png");
            }
            this.dataList = this.dataList.sort(this.compare(property));
        }
    },
    mounted() {
        axios.get('http://218.86.120.188:7941/sanming/public/get/getground?county=mingxi').then(
            (response=>{
                localStorage.setItem("sebData", JSON.stringify(response.data));
                this.$refs.ifra.src = "/smwx/seb/index.html?type=1&county=0";
                let allCounty = response.data
                console.log(allCounty)
                this.observeTime = allCounty[0].time
                this.dataList = allCounty;
            })
        )
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/style/main.scss";
    .county {
        font-family: PingFangSC;
    }
    .head_bx {
        .active{
            background-color: #28BAF3;
        }
    }
    .fxi {
        padding: px2rem(10*4) 0;
        border-right: solid 1px rgba(255,255,255,0.4);
    }
    .fxi_img {
        width: px2rem(30*4);
        height:px2rem(30*4);
    }
    .fxi_label {
        line-height: px2rem(20*4);
    }
    iframe {
        width:100%;border:none;
        /* height: px2rem(600*4); */
        height: 87%;
        position: absolute;
        top: 8%;
        z-index: -1;
    }
    .observe_time {
        width:px2rem(375*4);
        height:px2rem(29*4);
        background:rgba(7,134,210,1);
        text-align:center;
        line-height: px2rem(29*4);
    }
    .timeIcon{
        width: px2rem(13*4);
        height: px2rem(13*4);
        display: inline-block;
        background-image: url('./../assets/icon/time@2x.png');
        background-size: cover;
    }
    .type_select_group {
        position: absolute;
        top: 89%;
        left: 21%;
        .active {
            background-color: #28BAF3;
        }
    }
    .county_select_group {
        padding: 20px 0 10px 20px;
        .active {
            background-color: #28BAF3;
        }
        .type_selector2 {
            border-radius:2px;
            opacity:0.3567;
            border:1px solid rgba(255,255,255,1);
        }
    }
    .county_select_group2 {
        padding: 0px 0 20px 20px;
        .active {
            background-color: #28BAF3;
        }
        .type_selector2 {
            border-radius:2px;
            opacity:0.3567;
            border:1px solid rgba(255,255,255,1);
        }
    }
    .type_select_group2 {
        left: 7%;
    }
    .type_selector {
        display: inline-block;
        text-align: center;
        width:px2rem(72*4);
        height:px2rem(25*4);
        background:rgba(0,0,0,0.4);
        border-radius:4px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:px2rem(25*4);
    }
    .type_selector2 {
        display: inline-block;
        text-align: center;
        width:px2rem(62*4);
        height:px2rem(25*4);
        background:rgba(0,0,0,0.4);
        border-radius:4px;
        font-size:14px;
        font-family:PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:px2rem(25*4);
    }
    .tb_box {
        position: absolute;
        top:93%;
        margin: px2rem(4*4) 0;
        width: 100%;
        background: #55A0E5;
    }
    .tb_row {
        height:px2rem(40*4);
        text-align:center;
        background: #2259A1;
        border-radius:px2rem(6*4);
        line-height: px2rem(40*4);
        margin: px2rem(4*4) 0;
    }
    .tb_item1 {
        height:px2rem(40*4);
        background:rgba(20,61,114,0.7);
        border-radius:px2rem(6*4) 0 0 px2rem(6*4);

    }
    .tb_itemc {
        text-align: left;
    }
    .tb_item {
        height:px2rem(40*4);
        background:rgba(20,61,114,0.7);
    }
    .tb_item4 {
        height:px2rem(40*4);
        background:rgba(20,61,114,0.7);
        border-radius:0 px2rem(6*4) px2rem(6*4) 0;
    }
    .round {
        background-image: url('./../assets/yuan_4.png');
        background-size: cover;
        width: px2rem(24*4);
        height: px2rem(24*4);
        display: inline-block;
        line-height: px2rem(24*4);
        text-align: center;
        margin: px2rem(11*4) px2rem(5*4);
        float: left;
    }
    .active1{
        background-image: url('./../assets/yuan_1.png');
    }
    .active2{
        background-image: url('./../assets/yuan_2.png');
    }
    .active3{
        background-image: url('./../assets/yuan_3.png');
    }
    .arrow {
        width: px2rem(7*4);
        height: px2rem(12*4);
    }
    .activeCol {
        background-color: #28BAF3;
    }
    .county_selector {
        width:px2rem(375*4);
        height:px2rem(100*4);
        background:rgba(0,0,0,1);
        opacity:0.4916;
        .type_selector2 {
            opacity: 1;
        }
    }
</style>
