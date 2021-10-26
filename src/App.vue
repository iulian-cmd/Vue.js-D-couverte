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
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
nav {
  width: 320px;
  background: #fffce2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  font-weight: bold;
  color: rgb(60, 108, 148);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 10px rgb(141, 139, 116);
  margin: 10px 10px 10px 0px;
  width: 100%;
}
</style>