import moment from "moment";
import {getSignature} from "../requests";


export function getLonLat() {
    let timestamp = moment().format('X')

    const  chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    const  max = chars.length
    let  str = ''
    let signature = ''
    let latitude = null
    let longitude = null
    for (let i = 0; i < 16; i++) {
        str += chars.charAt(Math.floor(Math.random() * max))
    }
    const html_url = "http://www.xuehuadagang.cn/pt_wechat_front/index.html";//访问的页面的地址
    const post_url = 'http://www.xuehuadagang.cn/pt-wechat/public/index.php/api/index/getJSSDkTicket?timestamp=' + timestamp+'&nonce=' +str +'&url='+html_url
    getSignature(post_url).then(res =>{
        signature = res.data.data
        console.log(res)
        console.log(signature)
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx41472ba49191f99c', // 必填，公众号的唯一标识
            timestamp:timestamp , // 必填，生成签名的时间戳
            nonceStr: str, // 必填，生成签名的随机串
            signature:signature ,// 必填，签名
            jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，这边是获取经纬度
        })

        wx.ready(() => {//打开页面以后调用的函数
            wx.getLocation({
                debug: true,
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                     latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                     longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    let speed = res.speed; // 速度，以米/每秒计
                    let accuracy = res.accuracy; // 位置精度
                    alert("lat:" + latitude + "lon:"+longitude+'速度：'+speed +'位置经度：'+accuracy)
                }
            })
        })
    })
    return {
        lon:1,
        lat:1

    }
}
