<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-13 14:58:21
 * @LastEditTime: 2022-08-26 10:40:44
 * @LastEditors: hqk
-->
<template>
  <div id="app">
    <!-- <h1 v-upper="msg"></h1> -->
    <Header/>
    <!-- 路由组件出口的地方 -->
    <router-view/>
    <!-- 在home·search显示的，在登录，注册隐藏 -->
    <!-- v-show="$route.path== '/home' || $route.path=='/search'" -->
    <!-- 路由中配置meat属性控制底部显示与隐藏 -->
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  data(){
    return{
      msg:'abc'
    }
  },
  components: {
      Header,
      Footer
  },
  mounted(){
      // 通过vuex发请求，获取数据，储存于仓库中
      // console.log('组件挂载完毕，可以向服务器发请求',this.$store);
      // 派发一个action || 获取商品分类的三级列表
      this.$store.dispatch("categoryList")
  }
}
</script>

