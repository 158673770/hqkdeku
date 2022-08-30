<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-18 08:54:26
 * @LastEditTime: 2022-08-25 10:23:09
 * @LastEditors: hqk
-->
<template>
  <!-- 头部 -->
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p v-if="!userName">
                            <span>请</span>
                            <!-- 声明试导航 -->

                            <router-link to="/login">登录</router-link>
                            <router-link to="/register">注册</router-link>
                        </p>
                        <p v-else>
                            <a >{{ userName }}</a>
                            <a @click="logout">退出登录</a>
                        </p>
                    </div>
                    <div class="typeList">
                        <router-link to="/center/myoder">我的订单</router-link>
                        <router-link to="/shopcart">我的购物车</router-link>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/home">
                        <img src="./images/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" v-model="keyword" class="input-error input-xxlarge" />
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            keyword:'',
        }
    },
    computed:{
        // 用户名信息
        userName(){
            return this.$store.state.user.userInfo.name;
        }
    },  
    methods:{
        goSearch(){
            // console.log('搜索')
            // 点击按钮路由跳转
            // 路由传值第一种方法
            // this.$router.push("/Search/" + this.keyword + "?k=" + this.keyword.toUpperCase())
            // 路由传值第二种方法
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
            // 路由传值第三种方法
            // 如果有query参数带query参数，params参数赋值
            if(this.$route.query){
                let location = {
                    name: 'Search',
                    params: {
                        keyWord: this.keyword || undefined
                    },
                }
                location.query = this.$route.query
                this.$router.push(location)
            }

            // this.$router.push({
            //         name: 'search',
            //             params: {
            //                 keyWord: this.keyword || undefined
            //             },
            //     },
            //     // 解决连续点击搜索按钮，报错的问题
            //     (cg)=>{
            //         console.log('路由跳转成功')
            //     },(sb)=>{
            //         console.log('路由跳转失败')
            //     })
        },
        // 退出登录logout
       async logout(){
            try {
                // 发请求通知服务器退出登录 ， 清除token
                // 清除项目当中的数据【userInfo,token】
                await this.$store.dispatch('userLogout');
                this.$router.push('/home')
            } catch (error) {
                
            }
        }
    },
    mounted(){
        // 通过全局事件总线清除关键字
        this.$bus.$on('clear',()=>{
            this.keyword = ''
        })

    }
}
</script>

<style scoped lang="less">
     .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }

</style>