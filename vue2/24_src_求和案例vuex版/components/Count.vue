<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-07 10:04:00
 * @LastEditTime: 2022-07-08 10:43:10
 * @LastEditors: hqk
-->
<template>
  <div class="category">
    <!-- 获取vuex中state中的sum变量 -->
    <h3>当前求和为：{{ $store.state.sum }}</h3>
    <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
     data(){
      return{
        n:1,//用户输入的数字
      }
    },
    methods:{
      increment(){
        // this.$store.dispatch('jia',this.n);
        // this.$store.state.sum += this.n;
        this.$store.commit('JIA',this.n);
      },
      decrement(){
        // this.$store.dispatch('jian',this.n);
        // this.$store.state.sum -= this.n;
        this.$store.commit('JIAN',this.n);
      },
      incrementOdd(){
        
          this.$store.dispatch('jiaOdd',this.n);
      },
      incrementWait(){
       
          this.$store.dispatch('jiaWait',this.n);
      }
    }
}
</script>

<style scoped>
  button{
    margin:10px;
  }
</style>