<template lang="html">
  <section>
    <h1>{{message}}</h1>
    <div v-if="isAwesome">
      IS Awesome!
    </div>
    <div v-else>
      Not awesome...
    </div>
    <form @submit.default="addCat()">
      <label for="name">Cat Name</label>
      <input v-model="catName" type="text" name="name" id="name" value="">
      <button type="submit" name="button">Add Cat</button>
    </form>
    <ul>
      <li v-for="cat in cats">{{cat}}</li>
    </ul>
    <div v-for="gif in giphys">
      <img :src="gif.images.fixed_height_small.url" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloDvlpDnvr',
  data() {
    return {
      catName: '',
      message: 'Hello Develop Denver!',
      isAwesome: true,
      cats: ['Brian', 'Tabby', 'Snuffles'],
      giphys: [],
      user: {},
    };
  },
  mounted() {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=cats')
      .then(res => res.json())
      .then((result) => {
        this.giphys = result.data;
      });
  },
  methods: {
    addCat() {
      this.cats.push(this.catName);
      this.catName = '';
    },
  },
};
</script>

<style lang="css">
</style>
