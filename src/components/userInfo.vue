<template>
      <div class="userInfo">
      <div class="left">
        <div class="img">
          <van-image round width="100%" height="100%" :src="authorImg" />
        </div>
        <div class="info">
          <div class="name">{{author}}</div>
          <div class="date">{{date}}</div>
        </div>
      </div>
      <div class="right">
        <button class="attention" @click="onAttention(authorID)">关注</button>
      </div>

    </div>
    <div class="description">
      {{description}}
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { addCollect } from '../api/user.js'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'UserInfo',
  props: {
    authorImg: {
      type: String,
      retquire: true
    },
    author: {
      type: String,
      retquire: true
    },
    date: {
      type: String,
      retquire: true
    },
    authorID: {
      type: String,
      retquire: true
    },
    description: {
      type: String,
      retquire: true
    }
  },
  setup () {
    const store = useStore()
    const onAttention = async (authorID) => {
      if(store.state.user.data[0]._id) {
        await addCollect({_id: store.state.user.data[0]._id, authorID})      
      }
    }
    return {
      onAttention
    }
  }
})
</script>

<style scoped lang='less'>
    .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    padding: 10px 0;
    .left {
      display: flex;
      align-items: center;

      .img {
        width: 40px;
        height: 40px;
      }

      .info {
        margin-left: 20px;

        .name {
          font-weight: 600;
        }

        .date {
          font-size: 14px;
        }
      }
    }

    .attention {
      border-radius: 20px;
      background-color: rgb(49, 118, 118);
      color: #fff;
      border: 0;

      &:active {
        transform: scale(0.94);
      }
    }
  }
  .description {
    text-indent: 24px;
    word-wrap: normal;
    word-break: break-all;
  }
</style>
