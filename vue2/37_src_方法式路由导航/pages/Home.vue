<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 14:48:08
 * @LastEditTime: 2022-07-12 10:35:19
 * @LastEditors: hqk
-->
<template>
  <div>
    <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link>
            <!-- <a  href="./home-news.html"></a> -->
          </li>
          <li>
            <router-link  class="list-group-item" active-class="active" to="/home/message">nessage</router-link>
            <!-- <a class="list-group-item " href="./home-message.html">Message</a> -->
          </li>
        </ul>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'Home',
    // 组件被销毁
    // beforeDestroy(){
    //     console.log('Home销毁了')
    // },
    // 组件被挂载
    // mounted(){
    //     window.HomeRoute = this.$route
    //     window.HomeRouter = this.$router
    // }
}
</script>

<style>

</style>