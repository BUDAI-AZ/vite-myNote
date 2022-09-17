<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="fire-o" to="/food">美食</van-tabbar-item>
    <van-tabbar-item icon="search" to="/questions">问答</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/user">{{user? '我的': '未登录'}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default ({
  name: 'Layout',
  
  setup () {
    const active = ref(0)
    const store = useStore()
    return {
      user: store.state.user,
      active
    }
  }
})
</script>

<style scoped lang='less'>
</style>
