<template>
  <MiniCardContainer :deals="deals" sectionTitle="YOUR RECENT DEALS" />
</template>

<script>
import { getRecentDeals } from '@/service/DataService'
import MiniCardContainer from '@/components/MiniCardContainer.vue'

export default {
  name: 'RecentDealsContainer',

  components: {
    MiniCardContainer
  },

  data() {
    return {
      deals: []
    }
  },

  methods: {
    async fetchRecentDeals() {
      try {
        const data = await getRecentDeals()
        this.deals = data
      } catch (error) {
        console.error('Error fetching recent deals:', error)
      }
    }
  },

  mounted() {
    this.fetchRecentDeals()
  }
}
</script>
