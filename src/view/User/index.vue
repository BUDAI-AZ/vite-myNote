<template>
  <div class="user" v-if="!isLogin">
    <van-image round width="50vw" height="50vw" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    <router-link class="login-btn" to="/login">注册 / 登录</router-link>
  </div>
  <div class="user" v-else>
    <van-button class="btn" type="default">编辑资料</van-button>
    <div class="up">
      <div class="img">
        <van-image round width="100%" height="100%" :src="userInfo.imgurl" />
      </div>
      <div class="info">
        <div class="name"><span class="title">用户名：</span>{{userInfo.userName}}</div>
        <div class="idiograph"><span class="title">个人签名：</span>{{userInfo.idiograph}}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-item">
        <span>{{userInfo.attention.length}}</span>
        <span>点赞</span>
      </div>
      <div class="bottom-item">
        <span>{{userInfo.collect.length}}</span>
        <span>关注</span>
      </div>
      <div class="bottom-item">
        <span>{{userInfo.fans.length}}</span>
        <span>粉丝</span>
      </div>
    </div>
  </div>
  <van-grid :column-num="2">
    <van-grid-item icon="star-o" icon-color="#d03b3b" text="收藏" />
    <van-grid-item icon="clock-o" icon-color="#d03b3b" text="历史" />
  </van-grid>
  <van-cell title="消息通知" is-link />
  <van-cell title="关于" is-link />
  <van-cell title="退出登录" class="login-cell" @click="loginOut" />
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '../../router'
import { removeItem } from '../../utils/storage.js'
export default ({
  name: 'User',

  setup() {
    const store = useStore()
    const isLogin = ref(false)
    if(store.state.user) {
      isLogin.value = true
    }
    // 退出登录
    const loginOut = () => {
      removeItem('NOTE_USER')
      router.push('/login')
    }
    return {
      isLogin,
      loginOut,
      userInfo: store.state.user.data[0]
    }
  }
})
</script>

<style scoped lang='less'>
.user {
  padding: 20px 10px;
  background-color: #4698eb;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .login-btn {
    margin-top: 20px;
    color: #fff;
    cursor: pointer;
  }
  .btn {
    position: fixed;
    top: 20px;
    right: 10px;
    border-radius: 20px;
  }

  .up {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -40px;
    .img {
      width: 100px;
      height: 100px;
    }

    .info {
      margin-left: 20px;
      flex: 1;
      font-size: 16px;
      font-weight: 700;
      font-size: 18px;
      overflow: hidden;

      .idiograph,
      .name {
        font-weight: 400;
        font-size: 16px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
        word-break: break-all;
        line-height: 25px;

        .title {
          font-size: 18px;
          font-weight: 700;
          height: 25px;
          line-height: 25px;
        }
      }

      .name {
        display: block;
        white-space: nowrap;
        margin-bottom: 15px;
      }
    }
  }

  .bottom {
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #fff;
    font-size: 23px;
    .bottom-item {
      display: flex;
      flex-direction: column;
    }
  }

}

.login-cell {
  color: #d03b3b;
  text-align: center;
  margin-top: 10px;
}
</style>

