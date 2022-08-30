/*
 * @Description: 
 * @Author: hqk
 * @Date: 2022-07-27 09:08:09
 * @LastEditTime: 2022-07-27 09:52:35
 * @LastEditors: hqk
 */
import Mock from 'mockjs'
// 把json数据引入进来
import banner from './banner.json'
import floor from './floors.json'

// mock数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})