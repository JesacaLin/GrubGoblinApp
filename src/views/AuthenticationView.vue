<template>
  <main id="grid-container">
    <section class="hide-on-desktop">
      <TopOfPageMobileComp />
    </section>
    <section class="hero-img">
      <HeroImageComp />
    </section>
    <section class="auth-options">
      <AuthOptionsComp />
    </section>
    <section class="perks-container">
      <PerksContainerComp />
    </section>
  </main>
</template>

<script>
import AuthOptionsComp from '@/components/AuthOptionsComp.vue'
import HeroImageComp from '../components/HeroImageComp.vue'
import PerksContainerComp from '../components/PerksContainerComp.vue'
import TopOfPageMobileComp from '../components/TopOfPageMobileComp.vue'

export default {
  components: {
    HeroImageComp,
    AuthOptionsComp,
    PerksContainerComp,
    TopOfPageMobileComp
  }
}
</script>
<style scoped>
#grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
  grid-template-areas:
    'hero-img auth-options'
    'perks-container perks-container';
  padding: 3rem 10rem 1rem 10rem;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}

.hide-on-desktop {
  display: none;
}

.hero-img {
  grid-area: hero-img;
}

.auth-options {
  grid-area: auth-options;
}

.perks-container {
  grid-area: perks-container;
}

@media only screen and (max-width: 1400px) {
  #grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'hide-on-desktop'
      'hero-img'
      'auth-options'
      'perks-container';
    padding: 10px;
  }

  .hide-on-desktop {
    grid-area: hide-on-desktop;
    display: block;
  }

  .auth-options {
    padding: 2rem;
  }
}
</style>
