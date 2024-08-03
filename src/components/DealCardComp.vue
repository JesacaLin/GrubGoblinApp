<template>
  <main class="deal-card">
    <h3>{{ deal.type_of_deal }}</h3>
    <p>{{ deal.deal_description }}</p>
  </main>
</template>

<script>
export default {
  name: 'DealCardComp',

  props: {
    deal: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.deal-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 30px;
  width: 20rem;
}

p {
  text-overflow: true;
}
</style>
