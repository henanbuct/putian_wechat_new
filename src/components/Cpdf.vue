<template>
    <div class="wrapper">
        <pdf :src="src"
        :page="currentPage">
        </pdf>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'
    export default {
        name: "Cpdf",
        components: {
            pdf,
        },
        data(){
            return{
                src:'',
                currentPage:1
            }
        },
        created() {
            this.getPdfData()

        },
        methods:{
            getPdfData(){
                // console.log(process.env.NODE_ENV)
                process.env.NODE_ENV == 'development' ?
                    this.src = 'dev/pt-wechat/public/temp/pdf/'+this.$route.params.fileName + '.pdf': this.src = 'http://118.126.88.48/pt-wechat/public/temp/pdf/'+this.$route.params.fileName + '.pdf'

                console.log(this.src)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../lib/hotcss/px2rem.scss";
.wrapper{
    width: 100vw;
    min-height: px2rem(650*4);
    color: black;
}
</style>
