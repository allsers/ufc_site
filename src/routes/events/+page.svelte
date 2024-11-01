
<svelte:head>
	<title>UFC Events</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { base } from '$app/paths';
	import EventsList from './EventsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
    onMount(async () => {
    });
	

</script>
<div id="section1">
	<h1 in:fly={{ y: -50, duration: 500 }}>UFC Events</h1>
	<EventsList data={data} />
</div>

<style>
	:global(body) {
		overflow-x: hidden;
	}
	#section1 {
		padding: 0;
		background: 
		linear-gradient(
			to bottom,
			rgba(9,9,19,1) 0%,
			rgba(9,9,19,1) 2.5%,
			transparent 10%
		),
		linear-gradient(
			90deg, 
			rgba(9,9,19,1) 15%, 
			rgba(38,38,78,1) 50%, 
			rgba(9,9,19,1) 85%
		);
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		width: 100%;
		box-sizing: border-box
	}

	h1 {
		z-index: 999;
		position: sticky;
		top: 40px;
		backdrop-filter: blur(3px);
		background: linear-gradient(to bottom, 
			rgba(9,9,19,0.6) 0%,
			rgba(9,9,19,0.3) 50%,
			rgba(9,9,19,0) 100%
		);
		width: 100%;
		justify-content: center;
		display: flex;
		padding: 0;
		margin: 0;
		padding: 1.2rem 0;
		color: var(--color-text1);
		font-family: var(--font-bebas);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 0.15rem white;
	}
</style>