<script>

import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  render() {
    return (
      <div id='app'>
        <div class='ui three column centered grid'>
          <div class='column'>
            <TodoList />
            <CreateTodo />
          </div>
        </div>
      </div>
    );
  },
};

</script>
