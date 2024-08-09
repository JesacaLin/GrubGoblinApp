<template>
  <main id="deal-detail-view">
    <section class="side-nav-comp">
      <SideNavComp />
    </section>
    <section class="top-of-page-comp">
      <TopOfPageComp />
    </section>
    <section class="deal-detail-container">
      <CardDetailsComp />
    </section>
  </main>
</template>

<script>
import SideNavComp from '../components/SideNavComp.vue'
import TopOfPageComp from '@/components/TopOfPageComp.vue'
import CardDetailsComp from '@/components/CardDetailsComp.vue'

export default {
  name: 'DealDetailsView',
  components: {
    SideNavComp,
    TopOfPageComp,
    CardDetailsComp
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
