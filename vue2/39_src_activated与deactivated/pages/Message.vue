<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 17:23:55
 * @LastEditTime: 2022-07-12 10:51:24
 * @LastEditors: hqk
-->
<template>
  <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
            <!-- 跳转路由携带params参数，字符串写法-->
                <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{ item.title }}</router-link>&nbsp;&nbsp; -->
            <!-- 跳转路由携带params参数，对象写法params只能写name不能写path-->
                <router-link :to="{
                    name:'Detail',
                    query:{
                        id:item.id,
                        title:item.title
                    }
                }">
                {{ item.title }}
                </router-link>
                <button @click="pushShow(item)">push查看</button>
                <button @click="replaceShow(item)">replace查看</button>
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
    },
    methods:{
        pushShow(item){
            // console.log(this.$router)
            this.$router.push({
                name:'Detail',
                query:{
                    id:item.id,
                    title:item.title
                }
            })
        },
        
        replaceShow(item){
            // console.log(this.$router)
            this.$router.replace({
                name:'Detail',
                query:{
                    id:item.id,
                    title:item.title
                }
            })
        }
    },
    beforeDestroy(){
        console.log('Message页面销毁')
    },
}
</script>