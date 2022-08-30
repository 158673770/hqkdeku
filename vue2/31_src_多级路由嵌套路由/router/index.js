/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-11 14:56:51
 * @LastEditTime: 2022-07-11 17:30:12
 * @LastEditors: hqk
 */
// 该文件用于创建整个应用的路由
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
// 创建路由对象
export default new VueRouter({
    routes:[
        {
            path:'/About',
            component:About
        },
        {
            path:'/Home',
            component:Home,
            children:[
                {
                    path:'News',
                    component:News
                },
                {
                    path:'Message',
                    component:Message
                }
            ]
        },
    ]
})