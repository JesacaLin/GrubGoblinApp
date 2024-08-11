<template>
  <main>
    <img src="/src/assets/logo-1.png" alt="site logo" class="logo-in-modal" />
    <h1>Welcome! 🥰</h1>
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
    <div v-if="showEmailV" class="modal-backdrop" @click="closeModal">
      <div class="modal" @click.stop>
        <EmailVerificationComp @close="closeModal" />
      </div>
    </div>
  </main>
</template>

<script>
import supabase from '../service/SupabaseService'
import EmailVerificationComp from './EmailVerificationComp.vue'

export default {
  name: 'SignUpComp',

  components: {
    EmailVerificationComp
  },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      showEmailV: false
    }
  },

  methods: {
    closeModal() {
      this.showEmailV = false
    },

    async handleSignUp() {
      let { data: signUpData, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      if (error) {
        console.error('Error signing up:', error.message)
        return
      }

      console.log('Sign up data:', signUpData)

      const { data: insertData, error: insertError } = await supabase
        .from('app_user')
        .insert([{ email: this.email, username: this.username, user_role: 'contributor' }])

      if (insertError) {
        console.error('Error inserting into app_user:', insertError.message)
      } else {
        console.log('Successfully signed up and inserted into app_user:', insertData)

        this.$emit('close')

        //TODO --> the email verification message is does not show up. maybe onclick I use v-if and switch out the text + form in the existing modal, that's better for now.

        // Route to Auth view
        // this.$router.push({ name: 'Auth' })

        this.showEmailV = true
      }
    }
  }
}
</script>

<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 1rem;
}

div {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 1rem;
}

h1 {
  padding-bottom: 1rem;
}
</style>
