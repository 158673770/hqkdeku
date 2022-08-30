<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-08 08:46:58
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
   
}
</script>