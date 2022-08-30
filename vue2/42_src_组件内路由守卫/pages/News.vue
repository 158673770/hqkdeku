<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 17:25:30
 * @LastEditTime: 2022-07-12 15:22:50
 * @LastEditors: hqk
-->
<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    data(){
        return{
            a:false,
            opacity:1
        }
    },
    // mounted(){
    //     console.log('mounted',this)
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01
    //         if(this.opacity <= 0) this.opacity = 1
    //     },16)
    // },
    // 将要销毁组件 
    // beforedestroy(){
    //     console.log('beforedestroy')
    //     clearInterval(this.timer)
    // },
    // activated 组件已经激活
    activated(){
        
        this.timer = setInterval(() => {
            // console.log("111")
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        },16)
    },
    // deactivated 组件已经销毁
    deactivated(){
        // console.log('deactivated')
        console.log('deactivated')
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>