import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router // 注册上路由器(路由相关语法才能使用)
})
