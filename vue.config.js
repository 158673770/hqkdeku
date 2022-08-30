/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-13 15:15:58
 * @LastEditTime: 2022-08-29 10:50:01
 * @LastEditors: hqk
 */
/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-28 11:36:28
 * @LastEditTime: 2022-07-06 16:11:47
 * @LastEditors: hqk
 */
module.exports = {
    // pages: {
    //   index: {
    //     //的入口
    //     entry: 'src/main.js',
    //   },
    // },
    // 打包的时候去除map文件
    productionSourceMap:false,
    lintOnSave:false,  //关闭语法检查
    // 开启代理服务器（方式一）
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // },
    // 开启代理服务器（方式二）
    devServer:{
        proxy:{
          '/api': {
            target: 'http://gmall-h5-api.atguigu.cn',
            // pathRewrite: {
            //   '^/api': ''
            // },//重写路径路径上有api就不需要从写了
        }
      }
    }
    // devServer: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:5000',
    //       pathRewrite: {
    //         '^/gtguigu': ''
    //       },//重写路径
    //       // ws: true,//用于支持websocket
    //       // changeOrigin: true//用于控制请求头中的host是否发生变化
    //     },
    //     '/demo': {
    //       target: 'http://localhost:5001',
    //       pathRewrite: {
    //         '^/demo': ''
    //       },//重写路径
    //       // ws: true,//用于支持websocket
    //       // changeOrigin: true//用于控制请求头中的host是否发生变化
    //     },
    //   }
    // }
  }