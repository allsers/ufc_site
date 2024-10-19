<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import background_image from '$lib/images/BackgroundImage.png';
    import { onMount } from 'svelte';

    onMount(() => {
        window.addEventListener('scroll', function() {
            const scrollPos = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - this.window.innerHeight;
            const darkness = scrollPos / maxScroll
            this.document.documentElement.style.setProperty('--darkness', `${darkness}`);
        })
    });
</script>
<section id = "section1" style='background-image: url({background_image});'>
	<h1 in:fly={{ y: -50, duration: 550 }}>As Real As It Gets.</h1>
</section>

<style>
    #section1 {
		background-attachment: fixed;
		background-position: center;
		background-size:cover;
		margin: 0;
		min-height: 100vh;
		max-width: 100vw;
		display: block;
		display: flex;
	}

	#section1::before {
		content: '';
		position: absolute;
		background-color: rgba(0, 0, 0, var(--darkness));
		width: 100%;
		height: 100vh;
		z-index: 2;
		top: 0;
		left: 0;
	}
    h1 {
		width: 100%;
		align-self: center;
		color: var(--color-text1);
		font-family: var(--font-bebas);
		font-size: 2.4rem;
		position: fixed;
		z-index: 1;
	}
</style>