<template>
    <header>
      <span class="left" @click="toBack"><van-icon name="arrow-left"/>返回</span>
      <h3>{{title}}</h3>
    </header>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'HeaderCom',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup ({title}) {
    const router = useRouter()
    const toBack = () => {
      router.back()
    }

    return {
      toBack
    }
  }
})
</script>

<style scoped lang='less'>
    header {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #333;
    width: 100%;
    height: 50px;
    line-height: 50px;
    z-index: 3;
    background-color: #3296fa;
    color: #fff;
    .left {
      float: left;
      font-size: 18px;
    }
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 22px;
      margin: 0; 
    }
  }
</style>
