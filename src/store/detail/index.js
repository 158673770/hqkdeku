/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-08 09:40:53
 * @LastEditTime: 2022-08-14 16:21:22
 * @LastEditors: hqk
 */
import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
// 封装游客身份模块uuid
import {getUUID} from "@/utils/uuid_token"
const state = {
    goodInfo:{},
    skuInfo:{},
    // 游客的临时id 
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取产品信息的actions
    async getGoodInfo({commit},skuId){
       let result =  await reqGoodsInfo(skuId)
       if(result.code == 200){
            commit("GETGOODINFO",result.data)
       }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        // 添加购物车返回的结构
        // 服务器写入数据成功，并没有返回数据，只是返回code == 200 等于成功
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        // console.log("result",result)
        // 当前的这个函数如果执行返回的是promise
        // return Promise.reject(new Error("faile"))
        if(result.code == 200){
            return "ok";
        }else{
            // 代表加入购物车失败
            return Promise.reject(new Error("faile"))
        }
    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}