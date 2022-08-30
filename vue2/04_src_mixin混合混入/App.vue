<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:24:38
 * @LastEditTime: 2022-06-29 10:12:48
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
    <div>
        <School/>
        <hr>
        <Studnt/>
        <!-- <Studnt name='王五' age='16' sex='男'/> -->
    </div>
</template>

<script>
import Studnt from './components/Studnt';
import School from './components/School.vue';

export default {
    name: "App",
    components: { Studnt, School },

}
</script>
