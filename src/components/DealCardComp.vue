<template>
  <main id="deal-card" @click="navigateToDetails">
    <section class="card-image-container">
      <img v-lazy="imageURL" alt="image of food" class="card-image" />
    </section>
    <section class="deal-preview">
      <h1>{{ deal.place.place_name }}</h1>
      <h4>{{ convertArray }}</h4>
      <p class="fade-out">Description: {{ deal.deal_description }}</p>
    </section>
  </main>
</template>

<!-- TODO using photo placeholders right now but will hopefully pull from google places api at some point. -->
<script>
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'

const images = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5
}

export default {
  name: 'DealCardComp',

  props: {
    deal: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageURL: null
    }
  },
  methods: {
    navigateToDetails() {
      this.$emit('navigate', this.deal.deal_id)
    },

    imageSelector() {
      let num = Math.floor(Math.random() * 5) + 1
      this.imageURL = images[num]
    }
  },

  computed: {
    convertArray() {
      return this.deal.days_of_week.join(', ')
    }
  },

  created() {
    this.imageSelector()
  }
}
</script>

<style scoped>
#deal-card {
  border: 1px solid #ccc;
  border-radius: 30px;
  width: 45%;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
}

.deal-preview {
  padding: 0.5rem 1rem 1rem 1rem;
}

TODO
/* double check that this looks right with longer descriptions... */

.fade-out {
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 1400px) {
  .deal-preview {
    padding-bottom: 2rem;
  }
}

@media only screen and (max-width: 1000px) {
  #deal-card {
    width: 100%;
  }
}
</style>
