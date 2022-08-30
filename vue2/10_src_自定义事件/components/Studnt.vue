<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-06-30 13:32:12
 * @LastEditTime: 2022-06-30 14:44:53
 * @LastEditors: hqk
-->

<template>
  <div class="demo">
    <h2 class="title">
        学生名称：{{myName}}
    </h2>
    <h2>
        学生性别：{{ mysex }}
    </h2>
    <h2>当前求和为：{{ number }}</h2>
    <button  @click="addNumber">点我数字++</button>
    <button  @click="clickStudentName">学生名给app</button>
    <button  @click="unbind">学生名给app</button>
    <button  @click="death">销毁当前Student组件的实例对象</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return{
            myName:'张三',
            mysex:'男',
            number:0,
        }
    },
    porps:['getShoolName'],
    methods:{
        addNumber(){
            this.number++;
        },
        clickStudentName(){
            // 触发Student组件实例身上的hqk事件
            this.$emit('hqk',this.myName);
        },
        sendStudentName(){
            // 触发Student组件实例身上的hqk事件
            this.$emit('hqk',this.mysex,666,888,999,888,777);
            this.$emit('chufa',this.mysex,666);
        },
        unbind(){
            // this.$off('hqk');//解绑一个自定义事件
            // this.$off(['hqk','chufa']);//解绑多个自定义事件
            this.$off();//解绑所有的自定义事件
        },
        death(){
            this.$destroy();//销毁当前Student组件的实例对象,销毁后所有的子组件都会被销毁
        },
    },
}
</script>
<style scoped>
    .demo{
        background-color: #ccc;
        padding: 10px;
    }
</style>