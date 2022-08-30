<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-07 10:04:00
 * @LastEditTime: 2022-07-07 16:34:22
 * @LastEditors: hqk
-->
<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 自定义插槽在父组件中写入标签slot接收 -->
    <slot :games="games">
        我是插槽里面的默认值
    </slot>
    <!-- <ul>
        <li v-for="(list,index) in listData" :key="index">
            {{ list }}
        </li>
    </ul> -->
    
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
     data(){
      return{
        games:['王者荣耀','绝地求生','穿越火线'],
      }
    }
}
</script>

<style scoped>
h3{
    background: orange;
    text-align: center;
}
.category{
    width:200px;
    height:300px;
    background-color:red;
}
img{
    width: 100%;
}
video{
    width: 100%;
}
</style>