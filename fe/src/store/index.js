import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    auth: {},
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
  },
})
