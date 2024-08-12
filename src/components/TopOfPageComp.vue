<template>
  <main id="top-of-page">
    <section class="hide-on-mobile">
      <form action="/search" method="GET">
        <input type="text" name="query" id="input" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <button type="button">Locate Me!</button>
    </section>
    <section class="add-deal-section">
      <button type="button" @click="showAddDeal = true">+ Deal</button>
      <i class="bi bi-person-circle hide-on-mobile"></i>
    </section>
    <div v-if="showAddDeal" class="modal-backdrop" @click="closeModal">
      <div class="modal" @click.stop>
        <AddADealComp @close="closeModal" />
      </div>
    </div>
    <section id="locate-me" class="locate-me hide-on-desktop">
      <img src="../assets/locate-me-icon.png" alt="Locate me button" />
      <button type="button">Locate Me!</button>
    </section>
  </main>
</template>

<script>
import AddADealComp from './AddADealComp.vue'

export default {
  name: 'TopOfPageComp',

  components: {
    AddADealComp
  },

  data() {
    return {
      showAddDeal: false
    }
  },
  methods: {
    closeModal() {
      this.showAddDeal = false
    }
  }
}
</script>

<style scoped>
#top-of-page {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  height: 100%;
}

.hide-on-desktop {
  display: none;
}

section {
  display: flex;
  gap: 1rem;
}

#input {
  padding: 10px 30px;
  border-radius: 30px;
  border: solid 1px black;
  margin-right: 1rem;
}

section > .bi {
  font-size: 1.8rem;
}

@media only screen and (max-width: 1000px) {
  .hide-on-mobile,
  .add-deal-section {
    display: none;
  }

  .hide-on-desktop {
    display: block;
  }

  #locate-me {
    gap: 1rem;
  }
}
</style>
