<template>
  <main>
    <img src="/src/assets/logo-1.png" alt="site logo" />
    <h1>Welcome Back!</h1>
    <button class="close-button" @click="$emit('close')">X</button>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="text" id="password" name="password" v-model="password" required />
      </div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import supabase from '../service/SupabaseService'
// import store from '../store/index'
import { useStore } from 'vuex'

export default {
  name: 'LoginComp',

  data() {
    return {
      email: '',
      password: ''
    }
  },
  setup() {
    const store = useStore()
    return { store }
  },
  methods: {
    async handleLogin() {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password
      })
      if (error) {
        console.error('Error signing in:', error.message)
      } else {
        console.log('Successfully signed in:', data)

        // Log the entire response to check for the token
        console.log('Full response:', data)

        const token = data.session.access_token
        const userEmail = data.user.email

        //need to fetch info from the app_user table b/c the auth_user table doesn't have this info...
        let { data: userInfo, error: userInfoError } = await supabase
          .from('app_user')
          .select('username, user_role')
          .eq('email', userEmail)
          .single()

        if (userInfoError) {
          console.error('Error fetching user info:', userInfoError.message)
        } else {
          const userName = userInfo.username
          const roles = userInfo.user_role

          this.store.commit('SET_LOGIN_INFO', { token, userEmail, userName, roles })
          // console.log('Login information successfully saved to store:', {
          //   token,
          //   userEmail,
          //   userName,
          //   roles
          // })
        }

        // routerLink to HomeView
        this.$router.push({ name: 'HomeView' })
      }
    }
  }
}
</script>

<style scoped>
main {
  position: relative;
}

img {
  width: 10%;
  padding: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 1rem;
}

div {
  display: flex;
  flex-direction: column;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
