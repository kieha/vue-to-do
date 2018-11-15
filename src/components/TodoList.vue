<script>

import Todo from './Todo';

export default {
  name: 'TodoList',
  render() {
    const todos = this.$store.state.todos;
    
    return (
      <div>
        <p>Completed Tasks: {todos.filter(todo => todo.done === true).length}</p>
        <p>Pending Tasks: {todos.filter(todo => todo.done === false).length}</p>
        {todos.map((todo, key) => (
          <Todo
            key={key}
            todo={todo}
          />
        ))}
      </div>
    );
  },
};

</script>
