<template>
  <div id="computed-basics">
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>
  </div>
</template>

<script>
export default {
  name: "City",
  // props: ["ville", "weather", "temperature", "date"],
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
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
  justify-content: space-between;
  align-items: flex-start;
  font-weight: bold;
  color: blueviolet;
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

p {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.8em;
}

#redcolor {
  color: red;
}
</style>

