<template>
  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
// import { RouterLink } from 'vue-router'

export default {
  components() {
    RouterView
  },
  data() {}
}
</script>

<style scoped></style>
