import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Todo = {
	id: string;
	text: string;
	completed: boolean;
};

const data = browser ? JSON.parse(localStorage.getItem('st-todos-list') ?? '[]') : [];

export const todos = writable<Todo[]>(data);

todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem('st-todos-list', JSON.stringify(value));
	}
});

export const addTodo = (text: string) => {
	const newTodo = { id: uuidv4(), text, completed: false };
	todos.update((currentTodos) => [newTodo, ...currentTodos]);
};

export const deleteTodo = (id: string) => {
	todos.update((currentTodos) => {
		return currentTodos.filter((todo: Todo) => todo.id !== id);
	});
};

export const toggleTodo = (id: string) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo: Todo) => {
			if (todo.id === id) {
				console.log('here');
				return { ...todo, completed: !todo.completed };
			}

			return todo;
		});
	});
};

export const editTodo = (id: string, text: string) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo: Todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}

			return todo;
		});
	});
};
