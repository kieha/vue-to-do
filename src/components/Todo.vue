<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'editTodo',
      'toggleTodo',
    ]),
    handleInputChange(e) {
      this.todo[e.target.name] = e.target.value;
      this.editTodo(this.todo);
    },
    hideForm() {
      this.isEditing = false;
    },
    showForm() {
      this.isEditing = true;
    },
  },
  name: 'Todo',
  props: ['todo'],
  render() {
    return (
      <div class='ui centered card'>
        {!this.isEditing
        ?
        <div class='content'>
          <div class='header'>{this.todo.title}</div>
          <div class='meta'>{this.todo.project}</div>
          <div class='extra content'>
            <span class="right floated trash icon" onClick={() => this.deleteTodo(this.todo)}>
              <i class="trash icon"></i>
            </span>
            <span class="right floated edit icon" onClick={this.showForm}>
            <i class="edit icon"></i>
            </span>
          </div>
        </div>
        :
        <div class='content'>
          <div class='ui form'>
            <div class='field'>
              <label>Title</label>
              <input type='text' name='title' value={this.todo.title} onInput={this.handleInputChange} />
            </div>
            <div class='field'>
              <label>Project</label>
              <input type='text' name='project' value={this.todo.project} onInput={this.handleInputChange} />
            </div>
            <div class='ui two button attached buttons'>
              <button class='ui basic blue button' onClick={this.hideForm}>Close</button>
            </div>
          </div>
        </div>
        }
        <div
          class={`ui bottom attached basic button ${this.todo.done ? 'green' : 'red'}`}
          onClick={() => this.toggleTodo(this.todo)}
        >
          {this.todo.done ? 'Completed' : 'Pending'}
        </div>
      </div>
    );
  },
};

</script>

<style lang='css'>
  .icon {
    cursor: pointer;
  }
</style>
