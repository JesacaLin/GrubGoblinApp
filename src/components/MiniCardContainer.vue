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
  justify-content: flex-start;
  padding: 2rem;
  gap: 1rem;
  border: black solid 1px;
  min-height: 22rem;
  /* TODO ----> do I need this??? */
  max-height: 100%;
  border-radius: 30px;
  width: 100%;
}

main > .section-title {
  display: flex;
  justify-content: space-between;
}
</style>
