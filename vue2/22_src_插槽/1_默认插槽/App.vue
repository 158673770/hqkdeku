<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-07 13:49:10
 * @LastEditors: hqk
-->
<template>
  <div class="container">
		<Category title="美食">
        <img src="https://s3.ax1x.com/2021/01/16/srJq0.jpg" alt="">
    </Category>
		<Category title="游戏">
        <ul>
            <li v-for="(list,index) in games" :key="index">
                {{ list }}
            </li>
        </ul>
    </Category>
		<Category title="电影">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from '../components/Category.vue';
// import axios from 'axios'

export default {
    name: "App",
    components: { Category },
    data(){
      return{
        foods:['面包','蛋糕','西瓜','苹果'],
        games:['王者荣耀','绝地求生','穿越火线'],
        films:['美国队长','美国队长2','美国队长3'],
      }
    }
}
</script>
<style>
.container{
  display: flex;
  justify-content: space-around;
}
</style>