/*
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 10:07:27
 * @LastEditTime: 2022-07-04 13:15:35
 * @LastEditors: hqk
 */
import Vue from "vue";
import App from "./App.vue";
// 关闭vue的生产提示
// const demo = Vue.extend({})
// const d = new demo()
Vue.config.productionTip = false;
new Vue({   
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    }
});