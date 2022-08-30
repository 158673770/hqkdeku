/*
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 10:07:27
 * @LastEditTime: 2022-06-29 11:26:34
 * @LastEditors: 【大白菜】2601779853@qq.com
 */
import Vue from "vue";
import App from "./App.vue";
// 引入插件
import plugins from "./plugins";
// import {hunhe,hunhe2}  from "./mixin"; //混合混入 共用方法数据
// 关闭vue的生产提示
Vue.config.productionTip = false;
Vue.use(plugins)
// Vue.mixin(hunhe); //混合混入 共用方法数据
// Vue.mixin(hunhe2); //混合混入 共用方法数据
new Vue({   
    el: "#app",
    render: h => h(App)
});