<template>
  <div class="bg-dark pt-5">
    <div class="container">
      <div class="text-light">
        <h1>The weather of the cities:</h1>
        <br />
        <p v-if="loading">Page is loading</p>
        <!-- <p id="" v-if="yellow" error != "null">There is an error on the page</p> -->
      </div>
      <div>
        <div class="align-content-end">
          <form class="d-flex">
            <input
              id="search"
              class="form-control me-2 bg-dark text-light"
              v-model="searchQuery"
              placeholder="Fast Search..."
            />
          </form>
        </div>
      </div>
      <div class="d-flex justify-content-between flex-wrap flex-row m-1 p-1">
        <City
          v-for="item in cities"
          :key="item.id"
          :name="item.name"
          :weather="item.weather[0].description"
          :icon="item.weather[0].icon"
          :temperature="item.main.temp"
          :humidity="item.main.humidity"
          :pressure="item.main.pressure"
          :wind="item.wind.speed"
          :latitude="item.coord.lat"
          :longitude="item.coord.lon"
        />
      </div>
      console.log(data.coord.lat);
    </div>
    <div id="map">
      <Map />
    </div>
  </div>
</template>

<script>
import City from "./City.vue";
import { format } from "timeago.js";
import axios from "axios";
// import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { onMounted } from "vue";
import Map from "./Map.vue";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    City,
    Map,
  },
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
    //do we support geolocation
  },
  mounted() {
    this.loading = true;
    // la methode axios est appeléé automatiquement
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/find?lat=45.5662672&lon=5.9203636&cnt=30&cluster=yes&lang=fr&units=metric&appid=9767ef07402664fcd10f16702c6da167"
      )
      .then((response) => {
        this.cities = response.data.list; // les infos de la liste de données sont rec et inserées dans notre liste vide
        // console.log(response);
      })
      .catch((e) => (this.error = e))
      .finally(() => (this.loading = false));
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
  padding: 5px 20px 10px 20px;
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
#yellow {
  color: #ffa502;
}

#search {
  width: 50vh;
  height: auto;
  padding: 5px 20px 10px 20px;
  margin: 10px;
}

#map {
  width: 100%;
  height: 500px;
  color: azure;
  border: 2px solid white;
  margin-bottom: 20px;
}
</style>
