<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	// This line tells SvelteKit to generate HTML for your pages at build time.
	export const prerender = true;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}