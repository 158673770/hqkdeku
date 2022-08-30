<!--
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-29 13:30:34
 * @LastEditTime: 2022-08-29 17:02:22
 * @LastEditors: hqk
-->
<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <!-- 二次封装的HintButton按钮的时候，把人家el-button需要的数据传递过去 -->
    <!-- 在组件上写@click是自定义事件 -->
     <HintButton type="success" icon="el-icon-plus" title="我是中国人" @click="handler"/>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from './HintButton';
export default {
  name: 'AttrsListenersTest',
  components:{
     HintButton 
  },
  methods: {
    handler() {
       alert('弹弹弹');
    },
  },
}
</script>
