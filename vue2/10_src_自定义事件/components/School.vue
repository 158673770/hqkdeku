<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-30 13:32:12
 * @LastEditTime: 2022-07-01 13:27:50
 * @LastEditors: hqk
-->

<template>
  <div class="demo">
    <h2>
        学校名称：{{myName}}
        <button  @click="clickShoolName">学校名给app</button>
    </h2>
    <h2 class="qwe">
        学校地址：{{ address }}
        <button  @click="sendShoolName">学校名给app</button>
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
    props:['getShoolName'],
    methods:{
        clickShoolName(){
            this.getShoolName(this.myName);
        },
        sendShoolName(){
            this.getShoolName(this.address);
        }
    },
}
</script>
<style lang="less" scoped>
    .demo{
        background-color: #f00;
    }
</style>