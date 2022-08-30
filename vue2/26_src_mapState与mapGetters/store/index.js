/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-08 09:36:08
 * @LastEditTime: 2022-07-08 15:57:12
 * @LastEditors: hqk
 */
// 该文件主要用于存放vuex的store
// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)
// 准备action---用于响应组件中的事件 类似于事件处理函数
const actions = {
    // jia(constext,value){
    //     console.log('actions中的jia被调用了',constext)
    //     console.log('value',value)
    //     constext.commit('JIA',value)
    // },
    // jian(constext,value){
    //     console.log('actions中的jian被调用了',constext)
    //     console.log('value',value)
    //     constext.commit('JIAN',value)
    // },
    
    jiaOdd(constext,value){
        console.log('actions中的jiaOdd被调用了',constext)
        console.log('value',value)
        // dispatch('demo1',value) //调用demo1的action
        // constext.dispatch('demo1',value)
        // commit方法，用于触发mutation中的JIA方法
        if(constext.state.sum%2){
            constext.commit('JIA',value)
        }
        // constext.commit('JIAN',value)
    },
    // 开发过程中添加事件处理jiaOdd
    // demo1(constext,value){
    //     console.log('actions中的demo1被调用了')
    //     constext.dispatch('demo2',value)
    // },
    // demo2(constext,value){
    //     console.log('actions中的demo2被调用了')
    //     if(constext.state.sum%2){
    //         constext.commit('JIA',value)
    //     }
    // },
    jiaWait(constext,value){
        console.log('actions中的jiaWait被调用了',constext)
        console.log('value',value)
        setTimeout(() => {
            constext.commit('JIA',value)
        }, 1000);
       
    }
}
// 准备mutation---用与操作数据（修改state中的数据） 类似于vue中的methods
const mutations = {
    JIA(state,value){
        console.log('JIA----state',state)
        console.log('JIA----value',value)
        state.sum += value
    },
    JIAN(state,value){
        console.log('JIAN----state',state)
        console.log('JIAN----value',value)
        state.sum -= value
    }
}
// 准备state---用于存放数据 类似于vue中的data
const state = {
    sum:0,//显示的数字
    school:'名字大学',//学校名称'
    subject:'语文'//科目名称',
}
// getters---用于获取state中的数据进行处理state中的数据 类似于computed
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
// 创建vuex实例 创建store 创建并导出store 
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
// 导出store 使用时直接import store
// export default store
