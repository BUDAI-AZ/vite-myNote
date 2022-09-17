import http from '../utils/require.js'

export const getQuestions = (params) => {
  return http.get('/find/question', {params})
}