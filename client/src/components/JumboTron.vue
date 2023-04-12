<script setup>
defineProps({
    title: String,
    subtitle: String,
    buttonLabel: String
})
</script>

<template>
      <div class="jumbotron">
    <div class="container">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <button>{{ buttonLabel }}</button>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  background-image: url('https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2758&q=80');
  background-size: cover;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 800px;
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

p {
  font-size: 2rem;
  margin-bottom: 2rem;
}

button {
  background-color: #ffcc00;
  color: white;
  font-size: 2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ffb300;
}

</style>
