<template>
  <div>
    <router-link to="/">Page Accueil</router-link><br />
    <router-link to="/cities">CitiesList</router-link>
    <router-view />
  </div>
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
