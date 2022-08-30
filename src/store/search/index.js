/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-25 08:55:54
 * @LastEditTime: 2022-08-01 09:27:57
 * @LastEditors: hqk
 */
import {reqGetSearchInfo} from "@/api"
const state = {
    // 接口返回的是对象searchList为对象
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    // 获取search模块数据
    async getSearchList({commit},params = {}){
        // 接口至少传递一个空对象
        // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是个空对象
       let result = await reqGetSearchInfo(params)
       if(result.code == 200){
        commit("GETSEARCHLIST",result.data)
       }
    }
};
// 计算属性
// 项目中getters主要的作用是：简化仓库的数据
const getters = {
    // state是当前仓库的state
    goodsList(state){
        // 这样书写是有问题的 return state.searchList.goodsList 如果遇见没网的情况下返回的是未定义所以后面需要加个 || []
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}