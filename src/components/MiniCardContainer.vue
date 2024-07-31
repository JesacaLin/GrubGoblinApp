<template>
  <main>
    <section class="section-title">
      <h4>{{ sectionTitle }}</h4>
      <button>Show All ></button>
    </section>
    <section class="mini-card-container"></section>
  </main>
</template>

//need to make the text interchangeable.

<script>
export default {
  name: 'MiniCardContainer',

  props: {
    sectionTitle: {
      type: String,
      default: 'YOUR RESULTS'
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.mini-card-container {
  border: black solid 1px;
  height: 300px;
  border-radius: 30px;
}

.section-title {
  display: flex;
  justify-content: space-between;
}
</style>
