/*
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 10:07:27
 * @LastEditTime: 2022-06-30 14:46:08
 * @LastEditors: hqk
 */
import Vue from "vue";
import App from "./App.vue";
// 关闭vue的生产提示
Vue.config.productionTip = false;
new Vue({   
    el: "#app",
    render: h => h(App),
    // mounted() {
    //     console.log("mounted");
    //     setTimeout(() => {
    //         this.$destroy()
    //     },3000);
    // }
});