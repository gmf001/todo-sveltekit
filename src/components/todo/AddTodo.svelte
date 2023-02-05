<script>
	import { addTodo } from '$lib/store/TodoStore';
</script>

<section class="flex justify-between">
	<h3 class="text-xl font-bold text-gray-three">Checklist</h3>
	<button
		class="group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-base font-semibold text-gray-five outline-2 outline-offset-2 outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five"
		type="button"
		on:click={() => addTodo('')}>Add Task</button
	>
</section>
