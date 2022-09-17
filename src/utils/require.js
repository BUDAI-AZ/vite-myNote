import axios from "axios";

const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 添加头部配置
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'// 'application/json; charset=utf-8'


// 数据请求拦截
http.interceptors.request.use((config)=> {
  return config
},(err) => {
  return Promise.reject(err)
})

//返回数据响应数据拦截
http.interceptors.response.use(res => {
  if(res.status === 200) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(res)
  }
},error => {
  return Promise.reject(error.res)
})

export default http