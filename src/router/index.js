import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import error from '@/components/error'
import siteLive from '@/components/siteLive'
import preWarning from '@/components/preWarning'
import radarSatellite from '@/components/radarSatellite'
import satellite from '@/components/satellite'
import county from '@/components/county'
import weatherLive from '@/components/weatherLive'
import weatherForecast from '@/components/weatherForecast'
import putianCity from '@/components/putianCity'
import radarEcho from '@/components/radarEcho'
import pointWeather from '@/components/pointWeather'
import marquee from '@/components/marquee'
import typhoon from '@/components/typhoon'
import travle from '@/components/travle'
import travleDetail from '@/components/travleDetail'
import nongYe from '@/components/nongYe'
import zhuanti from '@/components/zhuanti'
import Cpdf from "../components/Cpdf";
import WeatherVideo from "../components/WeatherVideo";
import WeatherPopularize from "../components/WeatherPopularize";
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path:'/siteLive',//站点实况
        name:'siteLive',
        component:siteLive

      },
      {
        path:'/preWarning',//预警信息
        name:'preWarning',
        component:preWarning
      },
      {
        path:'/radarSatellite',//雷达回波
        name:'radarSatellite',
        component:radarSatellite

      },
      {
        path:'/satellite',//云图雷达
        name:'satellite',
        component:satellite
      },
      {
        path:'/county',//城市气象
        name:'county',
        component:county

      },
      {
        path:'/weatherLive',//天气实况
        name:'weatherLive',
        component:weatherLive

      },
      {
        path:'/weatherForecast',//天气预报
        name:'weatherForecast',
        component:weatherForecast

      },
      {
        path:'/putianCity',
        name:'putianCity',
        component:putianCity
      },
      {
        path:'/radarEcho',//雷达回波
        name:'radarEcho',
        component:radarEcho
      },
      {
        path:'/pointWeather',
        name:'pointWeather',
        component:pointWeather
      },
      {
        path:'/typhoon',
        name:'typhoon',
        component:typhoon
      },
      {
        path:'/travle',//旅游气象
        name:'travle',
        component:travle
      },
      {
        path:'/travleDetail',
        name:'travleDetail',
        component:travleDetail
      },
      {
        path:'/nongYe',//气象为农
        name:'nongYe',
        component:nongYe
      },
      {
        path:'/zhuanti',//专题预报
        name:'zhuanti',
        component:zhuanti
      },
      {
        path:'*',
        name:'error',
        component:error
      },
      {
        path: '/pdf',
        name: 'pdf',
        component: Cpdf
      },
      {
        path: '/WeatherVideo',//气象影视
        name: 'WeatherVideo',
        component: WeatherVideo
      },
      {
        path: '/WeatherPopularize',//气象科普
        name: 'WeatherPopularize',
        component: WeatherPopularize
      }

    ]
})
