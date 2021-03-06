import axios from 'axios'

axios.defaults.baseURL = 'https://www.dodoblog.cn/api'
// axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.withCredentials = true

axios.interceptors.response.use(response => {
  // 特殊repsonse，包括值类型的response和已经经过axois处理的response
  if (
    typeof response === 'string' ||
    typeof response === 'number' ||
    typeof response === 'boolean' ||
    (response instanceof Object && response['_hasAxiosPassport'] === true)
  ) {
    return Promise.resolve(response)
  }

  // repsonse 处理，只剩data返回给前段
  if (!response) {
    return Promise.reject('no response')
  }

  if (response.status !== 200) {
    console.error('------ server error -------')
    return Promise.reject(response)
  }

  const result = response.data

  if (!result.success) {
    console.error('------ operation error -------')
    return Promise.reject(result)
  }

  if (result.data && result.data instanceof Object) {
    result.data['_hasAxiosPassport'] = true
  }

  return Promise.resolve(result.data)
})

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
