<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:28:07
 * @LastEditTime: 2022-06-29 10:35:57
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <div>
    <h2 @click="showname">
        学生名称：{{myName}}
    </h2>
    <h2>
        学生性别：{{ mysex }}
    </h2>
  </div>
</template>

<script>
// 引入混合
import {hunhe,hunhe2} from '../mixin'
export default {
    name: 'Student',
    data(){
        return{
            myName:'张三',
            mysex:'男',
        }
    },
    mixins:[    //混合
        hunhe,
        hunhe2
    ],
    mounted(){
        console.log('测试组件mounted')
    },
}
</script>
