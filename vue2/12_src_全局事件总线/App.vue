<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-30 13:32:12
 * @LastEditTime: 2022-07-01 13:13:10
 * @LastEditors: hqk
-->

<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School/>
        <Studnt/>
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
            }
        },
    }
</script>
<style>
.app {
    /* font-size: 48px; */
    background-color: orange;
}
</style>