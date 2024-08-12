<template>
  <main id="mini-card-container">
    <section class="section-title">
      <h4>{{ sectionTitle }}</h4>
      <button>Show All ></button>
    </section>
    <section class="container-body">
      <DealCardComp
        v-for="deal in deals"
        :key="deal.deal_id"
        :deal="deal"
        @navigate="goToDealDetails"
      />
    </section>
  </main>
</template>

<script>
import DealCardComp from './DealCardComp.vue'

export default {
  name: 'MiniCardContainer',

  components: {
    DealCardComp
  },
  props: {
    deals: {
      type: Array,
      required: true
    },
    sectionTitle: {
      type: String,
      required: true
    }
  },

  methods: {
    goToDealDetails(dealId) {
      this.$router.push({ name: 'DealDetails', params: { dealId } })
    }
  }
}
</script>
<style scoped>
#mini-card-container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
}

main > .container-body {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 1.5rem;
  border: black solid 1px;
  border-radius: 30px;
}

main > .section-title {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1400px) {
  main > .container-body {
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.5rem;
    gap: 1rem;
  }
}

@media only screen and (max-width: 1000px) {
  main > .container-body {
    flex-direction: column;
  }
}
</style>
