import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    auth: {
      userBasicInfo: {
        userId: '',
      },
    },
    loading: true,
  },
  getters: {},
  mutations: {
    setInitialDate(state, payload) {
      state.auth = payload
    },
    checkLoading(state, payload) {
      state.loading = payload
      console.log('loaded')
    },
    setUserBasicInfo(state, payload) {
      state.auth.userBasicInfo = payload
    },
    setInitialUserId(state, payload) {
      state.auth.userBasicInfo.userId = payload
    },
  },
  actions: {
    getInitialDateFromServer({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/auth')
          .then(res => {
            if (res.status === 200) {
              commit('setInitialDate', res.data)
              resolve(state.auth)
            } else {
              reject(new Error())
            }
          })
          .catch(e => {
            console.log(e)
          })
      })
    },
    emitUserBasicInfo({ commit }, payload) {
      commit('setUserBasicInfo', payload)
      axios
        .post('/api/setUserInfo', payload)
        .then(res => {
          if (res.status === 200) {
            console.log('success')
          }
        })
        .catch(e => console.log(e))
    },
    emitInitialUserId({ commit }, payload) {
      return axios
        .post('/api/setInitialUserId', { userId: payload })
        .then(res => {
          if (res.status === 200) {
            commit('setInitialUserId', payload)
            return res
          } else {
            throw new Error()
          }
        })
        .catch(e => console.log(e))
    },
  },
})
