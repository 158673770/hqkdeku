<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 14:47:54
 * @LastEditTime: 2022-07-12 15:36:32
 * @LastEditors: hqk
-->
<template>
  <h2>
    我是About的内容
  </h2>
</template>

<script>
export default {
    name:'About',
    // 组件被销毁
    // beforeDestroy(){
    //     console.log('About销毁了')
    // },
    // 组件被挂载
    mounted(){
        // console.log('About被挂载了')
        window.aboutRoute = this.$route
        window.aboutRouter = this.$router
    },
    // 通过路由规则，进入组件之前路由更新时被调用
    beforeRouteEnter(to, from, next){
      console.log('About进入之前路由更新时被调用')
      if(to.meta.isAuth){//判断是否需要整权
          if(localStorage.getItem('shool') === 'xuexivue'){
              next()
          }else{
              alert('请先登录')
          }
      }else{
          next()
      }
    },
    // 通过路由规则，离开该组件时路由离开时被调用
    beforeRouteLeave(to, from, next){
        console.log('About离开了')
        next()
    } 
}
</script>

<style>

</style>