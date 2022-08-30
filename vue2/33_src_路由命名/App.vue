<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-05 13:29:59
 * @LastEditTime: 2022-07-12 09:23:23
 * @LastEditors: hqk
-->
<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
            <Banner/>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- <a class="list-group-item active" href="./about.html">About</a>
            <a class="list-group-item" href="./home.html">Home</a> -->
            <router-link class="list-group-item" active-class="active" :to="{name:'About'}">About</router-link>
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
                <!-- 指定组件的呈现位置 -->
                <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
// import axios from 'axios'

export default {
    name: "App",
    mounted() {
        console.log("App", this);
    },
    components: { Banner }
}
</script>