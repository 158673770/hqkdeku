/*
 * @Description:  
 * @Author: hqk
 * @Date: 2022-07-25 08:55:21
 * @LastEditTime: 2022-08-18 15:43:15
 * @LastEditors: hqk
 */
import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'
const state = {
    // state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化d的】
    categoryList:[],
    // 轮播图数据
    bannerList:[],
    // floor组件的数据
    floorList:[]
};
const mutations = {
    // mutations使用CATEGORYLIST函数存储TapyNav数据
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
        console.log("categoryList",categoryList)
    },
    // mutations使用GETBANNERLIST函数存储banner数据
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
        console.log("bannerList",bannerList)
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
        console.log("bannerList",floorList)
    },

};
const actions = {
    // 通过api里面的接口函数调用，向服务器发送请求，获取服务器数据 获取TapyNav数据
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200){
            commit("CATEGORYLIST",result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error(faile));
        }
        console.log('result',result)
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}){
       let result =  await reqGetBannerList();
       console.log("mock",result)
       if(result.code == 200){
            commit("GETBANNERLIST",result.data);
            return 'ok';
       }else{
            return Promise.reject(new Error(faile));
        }
    },
    // 获取floor数据
    async getFloorList({commit}){
        let result =  await reqFloorList();
        console.log("mock",result)
       if(result.code == 200){
            commit("GETFLOORLIST",result.data);
            return 'ok';
       }else{
            return Promise.reject(new Error(faile));
        }
    }
};
// 计算属性
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}