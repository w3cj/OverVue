<template>
  <div id="app">
    <!-- <h1 v-if="isAwesome">Is Awesome</h1>
    <h1 v-if="!isAwesome">Not Awesome</h1> -->
    <form @submit.prevent="addTodo">
      <label for="newTodo">New Todo</label>
      <input v-model="newTodo" type="text" name="newTodo" id="newTodo" value="">
      <button type="submit" name="button">Add</button>
    </form>
    <ul>
      <li :key="todo" v-for="todo in todos">{{todo}}</li>
    </ul>
    <h2>There are {{todoLength}} todos.</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTodo: '',
      isAwesome: false,
      todos: ['Learn Vue.js', 'Walk the Dog', 'Eat Dinner'],
    };
  },
  mounted() {

  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },
  },
  computed: {
    todoLength() {
      return this.todos.length;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
