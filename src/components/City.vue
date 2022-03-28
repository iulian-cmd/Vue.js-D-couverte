<template class="bg-dark">

  <div class="row justify-content-md-center">
    <div class="weather">
      <p>
        <span id="title">{{ name }}</span>
      </p>
      <p>
        Weather: <span id="yellow">{{ weather }}</span>
      </p>
      
      <img src="http://openweathermap.org/img/wn/{{ icon }}@2x.png" />
     
      <p>
        Temperature: <span id="yellow">{{ temperature }}</span> °C.
      </p>
      <p>
        Pressure: <span id="yellow">{{ pressure }}</span>
      </p>
      <p>
        Humidity: <span id="yellow">{{ humidity }}</span>
        %.
      </p>
      <p>
        Wind Speed: <span id="yellow">{{ wind }}</span> m/s.
      </p>

      <p>
        Latitude: <span id="yellow">{{ latitude }}</span>
      </p>
      <p>
        Longitude: <span id="yellow">{{ longitude }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "weather",
    "icon",
    "temperature",
    "pressure",
    "humidity",
    "wind",
    "latitude",
    "longitude",
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather {
  width: 400px;
  height: auto;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-weight: bold;
  padding: 5px 15px 15px 15px;
  margin: 15px 15px 15px 5px;
  border-radius: 10px;
  border: azure solid 2px;
}

.weather:before {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #d35400;
  transition: 0.5s;
  transform: scale(0.9);
  z-index: -1;
}

.weather:hover:before {
  transform: scale(1.2);
  box-shadow: 0 0 15px #d35400;
  filter: blur(3px);
}

.weather:hover {
  color: #ffa502;
  box-shadow: 0 0 15px #d35400;
  text-shadow: 0 0 15px #d35400;
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
  border-width: 1px;
  padding: 0 10px 0px 5px;
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  width: 90%;
}
#line {
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
}

#yellow {
  color: rgb(238, 241, 7);
}

#title {
  text-transform: uppercase;
  color: rgb(238, 241, 7);
  font-size: 1.3em;
  text-align: center;
}

img{
  width: 120px;
  height: 120px;
}
</style>
