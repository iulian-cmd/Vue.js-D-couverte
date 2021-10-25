<template>
  <div class="hello">
    <p>
      Pour la <span id="redcolor">{{ name }}</span>
    </p>
    <p>
      Le temps est <span id="redcolor">{{ weather }}</span>
    </p>
    <p>
      La temperature est <span id="redcolor">{{ temperature }}</span> °C.
    </p>
    <p>
      Pour la date de <span id="redcolor">{{ timeFormat }}.</span>
    </p>
    <span id="line">°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°</span>
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
.hello {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-weight: bold;
  color: blueviolet;
}
body {
  background-color: bisque;
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
  background: #fffce2;
}
#line {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2em;
}

#redcolor {
  color: red;
}
</style>

