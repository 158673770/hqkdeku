<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 10:33:49
 * @LastEditTime: 2022-06-28 10:41:20
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <div class="demo">
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点击提示</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
            name:'测试',
            address:'地址'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    }
    
}
</script>

<style>

</style>