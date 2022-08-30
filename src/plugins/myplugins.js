/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-25 15:31:31
 * @LastEditTime: 2022-08-25 16:51:00
 * @LastEditors: hqk
 */
// 自定义插件封装与使用
// vue插件一定是暴露一个对象
let myPlugins = {};
// vue插件一定需要用到install  ： 其中有一个参数能拿到vue实例，
myPlugins.install = function(Vue,option){
    // 举例子 Vue.prototype.$bus: 任何组件都可以使用
    // Vue.directive  全局指令
    // Vue.component  全局组件
    // Vue.filter  全局过滤器
    console.log("Vue",Vue);
    // Vue实例
    console.log("option",option);
    // option main.js中安装挂载插件里面定义的名字  如：name: 'upper' 在组件内标签使用为 v-upper='xxx' 
    // 全局指令的用法 option 是参数
    Vue.directive(option.name,(element,params)=>{
        // element 是组件内标签中使用了v-upper 的DOM 元素
        element.innerHTML = params.value.toUpperCase();
        // params 是指令对象
        console.log("params",params);
        console.log("element",element);
    });
};
export default myPlugins;