<template>
  <main id="card-details">
    <section class="left">
      <img src="../assets/2.png" alt="placeholder image" />
      <h3>{{ deal.place.address }}</h3>
      <button>Directions</button>
    </section>
    <section class="right-top">
      <button>+ Review</button>
      <button>Update</button>
      <button>Delete</button>
      <i class="bi bi-suit-heart hide-on-mobile"></i>
    </section>
    <section class="right-middle">
      <div class="place-title">
        <h1>
          {{ deal.place.place_name }}
        </h1>
        <i class="bi bi-suit-heart hide-on-desktop"></i>
      </div>

      <h3>Type: {{ deal.type_of_deal }}</h3>
      <h3>Days Available: {{ convertArray }}</h3>
      <h3 v-if="deal.start_time !== null">Start Time: {{ deal.start_time }}</h3>
      <h3 v-if="deal.end_time !== null">End time: {{ deal.end_time }}</h3>
      <h3 v-else>Time: Available all day!</h3>
      <h3>Description: {{ deal.deal_description }}</h3>
    </section>
    <section class="right-bottom">
      <h3>Reviews:</h3>
      <div class="reviews" v-for="review in deal.review" v-bind:key="review">
        <h4>{{ review.stars }} stars</h4>
        <h4>{{ review.review_description }}</h4>
        <h4>- {{ review.reviewed_by }}</h4>
      </div>
    </section>
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
  },
  computed: {
    convertArray() {
      return this.deal.days_of_week.join(', ')
    }
  }
}
</script>

<style scoped>
#card-details {
  border: solid 1px black;
  border-radius: 30px;
  height: 100%;
  padding: 2rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.3fr 2fr 2fr;
  grid-template-areas:
    'left right-top'
    'left right-middle'
    'left right-bottom';
}

.left {
  grid-area: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.right-top {
  grid-area: right-top;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.right-middle {
  grid-area: right-middle;
}

.right-bottom {
  grid-area: right-bottom;
}

.hide-on-desktop {
  display: none;
}

img {
  width: 85%;
  border-radius: 30px;
}

h1 {
  font-size: 2.5rem;
}

.reviews {
  padding-bottom: 1rem;
}

.bi {
  font-size: 2rem;
}

@media only screen and (max-width: 1000px) {
  #card-details {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 0.2fr;
    grid-template-areas:
      'right-middle'
      'left'
      'right-bottom'
      'right-top';
  }
  img {
    width: 100%;
  }
  .place-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right-top {
    justify-content: center;
  }

  .hide-on-mobile {
    display: none;
  }
  .hide-on-desktop {
    display: inline-block;
  }
}
</style>
