<script lang="ts">
	import { onMount } from 'svelte';
	import HeroSection from './HeroSection.svelte';
	let FightersSection: any;
	onMount(async () => {
		const module = await import('./FightersSection.svelte');
		FightersSection = module.default;
	});
</script>

<svelte:head>
	<title>UFC</title>
	<meta name="description" content="UFC website for previous events, athletes in the UFC, and more." />
</svelte:head>

<HeroSection />
{#if FightersSection}
  <svelte:component this={FightersSection} />
{:else}
  <p>Loading fighters...</p>
{/if}

