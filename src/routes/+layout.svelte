<script lang="ts">
	import Header from './Header.svelte';
	import { onMount } from 'svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	onMount(() => {
		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
			
			if (scrollTop + clientHeight >= scrollHeight) {
				document.documentElement.style.backgroundColor = 'black';
			} else {
				document.documentElement.style.backgroundColor = 'rgba(9,9,19,1)';
			}
			};
			window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;

	}

</style>
