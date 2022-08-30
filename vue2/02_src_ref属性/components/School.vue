<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:28:07
 * @LastEditTime: 2022-06-28 13:42:40
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <div class="school">
    <h2>
        学校名称：{{name}}
    </h2>
    <h2>
        学校地址：{{address}}
    </h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return{
            name:"测试名称",
            address:'测试地址'  
        }
    }
}
</script>

<style>
.school{
    background-color: orange;
}
</style>