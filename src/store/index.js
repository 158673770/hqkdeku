/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-20 14:06:53
 * @LastEditTime: 2022-08-23 10:01:30
 * @LastEditors: hqk
 */
import Vue from "vue";

import Vuex from 'vuex';

// 使用vuex
Vue.use(Vuex);
// 引入小仓库
import home from './home';
import search from './search';
import detail from "./detail";
import shopcart from "./shopcart";
import user from './user';
import trade from './trade';
// 对外暴露Store类的一个实例
export default new Vuex.Store({
    // 实现vuex仓库模式开发储存数据 
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})