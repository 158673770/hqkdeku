<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 14:47:54
 * @LastEditTime: 2022-07-11 15:29:49
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
        console.log('About被挂载了')
        window.aboutRoute = this.$route
        window.aboutRouter = this.$router
    }
}
</script>

<style>

</style>