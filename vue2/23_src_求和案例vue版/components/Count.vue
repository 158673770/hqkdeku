<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-07 10:04:00
 * @LastEditTime: 2022-07-08 08:54:14
 * @LastEditors: hqk
-->
<template>
  <div class="category">
    <h3>当前求和为：{{ sum }}</h3>
    <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">1</option>
        <option :value="3">1</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWaid">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
     data(){
      return{
        n:1,//用户输入的数字
        sum:0//显示的数字
      }
    },
    methods:{
      increment(){
        this.sum+=this.n;
      },
      decrement(){
        this.sum-=this.n;
      },
      incrementOdd(){
        if(this.sum%2){
          this.sum+=this.n;
        }
      },
      incrementWaid(){
        setTimeout(()=>{
          this.sum+=this.n;
        },1000)
      }
    }
}
</script>

<style scoped>
  button{
    margin:10px;
  }
</style>