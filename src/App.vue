<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style scoped>

body {
  background-color: #f0f0f0;
}

#app {
  min-height: 800px;
  border: 1px solid #bca931;
  border-radius: 20px;
  width: 500px;
  margin: 50px auto;
  background-color: #e3dec0;
}

</style>
