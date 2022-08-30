<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 13:45:29
 * @LastEditTime: 2022-06-30 08:45:59
 * @LastEditors: hqk
-->
<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 13:44:43
 * @LastEditTime: 2022-06-29 13:44:44
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
  <ul class="todo-main">
        <!-- <MyItem/> -->
        <MyItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj" 
        :checkTodo="checkTodo"
        :DeleteTodo="DeleteTodo" />
  </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name:'MyList',
    components:{
        MyItem
    },
    props:[
        'todos',
        'checkTodo',
        'DeleteTodo'
    ],
    mounted(){
        // console.log(this.todos);
    },
    methods:{
        
    }
}   
</script>

<style scoped>

/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>