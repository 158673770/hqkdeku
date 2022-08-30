<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-29 10:54:59
 * @LastEditTime: 2022-08-29 08:45:54
 * @LastEditors: hqk
-->
<template>
  <div class="swiper-container" ref="floor1Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carouse in list" :key="carouse.id">
                <img :src="carouse.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import swiper from 'swiper'
export default {
    name:'Carsousel',
    props:['list'],
    
    watch: {
        floor: {
            // 立即监听数据数据未变化也能监听
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    var mySwiper = new swiper(this.$refs.floor1Swiper, {
                        loop: true,
                        // 分页器
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        // 前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        }
                    });
                    
                });
            }
        }
    },
    
}
</script>

<style>

</style>