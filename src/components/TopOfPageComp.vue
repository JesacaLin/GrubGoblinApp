<template>
  <main id="top-of-page">
    <section class="hide-on-mobile">
      <form action="/search" method="GET">
        <input type="text" name="query" id="input" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <button type="button">Deals Near Me</button>
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
      <div class="locate-me-intro-area">
        <h1>👋</h1>
        <h1 id="userName">{{ userName }}</h1>
      </div>
      <div class="locate-me-intro-area">
        <img src="../assets/locate-me-icon.png" alt="Locate me button" />
        <button type="button">Deals Near Me</button>
      </div>
    </section>
  </main>
</template>

<script>
import AddADealComp from './AddADealComp.vue'
import { mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters({
      userName: 'getUserName'
    })
  }
}
</script>

<style scoped>
#top-of-page {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.hide-on-desktop {
  display: none;
}

section {
  display: flex;
  gap: 1rem;
  align-items: center;
}

#input {
  padding: 10px 30px;
  border-radius: 30px;
  border: solid 2px #0b1215;
  margin-right: 1rem;
}

section > .bi {
  font-size: 2.5rem;
  padding-right: 1rem;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .locate-me-intro-area {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    gap: 0.7rem;
    padding-bottom: 2rem;
  }

  #userName {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
