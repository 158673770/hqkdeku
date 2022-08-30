/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-13 14:58:21
 * @LastEditTime: 2022-08-29 08:58:09
 * @LastEditors: hqk
 */
import Vue from 'vue'
import App from './App.vue'
// 三级联动组件---全局组件
import TapyNav from '@/components/TapyNav'
import Carsousel from '@/components/Carsousel'
import Pagination from '@/components/Pagination'

import { Button, MessageBox } from 'element-ui';
// 第一个参数:组件名称 第二个参数:组件对象
Vue.component(TapyNav.name, TapyNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
// 注册全局组件
Vue.component(Button.name, Button);
// element注册全局组件的时候，全局写法，挂载原型链上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入MockServe.js ---- mock数据
import '@/mock/mockServe'
// 引入swiper的样式
import 'swiper/css/swiper.css'
// 引入路由组件
import router from '@/router'
// 引入仓库
import store from '@/store'
Vue.config.productionTip = false


// 统一接口api文件夹全部请求函数
// 统一引入
import * as API from '@/api'

// 引入图片懒加载依赖

import loadimage from '@/assets/images/mrljz.gif'
import VueLazyload from 'vue-lazyload'
// vue-lazyload 图片懒加载vue2版本安装vue-lazyload@1.3.3 版本
Vue.use(VueLazyload, {
  // 懒加载默认的图片
  loading: loadimage,
})

// console.log('VueLazyload',VueLazyload)
// 引入自定义的插件
// import myPlugins from '@/plugins/myplugins'
// // 安装自定义插件
// Vue.use(myPlugins,{
//   // 自定义插件的名字
//   name:'upper',
// });
// 引入表单校验插件
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // mounted(){
  // },
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')