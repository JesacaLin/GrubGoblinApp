<template>
  <main id="nav">
    <img @click="goToDashboard" src="../assets/logo-1.png" alt="site logo" />

    <i class="bi bi-list"></i>
  </main>
</template>

<script>
export default {
  name: 'TopOfPageMobileComp',

  methods: {
    goToDashboard() {
      this.$router.push({ name: 'HomeView' })
    }
  }
}
</script>
<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

img {
  width: 3rem;
  height: 100%;
  cursor: pointer;
}
.bi {
  font-size: 3rem;
}
</style>
