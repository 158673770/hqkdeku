<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-29 13:30:34
 * @LastEditTime: 2022-08-30 09:40:04
 * @LastEditors: hqk
-->
<template>
  <ul>
    <li v-for="(todo,index) in data" :key="index">
       <!-- 坑：熊孩子挖到坑，父亲填坑 -->
       <!-- 数据来源于父亲：但是子组件决定不了结构与外网-->
       <slot :todo="todo" :index="index "></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List1',
  props: {
    data: Array
  }
}
</script>