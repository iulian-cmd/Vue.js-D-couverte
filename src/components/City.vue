<template>
  <div class="hello">
    <p>
      La ville est <span id="redcolor">{{ ville }}</span
      >.
    </p>
    <p>
      Le temps est <span id="redcolor">{{ weather }}</span
      >.
    </p>
    <p>
      La temperature est <span id="redcolor">{{ temperature }}</span> °C.
    </p>
    <p>
      La date est <span id="redcolor">{{ date }}</span
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "City",
  props: ["ville", "weather", "temperature", "date"],

  // components: {
  //   Button,
  // },
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
  border-width: 3px;
  border-left-width: 15px;
  border-right-width: 15px;
  border-color: rgb(250, 20, 20);
}

#redcolor {
  color: red;
}
</style>

