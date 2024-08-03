// store/index.js
import { createStore } from 'vuex'

export function createAppStore() {
  return createStore({
    state: {
      token: null,
      user: null,
      userRoles: []
    },
    mutations: {
      SET_LOGIN_INFO(state, { token, user, roles }) {
        state.token = token
        state.user = user
        state.userRoles = roles
      },
      CLEAR_LOGIN_INFO(state) {
        state.token = null
        state.user = null
        state.userRoles = []
      }
    }
  })
}

const store = createAppStore()
export default store
