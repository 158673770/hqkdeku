<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 17:18:30
 * @LastEditTime: 2022-06-30 13:40:28
 * @LastEditors: hqk
-->
<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-29 16:57:07
 * @LastEditTime: 2022-06-29 16:57:08
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<!--
 * @Description: 
 * @Author: 【大白菜】2601779853@qq.com
 * @Date: 2022-06-28 13:24:38
 * @LastEditTime: 2022-06-29 16:50:19
 * @LastEditors: 【大白菜】2601779853@qq.com
-->
<template>
    <div>
        <div id="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <MyHeader :receive="receive" />
                    <MyList :todos='todos' :checkTodo='checkTodo' :DeleteTodo='DeleteTodo'/>
                    <MyFooter :todos='todos' :checkAllTodo='checkAllTodo' :DeleteAllTodo='DeleteAllTodo'/>
                </div>
            </div>
            </div>
        <!-- <MyHeader/>
        <MyList/>
        <MyFooter/> -->
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

export default {
    name: "App",
    components: { MyHeader, MyList, MyFooter },
    data(){
        return{
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods:{
        // 添加一个todo
        receive(x){
            console.log("获取数据",x);
            this.todos.unshift(x);
        },
        // 勾选or取消勾选一个todo
        checkTodo(id){
            console.log("勾选or取消勾选",id);
            this.todos.forEach(todo =>{
                if(todo.id === id.id){
                    todo.done = !todo.done;
                    console.log('todo.done',todo.done);
                }
            })
        },
        // 删除一个todo
        DeleteTodo(id){
            console.log("删除",id);
            this.todos = this.todos.filter(todo =>{
                return todo.id !== id;
            })
        },
        // 全选or全不选
        checkAllTodo(flag){
            console.log("全选or全不选",flag);
            this.todos.forEach(todo =>{
                todo.done = flag;
            })
        },
        // 删除所有已完成的todo
        DeleteAllTodo(){
            console.log("删除所有已完成的todo");
            this.todos = this.todos.filter(todo =>{
                return !todo.done;
            })
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value));
            }
        }
    }
}
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}



</style>