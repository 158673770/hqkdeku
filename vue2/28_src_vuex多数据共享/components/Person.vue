<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-08 17:26:07
 * @LastEditTime: 2022-07-11 09:43:13
 * @LastEditors: hqk
-->
<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件的总人数是{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in $store.state.personList" :key="p.id">
           {{ p.name }}
        </li>
    </ul>

  </div>
</template>

<script>
// import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
import { nanoid } from 'nanoid';
export default {
    name:"Person",
    data(){
        return{
            name:'',
        }
    },
    computed:{

        personList(){
            return this.$store.state.personList; //获取vuex中state中的personList变量
        },
        sum(){
            return this.$store.state.sum; //获取vuex中state中的sum变量
        }
        // ...mapState(['personList']),
    },
    methods:{
        add(){
            const personObj = {
                id:nanoid(),
                name:this.name,
                age:nanoid()
            }
            console.log("personObj",personObj)
            // 从vuex中获取mutations中的ADD_PERSON方法，并调用该方法，将personObj传入
            this.$store.commit('ADD_PERSON',personObj);
            this.name = '';
        }
    }
}
</script>

<style>

</style>