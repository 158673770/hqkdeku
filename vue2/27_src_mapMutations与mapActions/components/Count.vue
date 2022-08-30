<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-07 10:04:00
 * @LastEditTime: 2022-07-08 17:18:25
 * @LastEditors: hqk
-->
<template>
  <div class="category">
    <!-- 获取vuex中state中的sum变量 -->
    <h3>当前求和为：{{ sum }}</h3>
    <h3>当前求和放大10倍：{{ bigSum }}</h3>
    <h3>我再{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
    name:'Category',
     data(){
      return{
        n:1,//用户输入的数字
      }
    },
    computed:{
      
      // ...mapState({sum:'sum',school:'school',subject:'subject'}),
      ...mapState(['sum','school','subject']),
      // ...mapGetters({bigSum:'bigSum'})
      ...mapGetters(['bigSum'])
    },
    methods:{
      // 自己定义的方法
      // increment(){
      //   // this.$store.dispatch('jia',this.n);
      //   // this.$store.state.sum += this.n;
      //   this.$store.commit('JIA',this.n);
      // },
      // decrement(){
      //   // this.$store.dispatch('jian',this.n);
      //   // this.$store.state.sum -= this.n;
      //   this.$store.commit('JIAN',this.n);
      // }, 
      // 借助mapMutations方法，实现increment和decrement方法对象写法
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),
      // 借助mapMutations方法，实现increment和decrement方法数组写法
      // ...mapMutations(['increment','decrement']),
      // incrementOdd(){
      //     this.$store.dispatch('jiaOdd',this.n);
      // },
      // incrementWait(){
      //     this.$store.dispatch('jiaWait',this.n);
      // }
      // 借助mapActions方法，实现incrementOdd和incrementWait方法对象写法
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
      // 借助mapActions方法，实现incrementOdd和incrementWait方法数组写法
      // ...mapActions(['incrementOdd','incrementWait'])
    },
    mounted(){
      console.log('Count',this.$store)
      const x = mapState({})
    }
}
</script>

<style scoped>
  button{
    margin:10px;
  }
</style>