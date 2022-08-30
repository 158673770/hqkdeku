/*
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 10:14:03
 * @LastEditTime: 2022-06-29 10:28:37
 * @LastEditors: 【大白菜】2601779853@qq.com
 */
 export const hunhe ={
    methods:{
        showname(){
            alert(this.myName)
        }   
    },
    mounted(){
        console.log('测试mounted')
    }
}
export const hunhe2 ={
    data(){
        return{
            x:100,
            y:200
        }
    }
}