// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <h5 style="display: inline" v-if='newtodo'>Add
        <pre style="display: inline">{{newtodo}}</pre> to the todo list?
      </h5>
      <h5 style="display: inline" v-else>Add an Item below</h5>
        <br />
      <input style='outline:none' type='text' v-model='newtodo' @keyup.enter="addTodo"/>
      <input style='outline:none' type='submit' value='Add Todo' v-on:click="addTodo"/>
      <ul>
        <li style="list-style:none"
            v-for='(todo, index) in todos'
            v-on:click="() => toggleTodo(todo)"
        >
            <span v-if='todo.completed == true' style='text-decoration:line-through;'>{{ todo.value }}</span>
            <span v-else style='text-decoration:none;'>{{ todo.value }}</span>
          <input
            type='submit'
            value='delete'
            v-on:click='todos.splice(index, 1)'/>
        </li>
      </ul>
    </div>`,
  data: {
    message: 'testing',
    todos: [],
    newtodo: '',
  },
  methods: {
    addTodo() {
      if (!this.newtodo) return;
      this.todos.push({
        value: this.newtodo,
        completed: false,
      });
      this.newtodo = '';
    },
    toggleTodo(todo) {
      const val = todo;
      if (todo.completed) val.completed = false;
      else val.completed = true;
    },
  },
});
