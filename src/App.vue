<template>
  <div id="app">
    <h2>hi </h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
import Vue from 'vue';

const App = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
  },
});
export default App;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todos {
  list-style: none;
}
</style>
