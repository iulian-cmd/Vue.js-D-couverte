<template>
  <div class="weather">
    <p>
      <span id="redcolor">{{ name }}</span>
    </p>
    <p>
      Weather:<span id="redcolor">{{ weather }}</span>
    </p>
    <p>
      Temperature:<span id="redcolor">{{ temperature }}</span> °C.
    </p>
    <p>
      Updated at:<span id="redcolor">{{ timeFormat }}.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "City",
  props: ["name", "weather", "temperature", "timeFormat"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  display: flex;
  justify-content: space-between;

}
.weather {
  width: 300px;
  background: #fffce2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-weight: bold;
  color: blueviolet;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 10px rgb(141, 139, 116);
  margin: 20px;
}

ul {
  list-style-type: none;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}

p {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2em;
  border-style: dashed;
  border-width: 2px;
  padding: 0 15px 5px 5px;
  border-right-width: 12px;
  border-color: rgb(60, 108, 148);
}
#line {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2em;
}

#redcolor {
  color: red;
}
</style>

