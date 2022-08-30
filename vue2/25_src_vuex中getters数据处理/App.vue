<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-08 09:52:33
 * @LastEditors: hqk
-->
<template>
  <div class="container">
		<Count/>
  </div>
</template>

<script>
import Count from './components/Count.vue';
// import axios from 'axios'

export default {
    name: "App",
    components: { Count },
    mounted(){
      console.log('App',this)
    }
}
</script>