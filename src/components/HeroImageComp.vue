<template>
  <main>
    <img src="../assets/hero-1.jpg" alt="dog pic" />
    <h3>"I'll be having that"</h3>
  </main>
</template>

<script></script>

<style scoped>
main {
  text-align: center;
}
img {
  max-width: 33rem;
}

img:hover {
  animation: var(--animation-spin) forwards;
  animation-timing-function: var(--ease-elastic-in-out-2);
  animation-duration: 2.5s;
}
</style>
