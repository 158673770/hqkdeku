<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-18 09:22:26
 * @LastEditTime: 2022-08-22 11:30:18
 * @LastEditors: hqk
-->
<template>
  <div>
    <!-- 三级联动全局组件:三级联动已经注册为全局组件，不需要在引入 -->
    <TapyNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :floor="floor" :key="floor.id"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
// 引入vuex
import { mapState } from 'vuex';
// 引入其余组件

export default {
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  },
  mounted() {
    // 派发action，获取floor组件数据
    this.$store.dispatch("getFloorList")
  }

}
</script>

<style>
</style>