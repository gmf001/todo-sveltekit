<script>
	import { todos } from '$lib/store/TodoStore';
	import TodoInput from './TodoInput.svelte';
</script>

<section class="mt-8 space-y-4">
	{#each $todos as todo (todo.id)}
		<TodoInput {todo} />
	{/each}
</section>
