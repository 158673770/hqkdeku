/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-23 09:55:49
 * @LastEditTime: 2022-08-24 09:24:46
 * @LastEditors: hqk
 */
import {reqAddressList,reqTradeList} from '@/api'
const state = {
    addressList:[],
    OrderInfo:[]
};
const mutations = {
    GETADDRESSLIST(state,addressList){
        state.addressList = addressList
    },
    GETORDERINFO(state,OrderInfo){
        state.OrderInfo = OrderInfo
    }
};
const actions = {
    // 获取用户地址信息
   async getAddressList({commit}){
       let result = await reqAddressList();
       console.log('获取用户地址信息',result.data)
       if(result.code == 200){
            commit('GETADDRESSLIST',result.data)
       }
    },
    // 获取商品清单的数据
   async getOrderInfo({commit}){
       let result = await reqTradeList();
       console.log('获取商品清单的数据',result.data)
       if(result.code == 200){
        commit('GETORDERINFO',result.data)
   }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}