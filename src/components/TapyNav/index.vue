<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-18 17:29:30
 * @LastEditTime: 2022-08-01 09:01:15
 * @LastEditors: hqk
-->
<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <!-- 移出事件委派 -->
            <div @mouseleave="leaveIndex" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <!-- 三级联动 -->
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <!-- 点击事件委派路由跳转 -->
                        <!-- 利用事件委派+编程式导航实现路由跳转与参数传递 -->
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                                :class="{ cur: currentindex == index }">
                                <h3 @mouseenter="changeIndex(index)">
                                    <!-- 使用了节流方法router-link会出现卡顿现象只能使用编程式导航 -->
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                                </h3>
                                <!-- 二三级分类 -->
                                <div class="item-list clearfix" :style="{ display: currentindex == index ? 'block' : 'none' }">
                                    <div class="subitem" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
// 引入方式：是把lodash的所有函数引入
// import _ from 'lodash'
// lodash按需加载使用
import throttle from 'lodash/throttle'
export default {
    name: 'TapyNav',
    data() {
        return {
            //储存用户鼠标移上哪个一级分类
            currentindex: -1,
            show:true
        }
    },
    // 组件挂载完毕，可以向服务器发请求
    mounted() {
        // 当组件挂载完毕，让show的属性变成false
        // 如果不是home路由组件，将typeNav隐藏
        if(this.$route.path!='/home'){
            this.show = false
        }
    },
    computed: {
        ...mapState({
            // 对象写法右侧需要一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
            // 注入一个参数state,其实即为大仓库的数据 
            categoryList: (state) => {
                return state.home.categoryList
            }
        })
    },
    methods: {
        // 鼠标进入
        // changeIndex(index){
        //     this.currentindex = index
        // },
        // 节流的方法回调别用箭头函数
        changeIndex:throttle(function (index) {
            this.currentindex = index
        }, 50),
        // 进行路由跳转的方法
        goSearch(event){
            // 每个a标签不用添加点击事件最好的解决方法是：编程式导航+ 事件委派
            // 利用事件委派存在一些问题：1：点击是否一定是a标签，
            // 点击a标签的时候，才会进行路由跳转{怎么确定点击的一定是a标签}
            // 存在如何获取参数

            // 第一个问题：把子节点当中a标签，加上自定义属性date-categoryName
            // this.$router.push('/search')
            let element = event.target
            // element.dataset方法获取带有data-categoryName属性的属性值
            let {categoryname,category1id,category2id,category3id} = element.dataset
            console.log("categoryname",category1id)
            // 判断1,2,3级导航
            if(categoryname){
                let location = {name:'Search'}
                let query = {categoryName:categoryname}
                // 整理多级参数
                if(category1id){
                    query.category1Id = category1id
                }else if(category2id){
                    query.category2Id = category2id
                }else{
                    query.category3Id = category3id
                }
                // 如果路由跳转的时候，带有params参数顺带传过去
                // 整理完参数
                if(this.$route.params){
                    location.params = this.$route.params
                    location.query = query
                    console.log("location",location)
                }
                // 路由跳转
                this.$router.push(location)
            }

        },
        // 当鼠标移入的时候，让商品分类列表进行展示
        enterShow(){
            this.show = true
        },
        // 鼠标移除
        leaveIndex() {
            this.currentindex = -1
            if(this.$route.path!='/home'){
                this.show = false
            }
        },
    }
}
</script>

<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }

                .cur {
                    background: salmon;
                }
            }
        }
        // 过度动画的样式
        // 过度动画开始状态
        .sort-enter{
            height: 0;
            // transform: rotate(0deg);
        }
        // 过度动画结束状态
        .sort-enter-to{
            height:461px;
            // transform: rotate(360deg);
        }
        .sort-enter-active{
            transition: all .5s linear;
        }
    }
}
</style>