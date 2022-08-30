/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-08 09:13:48
 * @LastEditTime: 2022-08-29 14:55:44
 * @LastEditors: hqk
 */

// 引入路由组件
// import Home from "@/pages/Home";
// import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import Paysuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOder from '@/pages/Center/MyOder'
import GroupOder from '@/pages/Center/groupOder'

// 
// const foo = ()=>import('@/pages/Home')


export default [
    {
        path:"/center",
        // name:"ShopCart",
        component:Center,
        meta:{show : true},
        children:[
            {
                path:'myoder',
                component:MyOder
            },
            {
                path:'groupoder',
                component:GroupOder
            },
            {
                path:'/center',
                // 加入路由跳转到/center 默认重定向至/center/myoder
                redirect:'/center/myoder'
            }
        ]
    },
    {
        path:"/paysuccess",
        // name:"ShopCart",
        component:Paysuccess,
        meta:{show : true}
    },
    {
        path:"/pay",
        // name:"ShopCart",
        component:Pay,
        meta:{show : true},
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            if(from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:"/trade",
        // name:"ShopCart",
        component:Trade,
        meta:{show : true},
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            // 去交易页面，必须是从购物车而来
            if(from.path == '/ShopCart'){
                next();
            }else{
                // 其它组件而来，停留在当前页面
                next(false);
            }
        }
    },
    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
          {
            path: 'event',
            component: () => import('@/pages/Communication/EventTest/EventTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'model',
            component: () => import('@/pages/Communication/ModelTest/ModelTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'sync',
            component: () => import('@/pages/Communication/SyncTest/SyncTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'attrs-listeners',
            component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'children-parent',
            component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'scope-slot',
            component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
            meta: {
              isHideFooter: true
            },
          }
        ],
      },
    {
        path:"/shopcart",
        // name:"ShopCart",
        component:ShopCart,
        meta:{show : true}
    },
    {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:AddCartSuccess,
        meta:{show : true}
    },
    {
        path:"/detail/:skuid",
        component:Detail,
        meta:{show : true}
    },
    {
        path:"/home",
        component:()=>import('@/pages/Home'),
        meta:{show : true}
    },
    {
        // params可以获取路由参数 params后面加？号表示可传可不传参数 /search/:keyWord?
        path:"/search/:keyWord?",
        component:()=>import('@/pages/Search'),
        meta:{show : true},
        name:"Search"
    },
    {
        path:"/login",
        component:Login,
        meta:{show : false}
    },
    {
        path:"/register",
        component:Register,
        meta:{show : false}
    },
    // 重定向，当路径不存在时，跳转到首页
    {
        path:"*",
        redirect:"/home"
    }
]