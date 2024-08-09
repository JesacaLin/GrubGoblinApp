<template>
  <main id="card-details">
    <h1>Establishment Name:</h1>
    <h2>Address:</h2>
    <!-- <h2>Type of Deal: {{ deal.type_of_deal }}</h2> -->
    <!-- <h2>Deal Description: {{ deal.deal_description }}</h2> -->
    <!-- <h2>Day of the week available: {{ deal_description }}</h2> -->
    <h2>Start Time:</h2>
    <h2>End time:</h2>
    <h3>Stars:</h3>
    <h3>Review:</h3>
  </main>
</template>

<script>
export default {
  name: 'CardDetailsComp',

  props: {
    deal: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
