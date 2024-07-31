<template>
  <main>
    <section>
      <form action="/search" method="GET">
        <input type="text" name="query" placeholder="Search..." />
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

<style scoped></style>
