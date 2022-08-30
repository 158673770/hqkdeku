<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 10:09:20
 * @LastEditTime: 2022-06-29 10:35:58
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:28:07
 * @LastEditTime: 2022-06-29 10:07:15
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <div>
    <h2 @click="showname">
        学校名称：{{myName}}
    </h2>
    <h2>
        学校地址：{{ address }}
    </h2>
  </div>
</template>

<script>
// 引入混合
import {hunhe,hunhe2} from '../mixin'
export default {
    name: 'School',
    data(){
        return{
            myName:'南昌大学',
            address:'江西南昌',
        }
    },
    mixins:[    //混合
        hunhe,
        hunhe2
    ],
}
</script>
