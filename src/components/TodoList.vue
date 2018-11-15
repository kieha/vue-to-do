<script>

import Todo from './Todo';

export default {
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    toggleCompleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      const isComplete = this.todos[todoIndex].done;
      this.todos[todoIndex].done = !isComplete;
    },
  },
  name: 'TodoList',
  props: ['todos'],
  render() {
    return (
      <div>
        <p>Completed Tasks: {this.todos.filter(todo => todo.done === true).length}</p>
        <p>Pending Tasks: {this.todos.filter(todo => todo.done === false).length}</p>
        {this.todos.map((todo, key) => (
          <Todo
            key={key}
            onDeleteTodo={(todo) => this.deleteTodo(todo)}
            onToggleCompleteTodo={(todo) => this.toggleCompleteTodo(todo)}
            todo={todo}
          />
        ))}
      </div>
    );
  },
};

</script>
