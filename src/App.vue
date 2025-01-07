<template>
  <HomePage />
</template>
<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>

body {
  background-color: #f0f0f0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
