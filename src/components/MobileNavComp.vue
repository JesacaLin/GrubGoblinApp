<template>
  <main class="desktop-hide">
    <li @click="goToDashboard"><i class="bi bi-house"></i>Home</li>
    <li><i class="bi bi-suit-heart"></i>My Deals</li>
    <li><i class="bi bi-patch-plus-fill"></i>Add</li>
    <li><i class="bi bi-search"></i>Search</li>
    <li><i class="bi bi-person-circle"></i>Profile</li>
  </main>
</template>
<script>
export default {
  name: 'MobileNavComp',

  methods: {
    goToDashboard() {
      this.$router.push({ name: 'HomeView' })
    }
  }
}
</script>
<style scoped>
.desktop-hide {
  display: none;
}

@media only screen and (max-width: 1000px) {
  .desktop-hide {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #fffafa;
    border-top: 1px solid #c7c3c3;
    padding: 9px 0;
    cursor: pointer;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
  }

  /* li:active,
  li:hover {
    background-image: var(--gradient-15);
    width: 5rem;
    height: 100%;
    border-radius: 20px;
  } */

  .bi {
    font-size: 1.5rem;
  }
}
</style>
