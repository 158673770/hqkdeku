<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-06 16:28:33
 * @LastEditTime: 2022-07-06 17:35:39
 * @LastEditors: hqk
-->
<template>
  <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return{
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
            // 请求前更新List的数据
            // this.$bus.$emit('updataListData',false,true,'',[])
            this.$bus.$emit('updataListData',{
                isFirst:false,
                isLoading:true,
                errMsg:'',
                userList:[]
            })
            axios.get('https://api.github.com/search/users?q='+this.keyWord)
            .then(response=>{
                // console.log('请求成功',response.data.items)
                // this.$bus.$emit('updataListData',response.data.items)
                // this.$bus.$emit('updataListData',false,false,'',response.data.items)
                // 请求成功后更新List的数据
                this.$bus.$emit('updataListData',{
                    isLoading:false,
                    errMsg:'',
                    userList:response.data.items
                })
            })
            .catch(error=>{
                console.log('请求失败',error)
                // 请求失败后更新List的数据
                this.$bus.$emit('updataListData',{
                    isLoading:false,
                    errMsg:error.message,
                    userList:[]
                })
            })
        }
    }
}
</script>