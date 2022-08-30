/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-08-14 16:19:51
 * @LastEditTime: 2022-08-14 16:26:46
 * @LastEditors: hqk
 */
import { v4 as uuidv4 } from "uuid" 
// 要生成一个随机字符，且每次执行不能发生变化，游客身份持久储存
export const getUUID = ()=>{
    // 先从本地存储获取uuid （查看是否本地存储有uuid）
    let uuid_token = localStorage.getItem("UUIDTOKEN");
    // 如果没有生成
    if(!uuid_token){
        // 我生成游客临时身份
        uuid_token = uuidv4()
        localStorage.setItem("UUIDTOKEN",uuid_token)
    }
    return uuid_token
}