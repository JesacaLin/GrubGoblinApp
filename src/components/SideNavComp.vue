<template>
  <main id="side-nav">
    <section>
      <img src="../assets/logo-1.png" alt="site logo" />
      <div>
        <h1>Hi!</h1>
        <h1>{{ userName }}</h1>
      </div>

      <div>
        <i class="bi bi-house"></i>
        <span>Dashboard</span>
      </div>
      <div>
        <i class="bi bi-suit-heart"></i>
        <span>My Deals</span>
      </div>
      <div>
        <i class="bi bi-people"></i>
        <span>Community Deals</span>
      </div>
    </section>
    <section>
      <div>
        <i class="bi bi-door-open"></i>
        <span>Logout</span>
      </div>
    </section>
  </main>
</template>

<script>
import store from '../store/index'

export default {
  name: 'SideNavComp',

  data() {
    return {
      userName: store.state.userName
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
