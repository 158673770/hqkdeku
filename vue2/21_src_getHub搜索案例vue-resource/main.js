/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-07 09:48:10
 * @LastEditors: hqk
 */
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 接口插件vue-resource
import vueResource from 'vue-resource'
//关闭Vue的生产提示
Vue.config.productionTip = false
// 使用vueResource 插件
Vue.use(vueResource)
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	// 全局事件总线
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})