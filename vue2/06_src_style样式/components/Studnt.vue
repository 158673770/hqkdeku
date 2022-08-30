<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:28:07
 * @LastEditTime: 2022-06-29 13:17:52
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <div class="demo">
    <h2 class="title">
        学生名称：{{myName}}
    </h2>
    <h2>
        学生性别：{{ mysex }}
    </h2>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return{
            myName:'张三',
            mysex:'男',
        }
    }
}
</script>
<style scoped>
    .demo{
        background-color: #ccc;
        padding: 10px;
    }
</style>