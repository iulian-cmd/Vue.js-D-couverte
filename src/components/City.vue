<template>
  <div class="row justify-content-md-center">
    <div class="weather">
      <p>
        <span id="title">{{ name }}</span>
      </p>
      <p>
        Weather: <span id="redcolor">{{ weather }}</span>
      </p>
      <p>
        Temperature: <span id="redcolor">{{ temperature }}</span> °C.
      </p>
      <p>
        Pressure: <span id="redcolor">{{ pressure }}</span>
      </p>
      <p>
        Humidity: <span id="redcolor">{{ humidity }}</span>
        %.
      </p>
      <p>
        Wind Speed: <span id="redcolor">{{ wind }}</span> m/s.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: ["name", "weather", "temperature", "pressure", "humidity", "wind"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  display: flex;
  justify-content: space-between;
}
.weather {
  width: 300px;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-weight: bold;
  color: rgb(60, 108, 148);
  padding: 5px 15px 15px 15px;
  box-shadow: 2px 2px 10px rgb(86, 105, 129);
  margin: 15px 15px 15px 5px;
}

ul {
  list-style-type: none;
}
li {
  display: -ms-inline-flexbox;
}
a {
  color: #42b983;
}

p {
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  border-style: dashed;
  border-width: 1px;
  padding: 0 10px 0px 5px;
  border-right-width: 12px;
  border-color: rgb(60, 108, 148);
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  width: 90%;
}
#line {
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
}

#redcolor {
  color: red;
}

#title {
  text-transform: uppercase;
  color: red;
  font-size: 1.3em;
  text-align: center;
}
</style>

