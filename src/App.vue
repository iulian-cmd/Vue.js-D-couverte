<template>
  <nav>
    <p><img src="./assets/weather.png" width="100" /></p>
    <ul>
      <li><router-link to="/">Weather Home</router-link><br /></li>
      <li>
        <router-link to="/cities">Cities</router-link>
      </li>
    </ul>
  </nav>
  <div id="appVue">
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
