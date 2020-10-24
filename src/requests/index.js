import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'http://www.liangnutech.com/pt-wechat/public/index.php'
})
//获取签名
export function getSignature(url) {
    return axiosInstance.get(url)
}
//获取专题为农文件列表
export function getAgriculturalList() {
    return axiosInstance.get('/api/Product/getAgriculturalList')
}
//获取天气预警数据
export function getWarningData(id){
    return axiosInstance.get('/api/live_monitor/warnMessageNum',{
        params:{
            id:id
        }
    })
}
//获取天气实况数据
export function getWeatherLiveData(lon,lat) {
    return axiosInstance.get('/api/pt_weather/weatherLive',{
        params:{
            lon,
            lat
        }
    })

}
//获取专题服务数据
export function getSpecialServiceList() {
    return axiosInstance.get('/api/Product/specialServiceList')
}

//获取PDF文件
export function getPdfFile(fileName) {
    return axiosInstance.get('api/Product/getSpecialServiceFile',{
        params:{
            fileName:fileName
        }

    })
}
