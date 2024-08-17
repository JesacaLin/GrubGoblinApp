<template>
  <section class="nav">
    <button @click="goBack">
      <h4>Back</h4>
      <i class="bi bi-arrow-right"></i>
    </button>
  </section>

  <main id="card-details">
    <section class="left">
      <img src="../assets/2.png" alt="placeholder image" />
      <h3>{{ deal.place.address }}</h3>
      <button @click="launchGoogleMaps">Get Directions</button>
    </section>
    <section class="right-top">
      <button>+ Review</button>
      <button>Update</button>
      <button>Delete</button>
    </section>
    <section class="right-middle">
      <div class="place-title">
        <h2>
          {{ deal.place.place_name }}
        </h2>
        <i class="bi bi-suit-heart"></i>
      </div>

      <h3>Type: {{ deal.type_of_deal }}</h3>
      <h3>Days Available: {{ convertArray }}</h3>
      <h3 v-if="deal.start_time !== null">Start Time: {{ deal.start_time }}</h3>
      <h3 v-if="deal.end_time !== null">End time: {{ deal.end_time }}</h3>
      <h3 v-else>Time: Available all day!</h3>
      <h3>Description:</h3>
      <h3>{{ deal.deal_description }}</h3>
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
  },
  methods: {
    launchGoogleMaps() {
      const destination = this.deal.place.address
      const formattedAddress = destination.replace(/\s+/g, '+')
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${formattedAddress}`
      const googleMapsAppUrl = `comgooglemaps://?daddr=${formattedAddress}`

      if (this.isMobile()) {
        window.location.href = googleMapsAppUrl
      } else {
        window.open(googleMapsUrl, '_blank')
      }
    },

    isMobile() {
      return /Android|iPhone|iPad/i.test(navigator.userAgent)
    },

    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
  cursor: pointer;

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

#card-details {
  border: #0b1215 solid 2px;
  border-radius: 30px;
  height: 100%;
  padding: 2rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 2fr 0.3fr;
  grid-template-areas:
    'left right-middle'
    'left right-bottom'
    'right-top right-top';
}

.left {
  grid-area: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-top: 2rem;
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
  padding-top: 2rem;

  .place-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.right-bottom {
  grid-area: right-bottom;
  border-radius: 30px;
  background-color: rgb(247, 244, 244);
  padding: 2rem;
}

.hide-on-desktop {
  display: none;
}

img {
  width: 85%;
  border-radius: 30px;
}

h2 {
  font-size: 2rem;
}

.reviews {
  padding-bottom: 1rem;
}

.bi-suit-heart {
  font-size: 2rem;
}

@media only screen and (max-width: 1000px) {
  #card-details {
    grid-template-columns: 1fr;
    grid-template-rows: 0.9fr 1.3fr 1fr 0.3fr;
    grid-template-areas:
      'right-middle'
      'left'
      'right-bottom'
      'right-top';
  }
  img {
    width: 100%;
  }

  .right-top {
    justify-content: center;
  }

  .place-title {
    h2 {
      font-size: 1.7rem;
    }

    .bi {
      font-size: 2rem;
    }
  }

  .hide-on-mobile {
    display: none;
  }
  .hide-on-desktop {
    display: inline-block;
  }
}
</style>
