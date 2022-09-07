import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    auth: '',
    loading: true,
  },
  getters: {},
  mutations: {
    setInitialDate(state, payload) {
      state.auth = payload
    },
    checkLoading(state, payload) {
      state.loading = payload
    },
  },
  actions: {
    getInitialDateFromServer({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/test')
          .then(res => {
            if (res.status === 200) {
              commit('setInitialDate', res.data)
              resolve()
            } else {
              reject(new Error())
            }
          })
          .catch(e => {
            console.log(e)
          })
      })
    },
  },
})
