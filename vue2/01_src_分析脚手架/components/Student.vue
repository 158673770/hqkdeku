<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 10:34:28
 * @LastEditTime: 2022-06-28 10:38:18
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生姓名：{{ age }}</h2>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return{
            name:'张三',
            age:18
        }
    }
}
</script>

<style>

</style>