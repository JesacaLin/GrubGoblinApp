<template>
  <MiniCardContainer :deals="deals" sectionTitle="NEW COMMUNITY DEALS" />
</template>

<script>
import { getPublicDeals } from '../service/DataService'
import MiniCardContainer from '../components/MiniCardContainer.vue'

export default {
  name: 'NewPublicDealsContainer',

  components: {
    MiniCardContainer
  },

  data() {
    return {
      deals: []
    }
  },

  methods: {
    async fetchPublicDeals() {
      try {
        const data = await getPublicDeals()
        this.deals = data
      } catch (error) {
        console.error('Error fetching public deals:', error)
      }
    }
  },

  mounted() {
    this.fetchPublicDeals()
  }
}
</script>
