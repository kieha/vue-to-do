<template>
  <div id="app">
    <div class='ui three column centered grid'>
      <div class='column'>
        <TodoList v-bind:todos="todos" />
        <CreateTodo v-on:create-todo="addTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

export default {
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [
        {
          done: false,
          project: 'Personal',
          title: 'Learn Vue',
        },
        {
          done: false,
          project: 'AT Labs',
          title: 'Admin Dashboard',
        },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
  name: 'app',
};
</script>
