import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from './types';

export const actions = {
	createTodo: ({ commit }, todo) => commit(CREATE_TODO, { ...todo, done: false }),
	deleteTodo: ({ commit }, todo) => commit(DELETE_TODO, todo),
	editTodo: ({ commit }, todo) => commit(EDIT_TODO, { todo }),
	toggleTodo: ({ commit }, todo) => commit(EDIT_TODO, { todo, done: !todo.done }),
};

export default actions;
