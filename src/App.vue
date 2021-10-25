<template>
  <div><CitiesList msg="Welcome to Your Vue.js App" /></div>
</template>

<script>
import CitiesList from "./components/CitiesList.vue";

export default {
  name: "App",
  components: {
    CitiesList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
