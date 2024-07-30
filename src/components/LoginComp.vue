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

export default {
  name: 'LoginComp',

  data() {
    return {
      email: '',
      password: ''
    }
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

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
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

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 25%;
  border-radius: 30px;
}

/* button:hover {
    background-color: #0056b3;
  } */
</style>
