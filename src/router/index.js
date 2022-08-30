/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-18 09:26:32
 * @LastEditTime: 2022-08-25 10:52:50
 * @LastEditors: hqk
 */
import Vue from "vue";

import VueRouter from "vue-router";
import routes from './router'
// 引入vuex仓库
import store from '@/store'
// 使用插件
Vue.use(VueRouter);

// 先把vue-router原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 从写push方法 | replace方法
// 在原型对象上添加push方法，
VueRouter.prototype.push = function (location, resolve, reject) {
    if(resolve && reject) {
        // call || apply 相同点：都是调用函数，但是call的参数是数组，apply的参数是一个参数数组
        // 不同点 call的参数是一个数组，apply的参数是一个参数数组
        originPush.call(this, location, resolve, reject);
    }else{
        originPush.call(this, location,()=>{},()=>{});
    }
}
// 重写 replace方法
VueRouter.prototype.replace = function (location, resole, reject) {
    // 如果resolve和reject都存在，则调用原型对象的replace方法

    if(resole && reject) {
        originReplace.call(this, location, resole, reject);
    }else{
        originReplace.call(this, location,()=>{},()=>{});
    }
}
// 配置路由
let router = new VueRouter({
    // 配置路由
    routes,
    // 路由跳转滚动条滚动行为
    scrollBehavior (to, from, savedPosition) {
        // console.log("to",to,'from',from,"savedPosition",savedPosition)
        return { x: 0, y: 0 }
    }
});
// 全局前置守卫 在路由跳转之前进行判断
router.beforeEach(async (to,from,next)=>{
    // to 可以获取到跳转到哪个路由的信息
    // from 可以获取到你从哪个路由而来的信息
    // next 放行 next('/home')放行到指定的位置  next(false) 返回到之前的页面
    // next()
    // 用户登录了，才会有token，未登录一定不会有token
    let token = store.state.user.token
    //    用户信息 {}对象永远是真true 判断对象里面的字段是否存在
    let name = store.state.user.userInfo.name
    // console.log(userInfo)
    //    用户已经登录了
   if(token){
        // 用户已经登录了想进入login,停留在首页 已经登录不可以进入注册页面
        if(to.path == '/login' || to.path=='/register'){
            next('/')
        }else{
            // 登录了进入的不是login页面 进入的是其它页面
            // 如果用户名已有
            if(name){
                next()
            }else{
                // 没有用户信息,派发action让仓库存储用户信息再转跳
                try {
                    // 获取用户信息成功
                    // debugger
                    await store.dispatch('getUserInfo')
                    // 放行
                    next()
                } catch (error) {
                    // token 失效了 需要清除本地的存储token再跳转至登录也login页面
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
   }else{
        // 未登录状态：不能去交易相关页面，不能去支付相关页面【pay || paysuccess】,不能去个人中心
        // 未登录去上面这些路由---登录
        let toPath = to.path
        if(toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1){
            // 把未登录的时候想去而没有去成的页面，存储于链接当中
            next('/login?redirect='+toPath)
        }else{
            next()
        }
        // 去的不是上面的这些路由需要放行 比如 （home|search|shopCart) --放行
        // next()
   }
})


export default router