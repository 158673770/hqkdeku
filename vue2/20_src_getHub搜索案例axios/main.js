/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-06 17:04:42
 * @LastEditors: hqk
 */
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	// 全局事件总线
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})