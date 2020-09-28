import Vue from 'vue'
import axios from 'axios'
// import router from './../router'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { Toast } from 'vant'

// 创建 axios 实例
// const service = axios.create({
//   baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
//   timeout: 20000 // 请求超时时间
// })
const service = axios.create({
  baseURL: 'https://qafb.yhulian.cn', // api base_url
  timeout: 20000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      // notification.error({
      //   message: 'Forbidden',
      //   description: data.message
      // })
    }
    // if (error.response.status === 404) {
    //   router.push({
    //     name: 'nofound'
    //   })
    // }
    if (error.response.status === 500) {
      Toast.fail('服务器链接错误，请稍后重试')
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      if (token) {
        Toast.fail('登陆过期，请重新登陆')
        // Vue.ls.remove(ACCESS_TOKEN)
        // setTimeout(() => {
        //   window.location.reload()
        // }, 1500)
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  console.log(token)
  if (token) {
    config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  const token = response.headers.authorization
  if (token) {
    Vue.ls.set(ACCESS_TOKEN, token, 2 * 60 * 60 * 1000)
  }
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
