<template>
  <div class="flexbox" :style="bg">
      <div class="content" v-for="(item,index) in list" :key="index" @click="clickFile(item.fileName)">
        <img src="@/assets/icon/pdf-iocn@2x.png">
        <div class="content2">{{item.fileName | filterFileName}}
          <div class="contentTime">{{item.updateTime.substring(0,10)}}</div>
        </div>
      </div>
  </div>
</template>
<script>
    import {getSpecialServiceList,getPdfFile} from "../requests";
export default {
  data(){
    return{
        list:[],
        bg:{
            backgroundImage: "url(" + require('./../assets/bg_shikuan.jpg')+ ")",
            height:'100vh',
            backgroundRepeat: "no-repeat",
            // width:'100vw'
        },
    }
  },
  components: {

  },
  mounted(){
      getSpecialServiceList().then(res=>{
          console.log(res)
          this.list = res.data.data
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
  methods:{
        clickFile(val){
            console.log(val)
            getPdfFile(val).then(res=>{
                console.log(res)
                if (res){
                    let arr = []
                    arr = val.split('.')
                    this.$router.push({
                        name:'pdf',
                        params:{
                            fileName:arr[0]
                        }
                    })
                }
            }).catch(err=>{
                console.log(err)
                this.$message()
            })
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
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    /*background-color: #04132D;*/
    min-height: px2rem(650*4);
    background-size: cover;

}
.content{
  height: px2rem(67*4);
  border-bottom: px2rem(1*4) solid rgba(255,255,255,0.5);
  margin: px2rem(13*4) px2rem(18*4) px2rem(0*4) px2rem(18*4);
  img{
    margin-left: px2rem(28*4);
    width: px2rem(30*4);
    height: px2rem(38*4);
    margin-bottom: px2rem(28*4);
  }
}
.content2{
  display: inline-block;
  margin-top: px2rem(13*4);
  margin-left: px2rem(10*4);
  font-size: px2rem(16*4);
}
.contentTime{
    margin-left: px2rem(5*4);
  margin-top: px2rem(8*4);
  opacity: 0.6;
  font-size: px2rem(12*4);
}
</style>


