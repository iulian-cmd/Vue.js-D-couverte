<template>
  <div>
    <input v-model="keyword" placeholder="search" />
    <div v-for="(f, index) of filterImages" :key="index">
      <img :src="f.url" />
      <p>{{ f.description }}</p>
    </div>
  </div>
</template>

<script>
const images = [
  {
    url: "https://images.dog.ceo/breeds/affenpinscher/n02110627_4597.jpg",
    description: "affenpinscher",
  },
  {
    url: "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
    description: "akita",
  },
  {
    url: "https://images.dog.ceo/breeds/retriever-golden/n02099601_7771.jpg",
    description: "golden retriever",
  },
];
export default {
  name: "App",
  data() {
    return { keyword: "", images };
  },
  computed: {
    filterImages() {
      const { images, keyword } = this;
      return images.filter(({ description }) => description.includes(keyword));
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>