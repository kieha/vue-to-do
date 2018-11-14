<script>
export default {
	data() {
		return {
      isCreating: false,
      title: '',
      project: '',
    };
	},
  methods: {
    closeForm() {
      this.isCreating = false;
    },
    createTodo() {
      if (this.title.length > 0 && this.project.length > 0) {
        this.$emit('createTodo', {
          title: this.title,
          project: this.project,
          done: false,
        });
        this.title = '';
        this.project = '';
        this.isCreating = false;
      }
    },
    handleInputChange(e) {
      this[e.target.name] = e.target.value;
    },
    openForm() {
      this.isCreating = true;
    },
  },
	name: 'CreateTodo',
  render() {
    return (
      <div class="ui basic content center aligned segment">
        {!this.isCreating
        ?
        <button class="ui basic button icon" onClick={this.openForm}>
          <i class="plus icon"></i>
        </button>
        :
        <div class="ui centered card">
          <div class="content">
            <div class="ui form">
              <div class="field">
                <label>Title</label>
                <input type="text" name="title" value={this.title} onInput={this.handleInputChange} />
              </div>
              <div class="field">
                <label>Project</label>
                <input type="text" name="project" value={this.project} onInput={this.handleInputChange} />
              </div>
              <div class="ui two button attached buttons">
                <button class="ui basic blue button" onClick={this.createTodo}>Create</button>
                <button class="ui basic red button" onClick={this.closeForm}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    );
  },
};
</script>
