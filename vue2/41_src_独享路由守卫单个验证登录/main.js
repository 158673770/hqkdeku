/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-11 15:04:32
 * @LastEditors: hqk
 */
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由配置
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false
// 应用路由
Vue.use(VueRouter)
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router,
})