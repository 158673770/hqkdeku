<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-08 08:52:29
 * @LastEditTime: 2022-08-11 09:32:26
 * @LastEditors: hqk
-->
<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in skuImageList" :key="slide.id" @click="slideClick(slide,index)">
        <img :src="slide.imgUrl" :class="{active:data == index}">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  // $nextTick
  export default {
    name: "ImageList",
    props:["skuImageList"],
    data(){
      return{
        data:0
      }
    },
    methods:{
      slideClick(val,index){
        this.data = index
        // 通知兄弟组件，当前的索引值为几
        this.$bus.$emit('getIndex',index)
      }
    },
    watch:{
      skuImageList(NewValue,oldValue){
        this.$nextTick(()=>{
          console.log("NewValue",NewValue)
           new Swiper(this.$refs.cur, {
              slidesPerView:3,
              slidesPerGroup : 3,
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              
            })     
        })
      }
    }

  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        // &:hover {
        //   border: 2px solid #f60;
        //   padding: 1px;
        // }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>