<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-on:click="openForm" v-show="!isCreating">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="title" type="text" ref="title" defaultValue="">
          </div>
          <div class="field">
            <label>Project</label>
            <input v-model="project" type="text" ref="project" defaultValue="">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="createTodo">Create</button>
            <button class="ui basic red button" v-on:click="closeForm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
    openForm() {
      this.isCreating = true;
    },
    createTodo() {
      if (this.title.length > 0 && this.project.length > 0) {
        this.$emit('create-todo', {
          title: this.title,
          project: this.project,
          done: false,
        });
        this.title = '';
        this.project = '';
        this.isCreating = false;
      }
    },
  },
};
</script>
