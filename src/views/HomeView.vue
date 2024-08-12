<template>
  <main id="home-view">
    <section class="hide-on-desktop">
      <TopOfPageMobileComp />
    </section>
    <section class="side-nav-comp hide-on-mobile">
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
import RecentDealsContainer from '../components/RecentDealsContainer.vue'
import SideNavComp from '../components/SideNavComp.vue'
import TopOfPageComp from '../components/TopOfPageComp.vue'
import NewPublicDealsContainer from '../components/NewPublicDealsContainer.vue'
import TopOfPageMobileComp from '../components/TopOfPageMobileComp.vue'

export default {
  name: 'HomeView',
  components: {
    SideNavComp,
    TopOfPageComp,
    RecentDealsContainer,
    NewPublicDealsContainer,
    TopOfPageMobileComp
  }
}
</script>

<style scoped>
#home-view {
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas:
    'side-nav-comp top-of-page-comp'
    'side-nav-comp mini-card-container-1'
    'side-nav-comp mini-card-container-2';

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

.mini-card-container-1 {
  grid-area: mini-card-container-1;
}

.mini-card-container-2 {
  grid-area: mini-card-container-2;
}

@media only screen and (max-width: 1400px) {
}

@media only screen and (max-width: 1000px) {
  #home-view {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1rem;
    grid-template-areas:
      'hide-on-desktop'
      'top-of-page-comp'
      'mini-card-container-1'
      'mini-card-container-2';

    height: 100vh;
  }

  .hide-on-desktop {
    grid-area: hide-on-desktop;
    display: block;
  }

  .hide-on-mobile {
    display: none;
  }
}
</style>
