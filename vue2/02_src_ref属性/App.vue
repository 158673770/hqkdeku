<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:24:38
 * @LastEditTime: 2022-06-28 13:53:16
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点我</button>
        <School ref="sch"/>
    </div>
</template>

<script>
import School from './components/School.vue';

export default {
    name: "App",
    components: { School },
    data(){
        return{
            msg:"Hello Vue!"
        }
    },
    methods:{
        showDOM(){
            console.log(this.$refs.sch);
            // this.$refs.dom.style.color="red";
        }
    }

}
</script>
