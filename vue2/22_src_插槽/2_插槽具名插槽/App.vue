<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-07 14:04:39
 * @LastEditors: hqk
-->
<template>
  <div class="container">
		<Category title="美食">
        <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJq0.jpg" alt="">
        <div slot="footer" class="footer">
          <a href="http://baidu.com">美食更多</a>
        </div>
    </Category>
		<Category title="游戏">
        <ul slot="center">
            <li v-for="(list,index) in games" :key="index">
                {{ list }}
            </li>
        </ul>
        <div slot="footer" class="footer">
          <a href="http://baidu.com">单机更多</a>
          <a href="http://baidu.com">网络更多</a>
        </div>
    </Category>
		<Category title="电影">
        <video  slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <template v-slot:footer>
            <div class="footer">
              <a href="http://baidu.com">经典</a>
              <a href="http://baidu.com">热门</a>
              <a href="http://baidu.com">推荐</a>
            </div>
            <h4>欢迎前来观影</h4>
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
.footer{
  text-align: center;
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>