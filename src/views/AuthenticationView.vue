<template>
  <main id="grid-container">
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

export default {
  components: {
    HeroImageComp,
    AuthOptionsComp,
    PerksContainerComp
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
  padding: 2rem 10rem 1rem 10rem;
  height: 100%;
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
</style>
