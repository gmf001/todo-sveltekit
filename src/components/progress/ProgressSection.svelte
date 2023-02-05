<script>
	import { todos } from '$lib/store/TodoStore';
	import ProgressBar from './ProgressBar.svelte';

	export let completedPercentage = 0;
	export let progressPercentage = 0;

	$: totalCount = $todos.length;
	$: completedCount = $todos.filter((todo) => todo.completed).length;
	$: progressCount = $todos.filter((todo) => !todo.completed).length;
	$: completedPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
	$: progressPercentage = totalCount > 0 ? Math.round((progressCount / totalCount) * 100) : 0;
</script>

<section class="mt-10">
	<h3 class="font-bold text-xl text-gray-three">Progress</h3>
	<div class="mt-8 space-y-8">
		<ProgressBar title="In Progress" percentage={progressPercentage} />
		<ProgressBar title="Completed" percentage={completedPercentage} />
	</div>
</section>
