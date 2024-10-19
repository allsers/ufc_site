<script lang="ts">
	import { onMount } from 'svelte';
	import HeroSection from './HeroSection.svelte';
	import FightersSection from './FightersSection.svelte';

    onMount(() => {
	})
	
</script>

<svelte:head>
	<title>UFC</title>
	<meta name="description" content="UFC website for previous events, athletes in the UFC, and more." />
</svelte:head>

<HeroSection />
<FightersSection />