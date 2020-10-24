import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import "./lib/hotcss/hotcss";
import axios from 'axios';
import wx from 'weixin-jsapi'

// import vueSwiper from 'vue-awesome-swiper' // 引入vue-awesome-swiper
// import 'swiper/dist/css/swiper.css' // 引入样式
// Vue.use(vueSwiper) // 使用插件
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$wx = wx;



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
