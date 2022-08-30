<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-06 14:27:11
 * @LastEditTime: 2022-07-06 14:50:56
 * @LastEditors: hqk
-->
<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-06 13:51:06
 * @LastEditTime: 2022-07-06 14:24:14
 * @LastEditors: hqk
-->
<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-06 13:29:37
 * @LastEditTime: 2022-07-06 13:47:47
 * @LastEditors: hqk
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" appear>
        <h1 v-show="isShow">
        你好啊
        </h1>
    </transition> -->
    <transition-group 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
     >
        <h1 v-show="!isShow" key="1">
        你好啊
        </h1>
        <h1 v-show="isShow" key="2">
        撒玩意
        </h1>
    </transition-group>
    <!-- <h1 v-show="isShow" class="come">
        你好啊
    </h1> -->
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background: red;
    }
    
    
</style>