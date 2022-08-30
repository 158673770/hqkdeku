<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:28:07
 * @LastEditTime: 2022-06-29 10:04:57
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <div>
    <h1>
        {{ msg }}
    </h1>
    <h2>
        学生名称：{{myName}}
    </h2>
    <h2>
        学生性别：{{ mysex }}
    </h2>
    <h2>
        学生年龄：{{ myage+1 }}
    </h2>
    <button @click="csxg">尝试修改</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return{
            msg:'测试表头',
            myName:this.name,
            myage:this.age,
            mysex:this.sex,
        }
    },
    // props:['name','sex','age'], //简单接收
    // 限制类型
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }
    // 类型限制-默认值指定-必要性的限制
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        },
    },
    methods:{
        csxg(){
            this.myage++
        }
    }
}
</script>
