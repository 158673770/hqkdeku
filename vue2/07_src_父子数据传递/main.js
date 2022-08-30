/*
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 10:07:27
 * @LastEditTime: 2022-06-29 13:11:04
 * @LastEditors: 【大白菜】2601779853@qq.com
 */
import Vue from "vue";
import App from "./App.vue";
// 关闭vue的生产提示
Vue.config.productionTip = false;
new Vue({   
    el: "#app",
    render: h => h(App)
});