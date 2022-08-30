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
    <transition-group name="hello" appear>
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
    /* 进入的起点,离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active,
    .hello-leave-active{
        transition:0.5s linear;
    }
    /* 进入的终点,离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
    
</style>