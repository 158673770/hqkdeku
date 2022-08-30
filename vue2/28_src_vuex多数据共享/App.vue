<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-11 09:03:22
 * @LastEditors: hqk
-->
<template>
  <div class="container">
		<Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count.vue';
import Person from './components/Person.vue';
// import axios from 'axios'

export default {
    name: "App",
    components: { Count, Person },
    mounted(){
      console.log('App',this)
    }
}
</script>