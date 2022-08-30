/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-19 17:03:57
 * @LastEditTime: 2022-08-24 16:36:38
 * @LastEditors: hqk
 */
// 当前的模块：API模块统一管理
import request from './request'  //真实接口地址以/api开头
import mockRequests from './mockAjax'//模拟接口mock中调取数据以接口地址以/mock开头
// 三级联动的接口
// /api/product/getBaseCategoryList  get 请求    参数无
export const reqCategoryList = () => {
    // 发请求:axios发请求返回结果是一个promise对象
    return request({ url: 'product/getBaseCategoryList', method: 'get' })
}
// 获取banner（Homes首页轮播图接口）缩写版
export const reqGetBannerList = () => mockRequests.get("/banner");
// 获取Floor数据
export const reqFloorList = () => mockRequests.get("/floor")
// 获取搜索模块数据  接口地址/api/list 请求的方式post 需要带参数
/* 参数
{
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
  }
*/
// request({})中需要三个值1.接口地址，2请求方式，3.传递的参数post需要data：传递的值
export const reqGetSearchInfo = (params) => request({url:'/list',method:'post',data:params})
// 获取产品详情信息接口 api/item/{ skuId } 请求方式get
export const reqGoodsInfo = (skuId) => request({url:`/item/${ skuId }`,method:'get'})
// 将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
// 获取购物车列表数据接口 /api/cart/cartList 请求方式get 无参数
export const reqCartList = ()=> request({url:'/cart/cartList',method:'get'})
// 删除购物车产品的接口 /api/cart/deleteCart/${skuId} method:'delete'
export const reqDeleteCartById = (skuId) => request({url:`/cart/deleteCart/${skuId}`,method:'delete'})
// 修改商品的选中状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqCheckCart = (skuId,isChecked) => request({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
// 获取注册的验证码 /api/user/passport/sendCode/{phone} get请求
export const reqGetCode = (phone) => request({url:`/user/passport/sendCode/${phone}`,method:'get'})
// 注册提交地址 /api/user/passport/register post请求 参数3个 phone password code
export const reqRegister = (data) =>request({url:`/user/passport/register`,data,method:'post'})
// 登录接口地址 /api/user/passport/login post请求 参数2个 phone password
export const reqLogin = (data) => request({url:'/user/passport/login',data,method:'post'})
// 获取用户的信息需要带着用户的【token】向服务器要用户信息 /user/passport/auth/getUserInfo 请求get
export const reqUserInfo = () => request({url:'/user/passport/auth/getUserInfo',method:'get'})
// 退出登录 /api/user/passport/logout 请求get
export const reqLogout = () => request({url:'/user/passport/logout',method:'get'})
// 获取用户地址信息 /api/user/userAddress/auth/findUserAddressList 请求get
export const reqAddressList = () => request({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
// 获取订单交易信息   /api/order/auth/trade 请求get
export const reqTradeList = () => request({url:'/order/auth/trade',method:'get'})
// 下面是由组件当中调用接口使用不在使用vuex
// 提交订单  /api/order/auth/submitOrder?tradeNo={tradeNo} 请求post
export const reqSubOrder = (tradeNo,data) => request({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
// 获取支付信息 /api/payment/weixin/createNative/{orderId} 请求get
export const reqPayInfo = (oderid) => request({url:`/payment/weixin/createNative/${oderid}`,method:'get'})
// 获取支付订单状态 /api/payment/weixin/queryPayStatus/{orderId} 请求get
export const reqPayStatus = (orderId) => request({url:`payment/weixin/queryPayStatus/${orderId}`,method:'get'})
// 获取个人中心的数据-我的订单列表 /api/order/auth/{page}/{limit} 请求get
export const reqAuthOder = (page,limit) => request({url:`/order/auth/${page}/${limit}`,method:'get'})