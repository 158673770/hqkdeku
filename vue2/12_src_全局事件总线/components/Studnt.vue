<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-30 13:32:12
 * @LastEditTime: 2022-07-04 13:17:19
 * @LastEditors: hqk
-->

<template>
  <div class="demo">
    <h2 class="title">
        学生名称：{{myName}}
    </h2>
    <h2>
        学生性别：{{ mysex }}
        <button @click="boredclick">兄弟组件之间传值</button>
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
    },
   methods:{
         boredclick(){
            this.$bus.$emit('hello',this.myName);
         },
    },
}
</script>
<style scoped>
    .demo{
        background-color: #ccc;
        padding: 10px;
    }
</style>