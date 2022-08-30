<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-30 13:32:12
 * @LastEditTime: 2022-07-01 09:18:31
 * @LastEditors: hqk
-->

<template>
    <div class="app">
        <h1>{{ studntName }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现： 子给父组件传递数据 -->
        <School  :getShoolName='getShoolName'/>
        <hr>
        <!-- 通过父组件给子组件绑定个自定义事件实现：子给父组件传递数据(第一种写法@或v-on绑定自定义事件) -->
        <!-- <Studnt @hqk='demo' @chufa='demo2'/> -->
        <!-- 通过父组件给子组件绑定个自定义事件实现：子给父组件传递数据(第二种写法ref绑定自定义事件适用场景数据请求完毕添加事件) -->
        <Studnt  ref='demo' @click.native="show"/>
    </div>
</template>

<script>
import Studnt from './components/Studnt';
import School from './components/School.vue';

export default {
    name: "App",
    components: { Studnt, School },
    data(){
        return{
            msg:'你好啊',
            studntName:''
        }
    },
    methods:{
        getShoolName(name){
            // return '南昌大学nanchangdaye',name;
            console.log('南昌大学nanchangdaye',name)
        },
        demo(val,...params){
            console.log('我是父组件的方法',val,params)
            this.studntName = val
        },
        demo2(val,...params){
            console.log('我是父组件的方法',val,params)
        },
        show(){
            alert('我是子组件的方法')
        }
    },
    mounted(){
        this.$refs.demo.$on('hqk',this.demo);
        // ref取demo添加hqk事件
        // this.$refs.demo.$on('hqk',this.demo);
        // ref取demo添加hqk事件点击一次
        //    this.$refs.demo.$once('hqk',this.demo);
    }
}
</script>
<style>
.app {
    /* font-size: 48px; */
    background-color: orange;
}
</style>