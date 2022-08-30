<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-06 16:28:54
 * @LastEditTime: 2022-07-07 09:21:58
 * @LastEditors: hqk
-->
<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" 
     v-for="user in info.userList"
     v-show="info.userList.length"  
     :key="user.login">
        <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h2 v-show="info.isFirst">欢迎使用</h2>
    <!-- 展示加载中 -->
    <h2 v-show="info.isLoading">数据加载中........</h2>
    <!-- 展示错误信息 -->
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
</div>
</template>

<script>
export default {
    name:'List',
    data(){
        return{
            info:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
                userList:[]
            }
        }
    },
    mounted(){
        this.$bus.$on('updataListData',(dataObj)=>{
          console.log('updataListData',dataObj)
            this.info = {...this.info,...dataObj}
            // this.userList = users
            // this.isFirst = false
            // console.log('this.userList',this.userList)
        })
    }
}
</script>

<style scoped>

.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>