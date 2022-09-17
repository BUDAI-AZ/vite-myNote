<template>
  <div class="search">
    <header>
      <span class="left" @click="toBack">
        <van-icon name="arrow-left" />返回
      </span>
      <h3>Search</h3>
    </header>
    <ul>
      <li v-for="(item,index) in searchData" :key="item._id" @click="toDetail(item)">{{index+1}}、{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { getSearchData } from '../../api/type.js'
export default ({
  name: 'Search',
  setup () {
    const route =  useRoute()
    const router =  useRouter()
    const key = route.query.key
    const searchData = ref([])
    const SData = async () => {
      const {data} = await getSearchData(key)
      searchData.value = data.data
    }
    SData()

    const toBack = () => {
      router.back()
    }
    const toDetail = (data) => {
      data = JSON.stringify(data)
      router.push({
        name: 'detail', 
        params:{ data }
      })
    }

    return {
      searchData,
      toBack,
      toDetail
    }
  }
})
</script>

<style scoped lang='less'>
.search {
  padding: 65px 15px 52px;
  font-size: 20px;
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
      transform: translate(-50%, -50%);
      font-size: 22px;
      margin: 0;
    }
  }
  ul {
    li {
      margin-bottom: 20px;
    }
  }
}
</style>
