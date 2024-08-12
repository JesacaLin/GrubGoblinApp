<template>
  <h1>PERKS FOR JOINING</h1>
  <main id="perks-container">
    <section class="perk">
      <h2>Discover hidden food gems without breaking the bank.</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
    <section class="perk">
      <h2>Build your ultimate foodie bucket list and share with the community.</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
      </p>
    </section>
    <section class="perk">
      <h2>Become the local food expert in your friend group.</h2>
      <br />
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
  display: flex;
  justify-content: space-around;
  gap: 30px;
  padding: 0 20px 20px 20px;
}

.perk {
  border: black solid 1px;
  width: 100%;
  padding: 2rem;
  border-radius: 25px;
}

h1 {
  text-align: center;
  padding-bottom: 1rem;
  font-weight: 800;
}

h2 {
  font-size: 1.3rem;
}

p {
  font-size: 1.2rem;
}

@media only screen and (max-width: 1400px) {
  #perks-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .perk {
    width: 33rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
