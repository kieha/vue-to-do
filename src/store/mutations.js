import {
	CREATE_TODO,
	DELETE_TODO,
	EDIT_TODO,
} from './types';

export const mutations = {
	[CREATE_TODO]: (state, todo) => state.todos.push(todo),
	[DELETE_TODO]: (state, todo) => state.todos.splice(state.todos.indexOf(todo), 1),
	[EDIT_TODO]: (state, {
		todo, done = todo.done, title = todo.title, project = todo.project,
	}) => { // figure out how to write this without all the args
		todo.title = title;
		todo.project = project;
		todo.done = done;
	},
};

export default mutations;
