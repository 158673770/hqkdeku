/*
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 10:52:17
 * @LastEditTime: 2022-06-29 11:34:12
 * @LastEditors: 【大白菜】2601779853@qq.com
 */
export default{
    install(Vue){
        console.log("@@@install",Vue)
        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        // 定义全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时
            bind(element,binding){
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element){
                element.focus()
            },
            // 指令所在的模板重新解析时
            update(element){
                element.value = element
            }
        })
        // 定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })
        // 给vue原型上添加一个方法
        Vue.prototype.hello = ()=>{
            // console.log('demo')
            alert('你好啊')
        }
    }
}
