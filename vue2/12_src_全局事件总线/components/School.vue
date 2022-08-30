<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-30 13:32:12
 * @LastEditTime: 2022-07-04 13:27:01
 * @LastEditors: hqk
-->

<template>
  <div class="demo">
    <h2>
        学校名称：{{myName}}
    </h2>
    <h2 class="qwe">
        学校地址：{{ address }}
    </h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return{
            myName:'南昌大学nanchangdaye',
            address:'江西南昌',
        }
    },
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log("兄弟组件通讯。我是数据",data);
        });
    },
    
    beforeDestroy(){
        this.$bus.$off('hello');
    }
}
</script>
<style lang="less" scoped>
    .demo{
        background-color: #f00;
    }
</style>