<template>
  <div>
    <h1>The weather of the cities:</h1>
    <p v-if="loading">Page is loading</p>
    <p id="redcolor" v-if="error != null">There is an error on the page</p>

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
  </div>
</template>

<script>
import City from "./City.vue";
import { format } from "timeago.js";
import axios from "axios";
// import { data } from "./data.js";

export default {
  name: "MeteoApi",
  data() {
    return {
      cities: [], // au début la liste des villes est vide
      loading: false,
      error: null,
    };
  },
  created() {
    // `this` points to the vm instance
    console.log("Page is loading: " + this.loading);
    console.log("There is an error: " + this.error);
  },
  mounted() {
    this.loading = true;
    // la methode axios est appeléé automatiquement
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/find?lat=45.59542754804813&lon=5.8724161776578105&cnt=20&cluster=yes&lang=fr&units=metric&appid=9767ef07402664fcd10f16702c6da167"
      )
      .then((response) => {
        this.cities = response.data.list; // les infos de la liste de données sont rec et inserées dans notre liste vide
        // console.log(response);
      })
      .catch((e) => (this.error = e))
      .finally(() => (this.loading = false));
    // this.cities = data; // data codé en dur
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
#redcolor {
  color: red;
}
</style>
