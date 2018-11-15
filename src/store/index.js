import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
	todos: [
		{
			done: true,
			project: 'Personal',
			title: 'Learn Vue.js',
		},
		{
			done: false,
			project: 'AT Labs',
			title: 'Admin Dashboard',
		},
	],
};

export default new Vuex.Store({ actions, mutations, state });
