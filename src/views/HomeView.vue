<template>
  <main id="home-view">
    <section class="side-nav-comp">
      <SideNavComp />
    </section>
    <section class="top-of-page-comp">
      <TopOfPageComp />
    </section>
    <section class="mini-card-container-1">
      <RecentDealsContainer />
    </section>
    <section class="mini-card-container-2">
      <NewPublicDealsContainer />
    </section>
  </main>
</template>

<script>
import MiniCardContainer from '@/components/MiniCardContainer.vue'
import RecentDealsContainer from '@/components/RecentDealsContainer.vue'
import SideNavComp from '../components/SideNavComp.vue'
import TopOfPageComp from '@/components/TopOfPageComp.vue'
import NewPublicDealsContainer from '@/components/NewPublicDealsContainer.vue'

export default {
  name: 'HomeView',
  components: {
    SideNavComp,
    TopOfPageComp,
    RecentDealsContainer,
    NewPublicDealsContainer
  }
}
</script>

<style scoped>
#home-view {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas:
    'side-nav-comp top-of-page-comp'
    'side-nav-comp mini-card-container-1'
    'side-nav-comp mini-card-container-2';
  width: 100%;
  height: 100%;
}

.side-nav-comp {
  grid-area: side-nav-comp;
}

.top-of-page-comp {
  grid-area: top-of-page-comp;
}

.mini-card-container-1 {
  grid-area: mini-card-container-1;
}

.mini-card-container-2 {
  grid-area: mini-card-container-2;
}
</style>
