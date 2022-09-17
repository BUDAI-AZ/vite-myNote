import http from '../utils/require.js'

export const login = (params) => {
  return http.get('/user/login', {params})
}

export const addCollect = (body) => {
  return http.put('/add/user/collectid', body)
}

export const findUser = (params) => {
  return http.get('/find/user', {params})
}