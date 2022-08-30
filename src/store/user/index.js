/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-17 14:21:20
 * @LastEditTime: 2022-08-22 11:31:59
 * @LastEditors: hqk
 */
import {reqGetCode,reqRegister,reqLogin,reqUserInfo,reqLogout} from '@/api'
import { setToken,getToken,removeToken } from './token';
const state = {
    code:'',
    token:getToken(),
    userInfo:{}
};
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    GETUSERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    // 清除本地数据
    CLEAR(state){
        // 把仓库相关用户信息清空
        state.token = '';
        state.userInfo = {};
        // 把本地存储的token清空
        removeToken();
        // localStorage.removeItem
    }   
};
const actions = {
   async getCode({commit},phone){
        // 获取验证码的接口，是把验证码返回，不是真实发送手机
        let result = await reqGetCode(phone);
        console.log('result手机',result);
        if(result.code == 200){
            commit('GETCODE',result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
        // console.log('request验证码',request)
    },
    async userRegister({commit},data){
       let result = await reqRegister(data);
    //    console.log('result',result)
       if(result.code == 200){
         return 'ok'
       }else{
         return Promise.reject(new Error('faile'));
       }
    },
    // 登录 【token】
    async getUserLogin({commit},data){
        let result = await reqLogin(data)
        console.log(result)
        if(result.code == 200){
            // 用户已经登录成功且获取到token
            commit('GETUSERLOGIN',result.data.token);
            // 持久化存储token
            setToken(result.data.token)
            // localStorage.setItem('TOKEN',result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if(result.code == 200){
            // 提交用户的信息
            commit('GETUSERINFO',result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 退出登录
   async userLogout({commit}){
    // 只向服务器发一次请求，通知服务器清除token
        let result = await reqLogout()
        // action里面不能操作仓库数据state
        if(result.code == 200){
            commit('CLEAR');
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {};

export default{
    state,
    mutations,
    actions,
    getters
}
