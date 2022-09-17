<template>
  <div class="food">
    <header>
      <h3>食物</h3>
    </header>
    <div class="content">
      <div class="tab-item" v-for="item in foodData" :key="item._id" @click="toDetail(item)">
          <h3>{{item.title}}</h3>
          <div class="buttom">
            <span>{{item.author}}</span>
            <span><i>{{item.commentCount}}</i>评论</span>
            <span>{{item.date}}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import HeaderCom from '../../components/header.vue'
import { getTypeDataByType } from '../../api/type.js'
import { useRouter } from 'vue-router'
export default ({
  name: 'Food',
  components: {
    HeaderCom
  },
  setup () {
    const router = useRouter()
    const res = reactive({
      foodData: []
    })
    const toDetail = (data) => {
      data = JSON.stringify(data)
      router.push({
        name: 'detail', 
        params:{ data }
      })
    }
    const foodDataFun = async() => {
        const {data} = await getTypeDataByType({type: 'Food'})
        res.foodData = data.data
        console.log(data);
    }
    foodDataFun()
    return {
      ...toRefs(res),
      toDetail
    }
  }
})
</script>

<style scoped lang='less'>
h3,
h4 {
  margin: 0;
}

.food {
  header {
    h3 {
      height: 45px;
      line-height: 45px;
      background-color: #3296fa;
      color: #fff;
      font-size: 22px;
      text-align: center;
    }
  }

  .content {
    font-size: 20px;
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
        span {
          margin-right: 20px;
          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>
