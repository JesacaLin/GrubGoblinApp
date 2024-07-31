<template>
  <main>
    <section class="side-nav-comp">
      <SideNavComp />
    </section>
    <section class="top-of-page-comp">
      <TopOfPageComp />
    </section>
    <section class="miniCardContainer-1">
      <MiniCardContainer sectionTitle="Title for Container 1" />
    </section>
    <section class="miniCardContainer-2">
      <MiniCardContainer sectionTitle="Title for Container 2" />
    </section>
  </main>
</template>

<script>
import MiniCardContainer from '@/components/MiniCardContainer.vue'
import SideNavComp from '../components/SideNavComp.vue'
import TopOfPageComp from '@/components/TopOfPageComp.vue'

export default {
  name: 'HomeView',
  components: {
    SideNavComp,
    TopOfPageComp,
    MiniCardContainer
  }
}
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row: auto;
  gap: 1rem;
  grid-template-areas:
    'SideNavComp TopOfPageComp TopOfPageComp TopOfPageComp TopOfPageComp TopOfPageComp'
    'SideNavComp MiniCardContainer MiniCardContainer MiniCardContainer MiniCardContainer MiniCardContainer'
    'SideNavComp MiniCardContainer2 MiniCardContainer2 MiniCardContainer2 MiniCardContainer2 MiniCardContainer2';

  .side-nav-comp {
    grid-area: SideNavComp;
  }

  .top-of-page-comp {
    grid-area: TopOfPageComp;
  }

  .miniCardContainer-1 {
    grid-area: MiniCardContainer;
  }

  .miniCardContainer-2 {
    grid-area: MiniCardContainer2;
  }
}
</style>
