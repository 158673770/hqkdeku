<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 13:45:23
 * @LastEditTime: 2022-06-30 08:46:26
 * @LastEditors: hqk
-->

<template>
  <li>
    <label>
        <input type="checkbox" :checked='todo.done' @change="clickcheck(todo)"/>
        <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="clickDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
    name:'MyItem',
    // 接收对象
    props:['todo','checkTodo','DeleteTodo'],
    methods:{
        clickcheck(val){
            
            console.log(val)
            this.checkTodo(val)
            // 通知App组件将对应的todo对象的done值取反
        },
        clickDelete(val){
          if(confirm('确定删除吗？')){
             console.log(val)
             this.DeleteTodo(val)
            // this.$emit('delete',val)
          }
        }
    }
}
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>