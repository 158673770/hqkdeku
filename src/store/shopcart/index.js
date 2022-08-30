/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-11 17:04:33
 * @LastEditTime: 2022-08-17 10:05:48
 * @LastEditors: hqk
 */
import {reqCartList,reqDeleteCartById,reqCheckCart} from "@/api"
const state = {
    cartList:[]
}
const mutations  = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    // 获取购物车列表的数据 
    async getCartList({commit}){
       let result = await reqCartList()
       if(result.code == 200){
         commit("GETCARTLIST",result.data)
       }
    //    console.log("result购物车列表数据",result)
    },
    // 删除购物车数据
   async DeleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车某一个产品选中的状态
    async UpDateCheckCart({commit},isChecked){
        // console.log('store购物车的id',skuId)
        let result = await reqCheckCart(isChecked.skuId,isChecked.isChecked)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除全部勾选的产品  context获取仓库的所有属性  {commit} 获取context中的提交函数的方法
    deleteAllCheckedCart({dispatch,getters}){
        // context可以理解为小仓库， 
        // 获取取购物车中的全部产品
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
          let promise = item.isChecked == 1? dispatch("DeleteCartListBySkuId",item.skuId) : ''
            // 将每一次返回的Promise添加到数组当中 Promise(['p1','p2','p3']) PromiseAll 是数组形式的使用
            PromiseAll.push(promise)
        });
        // 只要全部的p1|p2....返回的都是成功，如果有一个失败，返回的结果就是失败
        return Promise.all(PromiseAll)
    },
    // 修改全选和取消全选的状态
    updateAllCartChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item =>{
         let promise = dispatch('UpDateCheckCart',{isChecked,skuId:item.skuId})
            PromiseAll.push(promise)
        })
        // 最终返回的结果
        return Promise.all(PromiseAll)
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}