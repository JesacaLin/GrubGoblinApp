<template>
  <main id="side-nav">
    <section>
      <img src="../assets/logo-1.png" alt="site logo" />
      <div>
        <h1>Hi!</h1>
        <!-- TODO styling this doesn't seem to work -->
        <h1 id="userName">{{ userName }}</h1>
      </div>

      <div @click="goToDashboard" class="cursor">
        <i class="bi bi-house"></i>
        <span>Dashboard</span>
      </div>
      <div class="cursor">
        <i class="bi bi-suit-heart"></i>
        <span>My Deals</span>
      </div>
      <div class="cursor">
        <i class="bi bi-people"></i>
        <span>Community Deals</span>
      </div>
    </section>
    <section>
      <div @click="handleLogout" class="cursor">
        <i class="bi bi-door-open"></i>
        <span>Logout</span>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SideNavComp',

  computed: {
    ...mapGetters({
      userName: 'getUserName'
    })
  },
  methods: {
    handleLogout() {
      this.$store.commit('CLEAR_LOGIN_INFO')
      this.$router.push({ name: 'Auth' })
    },
    goToDashboard() {
      this.$router.push({ name: 'HomeView' })
    }
  }
}
</script>

<style scoped>
#side-nav {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
}
.cursor {
  cursor: pointer;
}

main > section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

section > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

img {
  width: 4.2rem;
}

div > .bi {
  font-size: 2rem;
}

span {
  font-size: 1rem;
  text-align: center;
}
</style>
