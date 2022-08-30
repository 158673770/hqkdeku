/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-27 14:17:55
 * @LastEditTime: 2022-08-24 09:05:53
 * @LastEditors: hqk
 */
/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-19 16:22:43
 * @LastEditTime: 2022-07-20 13:58:23
 * @LastEditors: hqk
 */
// 对于axios进行二次封装 加上了请求拦截器和响应拦截器
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// console.log(nprogress)
// 1：利用axios对象方法create()创建一个axios实例
// 2: request就是axios ，只是把axios的实例传递给了request进行配置
const request = axios.create({
    // 配置对象
    // 基础路径，发请求的时候会自动拼接 /api
    baseURL:'/mock',
    // 代表请求超时的时间5s
    timeout:5000
})
// 请求拦截器：在发送请求之前，请求拦截器会被检测到，可以在请求发送之前做一些配置
request.interceptors.request.use((config) => {
    // config:配置对象，对象里面有一个参数，headers，表示请求头
    nprogress.start()
    return config;
})
// 响应拦截器：
request.interceptors.response.use(
    // 成功的回调函数：服务器返回的数据，响应拦截器会被检测到，可以在响应拦截器中做一些配置与操作
    (res)=>{
        nprogress.done()
    return res.data;
},(error)=>{
    // 失败的回调函数：服务器返回的错误信息
    // 终止函数的执行
    return Promise.reject();
})


// 对外暴露
export default request;