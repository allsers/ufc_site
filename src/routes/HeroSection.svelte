<script lang="ts">
    import { fly } from 'svelte/transition';
    import background_image from '$lib/images/BackgroundImage.webp';
    import { onMount } from 'svelte';
    

    onMount(() => {
        const setSectionHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setSectionHeight();
        window.addEventListener('resize', setSectionHeight);

        window.addEventListener('scroll', function() {
            const scrollPos = window.scrollY;
            const maxScroll = this.window.innerHeight;
            const darkness = Math.min(1, scrollPos/maxScroll)
            this.document.documentElement.style.setProperty('--darkness', `${darkness}`);
        })
    });
</script>

<svelte:head>
  <link rel="preload" as="image" href={background_image}>
</svelte:head>

<section id = "section1" style='background-image: url({background_image});'>
	<div class="content-wrapper">
		<h1 in:fly={{ y: -50, duration: 550 }}>As Real As It Gets.</h1>	
	</div>
</section>

<style>
    :root {
        --vh: 100vh;
    }
    #section1 {
        position: relative;
        background-color: (9,9,19,1);
		background-attachment: fixed;
		background-position: center;
		background-size:cover;
		margin: 0;
		height: 100dvh;
		width: 100%;
		display: flex;
		align-items: center;
	}

	#section1::before {
		content: '';
		position: absolute;
		background-color: rgba(0, 0, 0, var(--darkness));	
		width: 100%;
		height: calc(var(--vh) * 100);
		z-index: 2;
		top: 0;
		left: 0;
	}
	.content-wrapper {
        position: relative;
        z-index: 2;
        text-align: center;
    }

    h1 {
		width: 100%;
		align-self: center;
		color: var(--color-text1);
		font-family: var(--font-bebas);
		font-size: clamp(2rem, 2.75vw, 2.75rem);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 0.08em white;
		position: fixed;
		z-index: 2;
	}

    @media (prefers-reduced-motion: reduce) {
        h1 {
            transition: none;
        }
    }
	@media screen and (max-width: 480px) {
        #section1 {
            background-position: 60% center;
            background-attachment: scroll;
        }
    }
	
    @media screen and (max-width: 768px) {
        #section1 {
            background-position: 60% center;
        }
    }
</style>