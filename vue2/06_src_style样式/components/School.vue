<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 10:09:20
 * @LastEditTime: 2022-06-29 13:29:11
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
  <div class="demo">
    <h2>
        学校名称：{{myName}}
    </h2>
    <h2 class="qwe">
        学校地址：{{ address }}
    </h2>
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

    },
}
</script>
<style lang="less" scoped>
    .demo{
        background-color: #f00;
        .qwe{
            font-size: 40px;
        }
    }
</style>