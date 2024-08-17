<template>
  <main id="deal-detail-view">
    <section class="mobile-top-nav hide-on-desktop">
      <TopOfPageMobileComp />
    </section>
    <section class="side-nav-comp">
      <SideNavComp />
    </section>
    <section class="mobile-nav-comp hide-on-desktop">
      <MobileNavComp />
    </section>
    <section class="top-of-page-comp">
      <TopOfPageComp />
    </section>
    <section class="deal-detail-container">
      <CardDetailsComp v-if="showDetails" :deal="deal" />
      <!-- <CardDetailsComp v-if="showDetails" :deal="deal" @show-map="handleShowMap" />
      <MapsComp v-if="showMapComp" :address="address" /> -->
    </section>
  </main>
</template>

<script>
import SideNavComp from '../components/SideNavComp.vue'
import TopOfPageComp from '../components/TopOfPageComp.vue'
import CardDetailsComp from '../components/CardDetailsComp.vue'
import { fetchDealById } from '../service/DataService'
import TopOfPageMobileComp from '../components/TopOfPageMobileComp.vue'
import MobileNavComp from '../components/MobileNavComp.vue'

export default {
  name: 'DealDetailsView',
  components: {
    SideNavComp,
    TopOfPageComp,
    CardDetailsComp,
    TopOfPageMobileComp,
    MobileNavComp
  },
  data() {
    return {
      deal: {},
      showDetails: true,
      // showMapComp: false,
      address: ''
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

    // handleShowMap(address) {
    //   this.address = address
    //   this.showDetails = false
    //   this.showMapComp = true
    // }
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
  grid-template-rows: 1fr 7fr;
  gap: 1rem;
  grid-template-areas:
    'side-nav-comp top-of-page-comp'
    'side-nav-comp deal-detail-container';
  height: 100vh;
}

.hide-on-desktop {
  display: none;
}

.side-nav-comp {
  grid-area: side-nav-comp;
}

.top-of-page-comp {
  grid-area: top-of-page-comp;
}

.deal-detail-container {
  grid-area: deal-detail-container;
  padding: 0 3rem 3rem 2rem;
  padding-bottom: 6rem;
}

@media only screen and (max-width: 1000px) {
  #deal-detail-view {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 5fr;
    gap: 1rem;
    grid-template-areas:
      'mobile-top-nav'
      'deal-detail-container';
    height: 100vh;
  }

  .hide-on-desktop {
    display: block;
  }

  .side-nav-comp,
  .top-of-page-comp {
    display: none;
  }

  .deal-detail-container {
    padding-bottom: 10rem;
  }
}
</style>
