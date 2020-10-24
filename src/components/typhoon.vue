<template>
  <div class="flexbox">
    <div class="typhoonList">
      <div class="title"><div>台风列表</div></div>
      <table class="typhoonList2">
        <thead>
          <tr class="listTitle">
            <td>编号</td>
            <td>中文名</td>
            <td>英文名</td>
          </tr>
        </thead>
        <tbody>
          <tr class="listContent">
            <td><input type="checkbox" @click="hover">201902</td>
            <td><span>蝴蝶</span></td>
            <td>WUTIP</td>
          </tr>
          <tr class="listContent" cellpadding="8">
            <td><input type="checkbox">201910</td>
            <td>蝴蝶</td>
            <td>WUTIP</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="typhoonType">
      <div class="typeTitle"><div>台风</div></div>
      <div class="typhoonIcon"><img src="./../assets/yuan_1.png"><div>热带低压</div></div>
      <div class="typhoonIcon"><img src="./../assets/yuan_1.png"><div>热带风暴</div></div>
      <div class="typhoonIcon"><img src="./../assets/yuan_1.png"><div>强台风</div></div>
      <div class="typhoonIcon"><img src="./../assets/yuan_1.png"><div>强热带风暴</div></div>
      <div class="typhoonIcon"><img src="./../assets/yuan_1.png"><div>台风</div></div>
      <div class="typhoonIcon"><img src="./../assets/yuan_1.png"><div>超强台风</div></div>
    </div>
  </div>
</template>
<script>
// import { Flexbox,FlexboxItem,CheckIcon,XTable  } from 'vux'
export default {
  data(){
    return{
      color: "common",
    }
  },
  components: {
  },
  mounted(){
  },
  methods:{
    hover(){
      this.color="blue";
    }
  },
  watch:{
  }
}
</script>
<style>
.weui-cells{
        background-color: #0A275A;
    }

</style>

<style lang="scss" scoped>
@import "../lib/hotcss/px2rem.scss";
body{
    color:white;
}
.flexbox{
}
.title{
  color: #5BB4FF;
  height: px2rem(30*4);
  div{
    display: inline-block;
    margin-top: px2rem(8*4);
    margin-left: px2rem(15*4);
  }
}
.typhoonList{
  width: px2rem(240*4);
  border-radius: px2rem(4*4);
  margin-top: px2rem(15*4);
  margin-left: px2rem(15*4);
  background-color: #04132D;
  opacity: 0.9;
}
.typhoonList2{
  width: px2rem(240*4);
  border-radius: px2rem(4*4);
  background-color: #04132D;
  opacity: 0.9;
  padding-bottom: px2rem(10*4);
}
.listTitle{
  background-color: #18263F;
  text-align:center;
  td{
    width: px2rem(80*4);
    height: px2rem(24*4);
  }
}
.listContent{
  text-align: center;
  td{
    padding: px2rem(5*4) px2rem(0*4) px2rem(2*4) px2rem(0*4);
  }
  input{
    margin-right: px2rem(10*4);
  }
}
.typhoonType{
  height: px2rem(114*4);
  width: px2rem(375*4);
 /* margin-top: px2rem(356*4);*/
  background-color: #04132D;
  position: absolute;
  bottom: 0;
  .typhoonIcon{
      display: inline-block;
    margin-left: px2rem(30*4);
    margin-top: px2rem(14*4);
    img{
      height: px2rem(10*4);
      width: px2rem(10*4);
    }
    div{
      display: inline-block;
      width: px2rem(70*4);
      margin-left: px2rem(8*4);
    }
  }
  .typeTitle{
    color: #5BB4FF;
    font-size: px2rem(14*4);
    div{
      display: inline-block;
      margin-top: px2rem(14*4);
      margin-left: px2rem(31*4);
    }
  }
}
</style>


