<template>
  <div class="hello">
    <h1>The weather of the cities:</h1>
    <City
      v-for="item in cities"
      :key="item.id"
      :name="item.name"
      :weather="item.weather"
      :temperature="item.temperature"
      :timeFormat="item.updatedAt.toLocaleString()"
    />
  </div>
</template>

<script>
import City from "./City.vue";
import { format } from "timeago.js";

export default {
  name: "CitiesList",
  data() {
    return {
      cities: [
        {
          id: 1,
          name: "Ville 1",
          weather: "Ensoleillé",
          temperature: 22.0,
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Ville 2",
          weather: "Peu nuageux",
          temperature: 19.5,
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Ville 3",
          weather: "Toride",
          temperature: 29.0,
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Ville 4",
          weather: "Pluie",
          temperature: 10.5,
          updatedAt: new Date(),
        },
      ],
    };
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

#liste_weather {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2em;
  font-style: italic;
  font-weight: bold;
  border-style: dashed;
  border-width: 3px;
  border-left-width: 15px;
  border-right-width: 15px;
  border-color: rgb(20, 158, 250);
}
</style>
