<template>
  <h1>The weather of the cities:</h1>
  <div class="container">
    <City
      v-for="item in cities"
      :key="item.id"
      :name="item.name"
      :weather="item.weather[0].description"
      :temperature="item.main.temp"
      :humidity="item.main.humidity"
      :pressure="item.main.pressure"
      :wind="item.wind.speed"
    />
  </div>
</template>

<script>
import City from "./City.vue";
import { format } from "timeago.js";
import axios from "axios";

export default {
  name: "MeteoApi",
  data() {
    return {
      cities: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=144368ae5ab81649b4a9760716fde5a1"
      )
      .then((response) => {
        this.cities = response.data.list;
        // console.log(response);
      });
  },
  components: {
    City,
  },
  computed: {
    // a computed getter
    timeFormat() {
      return format(this.date); //je l'utilise dans le template en haut
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
}
</style>
