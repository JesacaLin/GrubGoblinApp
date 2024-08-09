<template>
  <main id="deal-detail-view">
    <section class="side-nav-comp">
      <SideNavComp />
    </section>
    <section class="top-of-page-comp">
      <TopOfPageComp />
    </section>
    <section class="deal-detail-container">
      <CardDetailsComp :deal="deal" v-if="deal" />
    </section>
  </main>
</template>

<script>
import SideNavComp from '../components/SideNavComp.vue'
import TopOfPageComp from '@/components/TopOfPageComp.vue'
import CardDetailsComp from '@/components/CardDetailsComp.vue'
import { fetchDealById } from '../service/DataService'

export default {
  name: 'DealDetailsView',
  components: {
    SideNavComp,
    TopOfPageComp,
    CardDetailsComp
  },
  data() {
    return {
      deal: null
    }
  },

  methods: {
    async fetchDealById(dealId) {
      try {
        const data = await fetchDealById(dealId)
        this.deal = data
      } catch (error) {
        console.error('Error fetching deal by id', error)
      }
    }
  },

  created() {
    const id = this.$route.params.dealId
    this.fetchDealById(id)
  }
}
</script>

<style scoped>
#deal-detail-view {
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas:
    'side-nav-comp top-of-page-comp'
    'side-nav-comp deal-detail-container';
  height: 100vh;
}

.side-nav-comp {
  grid-area: side-nav-comp;
}

.top-of-page-comp {
  grid-area: top-of-page-comp;
}

.deal-detail-container {
  grid-area: deal-detail-container;
}
</style>
