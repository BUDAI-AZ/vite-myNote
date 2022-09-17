<template>
  <div class="detail">
    <HeaderCom :title="data.title" />
    <UserInfo :authorImg="data.authorImg" :author="data.author" :date="data.date" :authorID="data.authorID"
      :description="data.description" />
    <div class="content">
      <div class="content-item" v-for="(item,index) in data.content" :key="item._id">
        <h4 class="small-title"><span>{{index+1}}、{{item.title}}</span></h4>
        <div class="small-title-img" v-if="item.img">
          <van-image width="100%" height="100%" :src="item.img" />
        </div>
        <div class="small-title-content"><span>{{item.content}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import UserInfo from '../../components/userInfo.vue'
import HeaderCom from '../../components/header.vue'
export default defineComponent({
  name: 'Detail',
  components: {
    HeaderCom,
    UserInfo
  },
  setup () {
    const route = useRoute()

    let data
    try {
      data = JSON.parse(route.params.data)
    } catch(e) {
      data = route.params.data
    }


    return {
      route,
      data
    }
  }
})
</script>

<style scoped lang='less'>
.detail {
  padding: 65px 15px 52px;
  font-size: 20px;

  .content {
    overflow-y: auto;
    height: 100%;

    .content-item {
      .small-title {
        margin: 25px 0 10px;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 22px;
      }
      .small-title-content {
        span {
          display: inline-block;
          text-indent: 20px;
          word-break: break-all;    
        }
      }
    }
  }
}
</style>
