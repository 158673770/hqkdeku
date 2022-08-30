<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-29 13:45:27
 * @LastEditTime: 2022-07-01 09:48:13
 * @LastEditors: hqk
-->

<template>
  <div class="todo-footer" v-show="total">
        <label>
        <!-- <input type="checkbox" :checked='isAll' @change="checkAll"/> -->
        <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
        <span>已完成{{ doneTotal }}</span> / 全部 {{ total }}
        <!-- <span>已完成0</span> / 全部 2 -->
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
        total(){
          return this.todos.length;
        },
        doneTotal(){
          return this.todos.reduce((pre,current)=>pre + (current.done?1:0),0)
        },
        isAll:{
          get(){
            return this.doneTotal === this.total && this.total > 0;
          },
          set(value){
            console.log("value",value)
            
            // this.checkAllTodo(value)
            this.$emit('checkAllTodo',value)
          }
        }
        // isAll(){
        //   return this.doneTotal === this.total && this.total > 0;
        // }
    },
    methods:{
      // checkAll(e){
      //   console.log(e.target.checked)
      //   this.checkAllTodo(e.target.checked)
      // }
      clearAll(){
        // this.DeleteAllTodo()
        this.$emit('DeleteAllTodo')
      }
    }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>