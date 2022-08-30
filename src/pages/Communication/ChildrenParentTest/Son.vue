<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-29 13:30:34
 * @LastEditTime: 2022-08-30 09:25:15
 * @LastEditors: hqk
-->
<template>
  <div style="background: #ccc; height: 50px;">
    <h3>儿子小明: 有存款: {{money}}</h3>
    <button @click="geiQian(50)">给BABA钱: 50</button>
  </div>
</template>

<script>
  // 外部引入的函数
import myMixin from './myMixin/myMixin';
export default {
  name: 'Son',
  // mixins 调用外部引入的函数
  mixins:[myMixin],
  data () {
    return {
      money: 30000
    }
  },

  methods: {
    tinghua(){
        console.log('我是小明，我听爸爸的话');
    },
   
  }
}
</script>
