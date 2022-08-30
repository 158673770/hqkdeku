<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 15:16:43
 * @LastEditTime: 2022-07-12 10:39:19
 * @LastEditors: hqk
-->
<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="text">测试go</button>
  </div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      text(){
        this.$router.go(-2)
      }
    }
}
</script>

<style>

</style>