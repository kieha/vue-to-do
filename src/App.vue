<script>
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

export default {
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
  name: 'App',
  render() {
    return (
      <div id='app'>
        <div class='ui three column centered grid'>
          <div class='column'>
            <TodoList todos={this.todos} />
            <CreateTodo onCreateTodo={(newTodo) => this.todos.push(newTodo)} />
          </div>
        </div>
      </div>
    );
  },
};
</script>
