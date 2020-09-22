<template>
  <div id="app">
    <h1>To do with Vuex</h1>
    <div class="todo-add">
      <input 
        type="text"
        placeholder="Type your plan here"
        v-model="currentTodo"
      >
      <button
        :disabled="!currentTodo"
        @click="newTodo(currentTodo)"
      >Add todo</button>
    </div>
    <div class="todo-show">
      <ol>
        <li  v-for="todo in todos" :key="todo">{{todo}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "App",
  data: () => ({
    currentTodo: ''
  }),
  methods: {
    ...mapActions({
      updateTodo: 'UPDATE_TODO',
    }),
    newTodo(value) {
      this.updateTodo( value);
      this.currentTodo = '';
    }
  },
  computed: {
    ...mapGetters({
      todos: 'GET_TODO'
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

input, button {
  height: 40px;
  font-size: 18px;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

button {
  margin-top: 35px;
  max-width: 625px;
  height: 64px;
  background-color: #43BF88;
  color: #34495D;
  border: none;
  outline: none;
}

button[disabled="disabled"] {
  opacity: .6;
}

.todo-add {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.todo-show {
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
  text-align: left;
}

.todo-show ol li {
  font-size: 18px;
  line-height: 28px;
}
</style>
