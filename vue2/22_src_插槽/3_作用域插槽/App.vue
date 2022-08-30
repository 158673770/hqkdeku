<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-07 16:44:48
 * @LastEditors: hqk
-->
<template>
  <div class="container">
		<Category title="games">
        <template slot-scope="games">
              <li v-for="(list,index) in games.games" :key="index">
                  {{ list }}
              </li>
        </template>
    </Category>
		<Category title="games">
        <template slot-scope="{games}">
            <ol style="color:salmon" v-for="(list,index) in games" :key="index">
                {{ list }}
            </ol>
        </template>
    </Category>
		<Category title="games">
        <template slot-scope="{games}">
              <h4 style="color:orange" v-for="(list,index) in games" :key="index">
                  {{ list }}
              </h4>
        </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';
// import axios from 'axios'

export default {
    name: "App",
    components: { Category },
   
}
</script>
<style>
.container{
  display: flex;
  justify-content: space-around;
}
.footer{
  text-align: center;
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>