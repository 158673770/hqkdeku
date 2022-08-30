/*
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 10:07:27
 * @LastEditTime: 2022-06-29 10:35:37
 * @LastEditors: 【大白菜】2601779853@qq.com
 */
import Vue from "vue";
import App from "./App.vue";
// import {hunhe,hunhe2}  from "./mixin"; //混合混入 共用方法数据
// 关闭vue的生产提示
Vue.config.productionTip = false;
// Vue.mixin(hunhe); //混合混入 共用方法数据
// Vue.mixin(hunhe2); //混合混入 共用方法数据
new Vue({   
    el: "#app",
    render: h => h(App)
});