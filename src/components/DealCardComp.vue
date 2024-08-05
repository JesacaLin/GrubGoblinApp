<template>
  <main id="deal-card">
    <section class="deal-map"></section>
    <section class="deal-preview">
      <h1>{{ deal.place.place_name }}</h1>
      <h5>{{ deal.days_of_week }}</h5>
      <p class="fade-out">Description: {{ deal.deal_description }}</p>
    </section>
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
#deal-card {
  border: 1px solid #ccc;
  border-radius: 30px;
  width: 20rem;
}

.deal-map {
  width: 100%;
  background-color: black;
  height: 50%;
  border-radius: 30px 30px 0px 0px;
}

.deal-preview {
  padding: 1rem;
}

TODO
/* double check that this looks right with longer descriptions... */

.fade-out {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
