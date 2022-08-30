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
    <transition name="hello" appear>
        <h1 v-show="isShow">
        你好啊
        </h1>
    </transition>
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
    .hello-enter-active{
        animation: isShowdh 1s;
    }
    .hello-leave-active{
        animation: isShowdh 1s reverse;
    }
    @keyframes isShowdh {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>