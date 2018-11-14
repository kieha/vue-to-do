<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
    <Todo v-for="(todo, key) in todos" v-bind:todo="todo" v-bind:key="key" v-on:delete-todo="deleteTodo" v-on:toggle-complete-todo="toggleCompleteTodo" />
  </div>
</template>

<script>
import Todo from './Todo';
export default {
  components: {
    Todo,
  },
  methods: {
    toggleCompleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      const isComplete = this.todos[todoIndex].done;
      this.todos[todoIndex].done = !isComplete;

    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  },
  props: ['todos'],
};
</script>
