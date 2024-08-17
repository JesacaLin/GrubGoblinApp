<template>
  <main id="side-nav">
    <section>
      <img src="../assets/logo-1.png" alt="site logo" />
      <div>
        <h1>👋</h1>
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
  /* background-image: var(--gradient-15); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-right: 2px solid #0b1215;
  padding: 2rem;
}
.cursor {
  cursor: pointer;
}
.cursor:hover {
  background-image: var(--gradient-15);
  width: 10rem;
  padding: 1rem;
  border-radius: 20px;
}

main > section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.7rem;
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

#userName {
  font-size: 1.3rem;
}

h1 {
  font-size: 2rem;
}
</style>
