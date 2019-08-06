import ajax from "./Ajax";
// const BASE_URL='http://localhost:4000'
const BASE_URL='/api'
/*包含多个接口请求的函数模块*/
// 1、根据经纬度获取位置详情
export function reqAddress(geohash){
    return ajax(`/api/position/${geohash}`)
}
// 2、获取食品分类列表
export const reqFoodCategorys=()=>ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export function reqShops(longitude,latitude){
    return ajax(`/api/shops`,{longitude,latitude})
}
// 4、根据经纬度和关键字搜索商铺列表
export function reqShopsList(keyword,geohash){
    return ajax(`/api/search_shops`,{keyword,geohash})
}
// 5、获取一次性验证码
export function reqOniceCaptcha(){
    return ajax(`/api/captcha`)
}
// 6、用户名密码登陆
export function reqPwdLogin(name,pwd,captcha){
    return ajax(`/api/login_pwd`,{name,pwd,captcha},'POST')
}
// 7、发送短信验证码
export const reqSendCode = phone => ajax(`/api/sendcode`,{phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone,code) => ajax(`/api/login_sms`,{phone,code},'POST')
// 9、根据会话获取用户信息
export const reqUser = () => ajax(`/api/userinfo`)
// 10、用户登出
export const reqLogout = () => ajax(`/api/logout`)