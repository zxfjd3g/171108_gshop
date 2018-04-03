/*
vuex最核心的管理对象store
 */
import {
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS
} from './mutation-types'
import {
  reqAddress,
  reqFoodList,
  reqShopList
} from '../api'


export default {

  // 异步获取address
  async getAddress({commit, state}) {
    // 得到经纬度值
    const {latitude, longitude} = state
    // 异步请求获取address
    const result = await reqAddress(latitude + ',' + longitude)
    if (result.code === 0) {
      const address = result.data
      // 提交commutation
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取categorys
  async getCategorys({commit}) {
    // 异步请求获取categorys
    const result = await reqFoodList()
    if (result.code === 0) {
      const categorys = result.data
      // 提交commutation
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },


  // 异步获取shops
  async getShops({commit, state}) {
    // 得到经纬度值
    const {latitude, longitude} = state
    // 异步请求获取shops
    const result = await reqShopList(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      // 提交commutation
      commit(RECEIVE_SHOPS, {shops})
    }
  },

}