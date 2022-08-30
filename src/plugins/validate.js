/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-25 17:04:51
 * @LastEditTime: 2022-08-29 09:34:22
 * @LastEditors: hqk
 */
// vee-validate插件：表单验证插件
import Vue from 'vue'
import VeeValidate from 'vee-validate'
// 中文提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)
// console.log('VeeValidate',VeeValidate)
// 表单校验
VeeValidate.Validator.localize('zh_CN',{
    messages:{
        ...zh_CN.messages,
        is:(field) =>  `${field}必须与密码相同`
    },
    attributes:{
        phone:'手机号',
        code:'验证码',
        password:'密码',
        password1:'确认密码',
        agree:'协议'
    }
});

// 自定义校验规则
VeeValidate.Validator.extend('tongyi',{
    validate:value =>{
        return value
    },
    getMessage: field => {
        return field + '必须同意';
    }
})