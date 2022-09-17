import http from '../utils/require.js'

export const getType = (params) => {
  return http.get('/find/type', {params})
}

export const getRemmendType = (params) => {
  return http.get('/find/remmendtype', {params})
}

export const getTypeData = (params) => {
  return http.get('/find/data', {params})
}

export const getTypeDataByType = (params) => {
  return http.get('/find/data/type', {params})
}

export const getSearchData = (key) => {
  return http.get('/find/data/search', {params: {key}})
}