/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 14:56:51
 * @LastEditTime: 2022-07-12 16:14:35
 * @LastEditors: hqk
 */
// 该文件用于创建整个应用的路由
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
// 创建路由对象
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'About',
            path:'/about',
            component:About,
            meta:{title:'关于',isAuth:true}
        },
        {
            name:'Home',
            path:'/home',
            component:Home,
            meta:{title:'首页'},
            children:[
                {
                    name:'News',
                    path:'news',
                    component:News,
                    meta:{title:'新闻',isAuth:true},
                    // 独享路由守卫
                    beforeEnter(to,from,next){
                        console.log('beforeEnter')
                        if(to.meta.isAuth){//判断是否需要整权
                            if(localStorage.getItem('school') === 'xuexivue'){
                                next()
                            }else{
                                alert('请先登录')
                            }
                        }else{
                            next()
                        }
                        // next()
                    }
                },
                {
                    name:'Message',
                    path:'message',
                    component:Message,
                     meta:{title:'消息',isAuth:true},
                    children:[
                        {
                            name:'Detail',
                            path:'detail',
                            meta:{title:'详情',isAuth:true},
                            component:Detail,
                            // props第一种写法
                            // props:{a:1,b:'hello'}
                            // props第二种写法 布尔值为真，则会自动把路径中的params的参数作为props传递给组件
                            // props:true
                            // props第三种写法 布尔值为假，则不会自动把路径中的params的参数作为props传递给组件
                            // props($route){
                            //     return { 
                            //         id:$route.query.id,
                            //         title:$route.query.title
                            //     }
                            // }
                        }
                    ]
                }
            ]
        },
    ]
})

// 全局前置路由守卫---初始化的时候被调用，每次切换路由之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log('初始化前置守卫')
//     console.log(to)
//     console.log(from)
//     if(to.meta.isAuth){//判断是否需要整权
//         if(localStorage.getItem('school') === 'xuexivue'){
//             next()
//         }else{
//             alert('请先登录')
//         }
//     }else{
//         next()
//     }
// })
// 全局后置路由守卫---初始化的时候被调用，每次切换路由之后被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title  || '首页'
    console.log('初始化后置守卫')
})
export default router