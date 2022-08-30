<template>
  <div>
	<button @click="getStudents">点击获取接口1数据</button>
	
	<button @click="getStudents2">点击获取接口2数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	name:'App',
	methods:{
		getStudents(){
			axios.get('/gtguigu/students').then(
				response =>{
					console.log('请求成功',response.data)
				},
				error =>{
					console.log('请求失败',error.message)
				}
			)
		},
		getStudents2(){
			axios.get('/demo/cars').then(
				response =>{
					console.log('请求成功',response.data)
				},
				error =>{
					console.log('请求失败',error.message)
				}
			)
		}
	}
}
</script>

<style>

</style>