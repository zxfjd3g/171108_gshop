/*
vuex最核心的管理对象store
 */
import Vue from 'vue'

import {
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_SHOP_GOODS] (state, {shopGoods}) {
    state.shopGoods = shopGoods
  },
  [RECEIVE_SHOP_RATINGS] (state, {shopRatings}) {
    state.shopRatings = shopRatings
  },
  [RECEIVE_SHOP_INFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count) {
      food.count++
    } else {// 第一次, 没有count属性
      // 直接添加属性没有数据绑定, 界面不会变化
      // food.count = 1 // 给food添加count属性, 并指定值为1
      Vue.set(food, 'count', 1) // 给food添加count属性, 属性值为1(有数据绑定)
      // 加入到shopCart数组中
      state.shopCart.push(food)
    }

  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count) { // 加一个限制
      food.count--
      if(food.count===0) {
        // 将其从购物车数组shopCart中删除
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  },

  [CLEAR_CART] (state) {
    // 清除购物车所有food的count, 置为0
    state.shopCart.forEach(food => food.count = 0)
    //清空购物车
    state.shopCart = []
  },
}