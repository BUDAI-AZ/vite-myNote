<template>
  <div class="home">
    <van-nav-bar fixed class="page-nav-bar ">
      <template #left>
        <span style="color: #fff;font-size: 20px;">
          首页
        </span>
      </template>
      <template #right>
        <van-search class="search-color" v-model="searchValue" show-action placeholder="请输入搜索关键词" @search="onSearch"
          @cancel="onCancel" />
      </template>
    </van-nav-bar>

    <van-tabs v-model:active="active" >
      <van-tab v-for="item in types" :key="item.id" :title="item.type" swipeable >
        <div class="tab-item" v-for="item1 in typeData" :key="item1._id" @click="toDetail(item1)">
          <h3>{{item1.title}}</h3>
          <div class="buttom">
            <span>{{item1.author}}</span>
            <span><i>{{item1.commentCount}}</i>评论</span>
            <span>{{item1.date}}</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {reactive, ref, toRefs,watch } from 'vue'
import { getRemmendType, getTypeData, getTypeDataByType } from '../../api/type.js'
import router from '../../router'
import { useStore } from 'vuex'
export default ({
  name: 'Home',

  setup () {
    const store = useStore()
    const active = ref(store.state.curPage)
    const res = reactive({
      types: [],
      typeData: []
    })

    const typeData = async(type) => {
      // type = String(type).toLocaleLowerCase()
      if(type === "推荐") {
        const {data} = await getTypeData()
        res.typeData = data.data
        console.log(data);
      } else {
        const {data} = await getTypeDataByType({type})
        res.typeData = data.data
      }
    }
    const recommendType = async() => {
      const {data} = await getRemmendType()
      res.types = data.data
      typeData(data.data[active.value].type)
    }
    recommendType()

    watch(active,(newVal) => {
      store.commit('setCurPage', newVal)
      typeData(res.types[newVal].type)
    })

    const toDetail = (data) => {
      data = JSON.stringify(data)
      router.push({
        name: 'detail', 
        params:{ data }
      })
    }

    const searchValue = ref('')
    const onSearch = () => {
      router.push({
        path: '/search',
        query: {
          key: searchValue.value
        }
      })
    }
    const onCancel = () => {
      searchValue.value = ''
    }
    return {
      active,
      ...toRefs(res),
      toDetail,
      searchValue,
      onSearch,
      onCancel
    }
  }
})
</script>

<style scoped lang='less'>
.home {
  padding-top: 42px;
  .search-color {
    background-color: transparent;
    border-radius: 10px;
  }

  .tab-item {
    padding: 0 10px;
    font-size: 15px;
    margin-bottom: 20px;

    h3 {
      font-size: 22px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      overflow: hidden;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .buttom {
      margin-top: -20px;

      span {
        margin-right: 20px;

        i {
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
