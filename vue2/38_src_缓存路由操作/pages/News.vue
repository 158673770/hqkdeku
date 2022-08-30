<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 17:25:30
 * @LastEditTime: 2022-07-12 10:45:39
 * @LastEditors: hqk
-->
<template>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    beforedestroy(){
        console.log('beforedestroy')
    },
}
</script>

<style>

</style>