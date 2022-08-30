<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-04 08:59:46
 * @LastEditTime: 2022-08-25 10:14:16
 * @LastEditors: hqk
-->
<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo',pageNo - 1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo',1)" :class="{active:pageNo == 1}">1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-if="page>=startNumAndEndNum.start" @click="$emit('getPageNo',page)" :class="{active:pageNo == page}">{{ page }}</button>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pageNo == totalPage}">{{ totalPage }}</button>
    <button :disabled="pageNo == totalPage"  @click="$emit('getPageNo',pageNo + 1)">下一页</button> 
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    // pageNo当前页，pageSize一页多少条，total总共多少条，continues连续的页码
    props:['pageNo','pageSize','total','continues'],
    computed:{
        // 总共多少页
        totalPage(){
            // 向上取整
            // console.log('Math.ceil(this.total/this.pageSize)',Math.ceil(this.total/this.pageSize))
            return Math.ceil(this.total/this.pageSize)
        },
        // 计算出页面的起始数据与结束的数据
        startNumAndEndNum(){
            const {continues,pageNo,totalPage} = this;
            // 先定义两个变量储存起始数字与结束数字
            let start = 0,end = 0;
            // 连续的页码数字5【至少5页】，如果出现不正常的现象不够5页
            // 不正常现象【总页数没有连续页码多】continues连续的页码
            if(continues > totalPage){
                start = 1
                end = totalPage
            }else{
                // 正常现象【连续页数是5，总页数一定大于5】
                // 起始数字
                start = pageNo - parseInt(continues / 2);
                // 结束数字 parseInt去除小数点
                end = pageNo + parseInt(continues / 2);
                if(start < 1){
                    start = 1
                    end = continues
                }
                // end数字大于总页码
                if(end > totalPage){
                    // 最后几页的数据纠正
                    end = totalPage
                    // 起始页的数据纠正
                    start = totalPage - continues + 1
                }
            }
            console.log("start",start)
            console.log("end",end)
            return {start,end}
        }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;
      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }
      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>