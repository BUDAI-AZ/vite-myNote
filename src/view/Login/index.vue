<template>
  <van-nav-bar title="登录" class="page-nav-bar" />
  <van-form @submit="onSubmit">
    <van-field v-model="userName" name="userName" placeholder="请填写用户名" left-icon="manager" :rules="rules.userName" />
    <van-field v-model="userPwd" type="password" name="userPwd" placeholder="请填写密码" left-icon="lock"
      :rules="rules.userPwd" />
    <div style="margin: 20px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script >
import { reactive, toRefs } from 'vue'
import { login } from '../../api/user.js'
import router from '../../router';
import { Toast } from 'vant'
import { useStore } from 'vuex'

export default ({
  name: 'Login',
  setup() {
    const user = reactive({
      userName: '',
      userPwd: ''
    })
    // 验证
    const rules = {
      userName: [{ required: true, message: '请填写用户名' }],
      userPwd: [{ required: true, message: '请填写密码' }, { pattern: /^\d{6,}$/, message: '密码格式错误！' }]
    }
    // 登录
    const store = useStore()
    const onSubmit = async () => {
      const { data } = await login({ userName: user.userName,userPwd: user.userPwd })
      console.log(data);
      if (data.code === 200) {
        // 登录成功
        store.commit('setUser', data)
        router.push('/')
      } else {
        // 登录失败
        Toast.fail(data.msg);
      }
    };

    return {
      ...toRefs(user),
      rules,
      onSubmit,
    }
  }
})
</script>

<style scoped lang='less'>
</style>
