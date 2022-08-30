/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-30 09:01:12
 * @LastEditTime: 2022-08-30 09:23:22
 * @LastEditors: hqk
 */
export default{
    methods:{
        // 复用函数
        geiQian(money){
            this.money-=money;
            this.$parent.money+=money;
        }
    }
}