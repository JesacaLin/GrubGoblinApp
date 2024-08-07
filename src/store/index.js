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
    },
    CLEAR_LOGIN_INFO(state) {
      state.token = ''
      state.userEmail = ''
      state.userName = ''
      state.userRoles = []

      localStorage.removeItem('store')

      console.log('CLEAR_LOGIN_INFO mutation called')
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUserEmail: (state) => state.userEmail,
    getUserName: (state) => state.userName,
    getUserRoles: (state) => state.userRoles
  },

  plugins: [localStoragePlugin]
})

export default store
