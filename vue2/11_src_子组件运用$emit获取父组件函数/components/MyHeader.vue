<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-29 13:44:43
 * @LastEditTime: 2022-07-01 09:43:10
 * @LastEditors: hqk
-->

<template>
  <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="value" @keyup.enter="add"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data(){
        return{
            value:''
        }
    },
    props:['receive'],
    methods:{
        add(){
            // 将用户的输入包装成一个todo对象 trim()去除空格
            if(!this.value.trim()) return alert("内容不能为空")
            const todoObj = {
                id:nanoid(),
                title:this.value,
                done:false
            }
            
            // this.receive(todoObj)
            this.$emit('receive',todoObj)
            this.value = ''
            // console.log(todoObj)
            // this.$emit('add');
        }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>