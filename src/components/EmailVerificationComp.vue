<template>
  <main>
    <h2>Thank you!</h2>
    <p>Please check your email for the verification link.</p>
    <button class="close-button" @click="$emit('close')">X</button>
  </main>
</template>

<script>
export default {
  name: 'EmailVerificationComp'
}
</script>

<style scoped>
main {
  position: relative;
}
</style>
