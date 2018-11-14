<template lang="html">
  <div class="ui centered card">
    <!-- show content catd when not editing -->
    <div class="content" v-show="!isEditing">
      <div class="header">{{todo.title}}</div>
      <div class="meta">{{todo.project}}</div>
      <div class='extra content'>
        <span class="right floated edit icon" style="" v-on:click="showForm">
          <i class="edit icon"></i>
        </span>
        <span class="right floated trash icon" v-on:click="deleteTodo(todo)">
          <i class="trash icon"></i>
        </span>
      </div>
    </div>
    <!-- show form when in edit mode -->
    <div class="content" v-show="isEditing">
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input type="text" v-model="todo.title">
        </div>
        <div class="field">
          <label>Project</label>
          <input type="text" v-model="todo.project">
        </div>
        <div class="ui two button attached buttons">
          <button class="ui basic blue button" v-on:click="hideForm">Close</button>
        </div>
      </div>
    </div>
    <div class="ui bottom attached basic button" v-bind:class="[todo.done ? 'green' : 'red']" v-on:click="toggleCompleteTodo(todo)">{{todo.done ? 'Completed' : 'Pending'}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    toggleCompleteTodo(todo) {
      this.$emit('toggle-complete-todo', todo);
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    hideForm() {
      this.isEditing = false;
    },
    showForm() {
      this.isEditing = true;
    },
  },
  props: ['todo'],
};
</script>

<style lang="css">
  .icon {
    cursor: pointer;
  }
</style>
