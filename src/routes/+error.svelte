<script>
	import { page } from '$app/stores';
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading class="text-3xl font-bold text-center">{$page.error?.message}</Heading>
