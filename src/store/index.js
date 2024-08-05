import { createStore } from 'vuex'
import localStoragePlugin from './plugins/localStorage'

const savedState = JSON.parse(localStorage.getItem('store')) || {
  token: null,
  userEmail: null,
  userName: null,
  userRoles: []
}

const store = createStore({
  state: savedState,
  mutations: {
    SET_LOGIN_INFO(state, { token, userEmail, userName, roles }) {
      state.token = token
      state.userEmail = userEmail
      state.userName = userName
      state.userRoles = roles

      console.log('SET_LOGIN_INFO mutation called with:', { token, userEmail, userName, roles })
      console.log('Updated state:', state)
    },
    CLEAR_LOGIN_INFO(state) {
      state.token = null
      state.userEmail = null
      state.userName = null
      state.userRoles = []

      console.log('CLEAR_LOGIN_INFO mutation called')
      console.log('Updated state:', state)
    }
  },
  plugins: [localStoragePlugin]
})

export default store
