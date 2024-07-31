<template>
  <main>
    <section>
      <img src="../assets/logo-1.png" alt="site logo" />
      <h1>Hi!</h1>
      <i class="bi bi-house">Dashboard</i>
      <i class="bi bi-suit-heart">My Deals</i>
      <i class="bi bi-people">Community Deals</i>
    </section>
    <section>
      <i class="bi bi-door-open">Logout</i>
    </section>
  </main>
</template>

<script>
export default {
  name: 'SideNavComp'
}
</script>

<style scoped>
main {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
}

img {
  width: 4rem;
}

.bi {
  width: 3rem;
}
</style>
