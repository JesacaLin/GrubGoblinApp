<template>
  <main id="auth-options">
    <img src="../assets/logo-1.png" alt="site logo" class="hide-on-mobile" />
    <h2>Just your friendly neighborhood</h2>
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
  padding: 0 5rem;
}

img {
  width: 5rem;
}

h5 {
  font-size: 1.2rem;
}

h1 {
  font-size: 4rem;
}

p {
  font-size: 1.2rem;
  text-align: center;
}

.line {
  display: inline-block;
  width: 2.5px;
  height: 50px;
  background-color: black;
  margin: 0 10px;
  vertical-align: middle;
  margin: 1rem 1.7rem;
}

@media only screen and (max-width: 1400px) {
  #auth-options {
    gap: 0.2rem;
  }

  .hide-on-mobile {
    display: none;
  }

  h1 {
    font-size: 3rem;
  }

  section {
    padding-top: 1rem;
  }
}
</style>
