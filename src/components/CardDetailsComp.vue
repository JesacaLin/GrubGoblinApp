<template>
  <main id="card-details">
    <h1>{{ deal.place.place_name }}</h1>
    <h3>{{ deal.place.address }}</h3>
    <h3>Category: {{ deal.type_of_deal }}</h3>
    <h3>Description: {{ deal.deal_description }}</h3>
    <h3>Availability: {{ deal.days_of_week }}</h3>
    <h3>Start Time: {{ deal.start_time }}</h3>
    <h3>End time: {{ deal.end_time }}</h3>
    <h2>Reviews:</h2>
    <div class="reviews" v-for="review in deal.review" v-bind:key="review">
      <h3>Rating: {{ review.stars }}</h3>
      <h3>Review: {{ review.review_description }}</h3>
      <h3>By: {{ review.reviewed_by }}</h3>
    </div>
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
