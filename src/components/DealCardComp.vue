<template>
  <main id="deal-card" @click="navigateToDetails">
    <section class="card-image-container">
      <img :src="imageURL" alt="image of food" class="card-image" />
    </section>
    <section class="deal-preview">
      <h1>{{ deal.place.place_name }}</h1>
      <h5>{{ convertArray }}</h5>
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
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'

const images = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
  11: img11
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
      let num = Math.floor(Math.random() * 11) + 1
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
  width: 20.5rem;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
}

.deal-preview {
  padding: 0.5rem 1rem;
}

TODO
/* double check that this looks right with longer descriptions... */

.fade-out {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
