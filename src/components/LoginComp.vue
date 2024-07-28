<template>
  <main>
    <img src="/src/assets/logo-1.png" alt="site logo" />
    <h1>Welcome Back!</h1>
    <button class="close-button" @click="$emit('close')">X</button>
    <form>
      <div>
        <label for="email">Email Address: </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="text" id="password" name="password" required />
      </div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'LoginComp'
}
</script>

<style scoped>
main {
  position: relative;
}

img {
  width: 10%;
  padding: 10px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
}

/* button:hover {
    background-color: #0056b3;
  } */
</style>
