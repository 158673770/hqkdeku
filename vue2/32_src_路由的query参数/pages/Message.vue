<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 17:23:55
 * @LastEditTime: 2022-07-12 09:17:37
 * @LastEditors: hqk
-->
<template>
  <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
            <!-- 跳转路由携带query参数，字符串写法-->
                <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{ item.title }}</router-link>&nbsp;&nbsp; -->
            <!-- 跳转路由携带query参数，对象写法-->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id:item.id,
                        title:item.title
                    }
                }">
                {{ item.title }}
                </router-link>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script> 
export default {
    name:'Message',
    data(){
        return{
            messageList:[{
                id:1,
                title:'message001'
            },{
                id:2,
                title:'message002'
            },{
                id:3,
                title:'message003'
            }]
        }
    }
}
</script>