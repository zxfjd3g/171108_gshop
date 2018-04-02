<template>
  <div>
    <!--显示当前路由组件-->
    <router-view></router-view>
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
import {reqAddress} from './api'
export default {

  async mounted () {
    const result = await reqAddress('40.10038,116.37867')
    console.log(result)
  },

  components: {
    FootGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
