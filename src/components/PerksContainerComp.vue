<template>
  <h1>PERKS FOR JOINING</h1>
  <main id="perks-container">
    <section class="perk perk1">
      <h2>Discover hidden food gems without breaking the bank.</h2>
      <!-- <br /> -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
    <section class="perk perk2">
      <h2>Build your ultimate foodie bucket list and share with the community.</h2>
      <!-- <br /> -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
    </section>
    <section class="perk perk3">
      <h2>Become the local food expert in your friend group.</h2>
      <!-- <br /> -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </section>
  </main>
</template>
<script></script>

<style scoped>
#perks-container {
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 100%; */
  display: grid;
  grid-column: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'perk1 perk2 perk3';
  gap: 1.2rem;
  background-image: var(--gradient-15);
  border-radius: 30px;
  padding: 2.5rem;
}

.perk {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: #0b1215 solid 2px;
  padding: 2rem;
  border-radius: 20px;
  background-color: #fffafa;
}

h1 {
  text-align: center;
  padding-bottom: 1rem;
  font-weight: 800;
}

h2 {
  font-size: 1.2rem;
}

p {
  font-size: 1.1rem;
}

.perk1 {
  grid-area: perk1;
}

.perk2 {
  grid-area: perk2;
}

.perk3 {
  grid-area: perk3;
}

@media only screen and (max-width: 1400px) {
  #perks-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    margin: 1rem;
  }

  .perk {
    width: 30rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
