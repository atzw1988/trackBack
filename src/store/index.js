import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/api'
import { ACCESS_TOKEN } from '@/store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_PAYWAY: (state, payWay) => {
      state.payWay = payWay
    }
  },
  actions: {
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject, refinal) => {
        login(userInfo).then(response => {
          console.log(response)
          const result = response.data
          if (response.code === 1) {
            Vue.ls.set(ACCESS_TOKEN, result.Authorization, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.Authorization)
            commit('SET_ISLOGIN', true)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {
  },
  getters: {
    token: state => state.token,
    payWay: state => state.payWay
  }
})
