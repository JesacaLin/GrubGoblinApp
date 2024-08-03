<template>
  <main id="auth-options">
    <img src="../assets/logo-1.png" alt="site logo" />
    <h5>Just your friendly neighborhood</h5>
    <h1>Grub Goblin</h1>
    <p>
      Discover the ultimate hack for enjoying delicious food without breaking the bank. Our platform
      helps you find hidden gems in your neighborhood and build a personalized list of must-try
      spots. Share your culinary adventures with friends and unlock a world of flavor on a budget.
    </p>
    <section>
      <button @click="showLogin = true">+ Login +</button>
      <span class="line"></span>
      <button @click="showSignUp = true">+ Sign Up +</button>
    </section>
    <div v-if="showLogin" class="modal-backdrop" @click="closeModal">
      <div class="modal" @click.stop>
        <LoginComp @close="closeModal" />
      </div>
    </div>
    <div v-if="showSignUp" class="modal-backdrop" @click="closeModal">
      <div class="modal" @click.stop>
        <SignUpComp @close="closeModal" />
      </div>
    </div>
  </main>
</template>

<script>
import SignUpComp from './SignUpComp.vue'
import LoginComp from './LoginComp.vue'

export default {
  components: {
    SignUpComp,
    LoginComp
  },
  data() {
    return {
      showLogin: false,
      showSignUp: false
    }
  },
  methods: {
    closeModal() {
      this.showLogin = false
      this.showSignUp = false
    }
  }
}
</script>

<style scoped>
#auth-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

img {
  width: 11%;
}

h5 {
  font-size: 1.2rem;
}

h1 {
  font-size: 3.5rem;
}

p {
  text-align: center;
}

.line {
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: black;
  margin: 0 10px;
  vertical-align: middle;
  margin: 1rem 1.7rem;
}
</style>
