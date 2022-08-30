<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-12 09:00:51
 * @LastEditTime: 2022-07-12 10:27:07
 * @LastEditors: hqk
-->
<template>
    <ul>
        <li>
            消息编号：{{ this.$route.query.id }}
        </li>
        <li>
            消息标题：{{ this.$route.query.title }}
        </li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    // props:['id','title'],
    mounted(){
        console.log(this.$route)
    }
}
</script>

<style>

</style>