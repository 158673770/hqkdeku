<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-08 08:52:30
 * @LastEditTime: 2022-08-11 09:53:44
 * @LastEditors: hqk
-->
<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big"/>
    </div>
    <!-- 遮罩层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:["skuImageList"],
    data(){
      return{
        data:0
      }
    },
    methods:{
      // 放大镜效果
      handler(event){
        let mask = this.$refs.mask
        let big = this.$refs.big
        let lefts = event.offsetX - mask.offsetWidth/2
        let top = event.offsetY - mask.offsetHeight/2
        // 约束蒙蔽不能冲出元素外
        if(lefts <= 0){
          lefts = 0
        }
        if(lefts >= mask.offsetWidth){
          lefts = mask.offsetWidth
        }
        if(top <= 0){
          top = 0
        }
        if(top >= mask.offsetHeight){
          top = mask.offsetHeight
        }
        // 修改元素的left 与 top值
        mask.style.left = lefts + "px"
        mask.style.top = top + "px"
        // 鼠标移入显示的图片位置
        big.style.left = - 2 * lefts +"px"
        big.style.top = -2 * top + 'px'
      }
    },
    computed:{
      imgObj(){
        return this.skuImageList[this.data] || {}
      }
    },
    mounted(){
      // 全局事件总线获取兄弟组件传递过来的数据
      this.$bus.$on("getIndex",(index) =>{
        this.data = index
      })
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>