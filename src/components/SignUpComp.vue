<template>
  <main>
    <img src="/src/assets/logo-1.png" alt="site logo" />
    <h1>Welcome!</h1>
    <button class="close-button" @click="$emit('close')">X</button>
    <form @submit.prevent="handleSignUp">
      <div>
        <label for="username">Desired User Name: </label>
        <input type="text" id="username" name="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email Address: </label>
        <input type="email" id="email" name="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="At least 6 characters"
          v-model="password"
          required
        />
      </div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import supabase from '../service/SupabaseService'
export default {
  name: 'SignUpComp',

  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async handleSignUp() {
      // Sign up the user in the auth.users table
      let { data: signUpData, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      if (error) {
        console.error('Error signing up:', error.message)
        return
      }

      console.log('Sign up data:', signUpData)

      // Insert the username into the app_user table
      const { data: insertData, error: insertError } = await supabase
        .from('app_user')
        .insert([{ email: this.email, username: this.username, user_role: 'contributor' }])

      if (insertError) {
        console.error('Error inserting into app_user:', insertError.message)
      } else {
        console.log('Successfully signed up and inserted into app_user:', insertData)
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
