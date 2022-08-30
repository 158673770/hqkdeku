<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 10:09:20
 * @LastEditTime: 2022-06-29 11:45:03
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
    <h2>
        学校名称：{{myName | mySlice}}
    </h2>
    <h2>
        学校地址：{{ address }}
    </h2>
    <button @click="test">点击测试</button>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return{
            myName:'南昌大学nanchangdaye',
            address:'江西南昌',
        }
    },
    methods:{
        test(){
            console.log('测试')
            this.hello()
        }
    },
}
</script>
