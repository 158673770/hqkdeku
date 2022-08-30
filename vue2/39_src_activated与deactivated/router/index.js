/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 14:56:51
 * @LastEditTime: 2022-07-12 10:28:13
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
export default new VueRouter({
    routes:[
        {
            name:'About',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'Detail',
                            path:'detail',
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