<template>
  <main id="top-of-page">
    <section>
      <form action="/search" method="GET">
        <input type="text" name="query" id="input" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <button type="button">Locate Me!</button>
    </section>
    <section>
      <button type="button">+ Deal</button>
      <i class="bi bi-person-circle"></i>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TopOfPageComp'
}
</script>

<style scoped>
#top-of-page {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
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
</style>
