<script lang="ts">
	import background_image from '$lib/images/BackgroundImage.png';
	import fighter_middle from '$lib/images/fighter-middle.png';
	import fighter_left from '$lib/images/fighter-left.png';
	import fighter_right from '$lib/images/fighter-right.png';
	import heavyweight from '$lib/images/heavyweight.png';
	import featherweight from '$lib/images/featherweight.png'
	import lightning from '$lib/images/lightning.png'
	
	import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {

		window.addEventListener('scroll', function() {
			const scrollPos = window.scrollY;
			const maxScroll = document.documentElement.scrollHeight - this.window.innerHeight;
			const darkness = scrollPos / maxScroll
			this.document.documentElement.style.setProperty('--darkness', `${darkness}`);
		})


		const section2 = document.getElementById('section2');
        const options = {
			root: null,
			rootMargin: '50% 0px 10% 0px',
			threshold: 1,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {

					children?.forEach((child) => {
						(child as HTMLElement).style.opacity = "1";
					});

				} else {
					children?.forEach((child) => {
						(child as HTMLElement).style.transition = 'opacity 0.5s ease';
						(child as HTMLElement).style.opacity = '0';
					});
				}
			})
		}, options);
		const children = section2?.querySelectorAll('*');
		children?.forEach((child) => observer.observe(child));

		return () => {
			children?.forEach((child) => observer.unobserve(child));
		}
    });
	
</script>

<svelte:head>
	<title>UFC</title>
	<meta name="description" content="UFC Home Page" />
</svelte:head>
<section id = "section1" style='background-image: url({background_image});'>
	<h1>As Real As It Gets.</h1>
</section>

<section id = "section2">

	<div class="left">
		<img src={lightning} id = "lightning1" alt="">
		<img id = 'featherweight' src={featherweight} alt="Featherweight ufc fighter">
	</div>

	<div class="card">
		<div class="textbox">
			<button on:click={() => goto('/athletes')}>Check Out Our Fighters!</button>
		</div>
		<div class="fighters">
			<div class="images">
				<div class="image1">
					<img id="img1" src={fighter_left} alt="img1">
				</div>
				<div class="image2">
					<img id="img2" src={fighter_middle} alt="img2">	
				</div>
				<div class="image3">
					<img id="img3" src={fighter_right} alt="img3">
				</div>
			</div>
		</div>
	</div>
	<div class="right">
		<img src={lightning} id = "lightning2" alt="">
		<img id = 'heavyweight' src={heavyweight} alt="Heavyweight ufc fighter">
	</div>
	
</section>

<style>
	#section1 {
		background-attachment: fixed;
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
		background-color: rgba(0, 0, 0, var(--darkness, 0));
		width: 100%;
		height: 100%;
		z-index: 2;
		top: 0;
		left: 0;
	}

	#section2 {
		background: rgb(38,38,78);
		background: radial-gradient(circle, rgba(38,38,78,1) 0%, rgba(9,9,19,1) 45%);
		height: 100vh;
		width: 100%;
		display: flex;
		text-transform: uppercase;
		z-index: 2;
		overflow: hidden;
	}

	#heavyweight {
		height: 85vh;
		align-self: flex-end;
		transform: translateX(-25%);
		margin: 0 150px;
	}

	.left, .right {
		align-self: flex-end;
	}

	#lightning1 {
		position: absolute;
		height: 50rem;
		z-index: -1;
		margin: -18rem -3.5rem;
	}
	
	#lightning2 {
		position: absolute;
  		transform: scaleX(-1);
		height: 50rem;
		z-index: -1;
		margin: -12.75rem -16.5rem;
	}
	#featherweight {
		height: 80vh;
		margin: 0 -9.5rem;
	}
	#section2 > * {
		opacity: 0;
		transition: opacity 0.5s ease, transform 0.5s ease;
	}

	h1 {
		width: 100%;
		align-self: center;
		color: var(--color-text1);
		font-family: var(--font-bebas);
		font-size: 3.25rem;
		position: fixed;
		z-index: 1;
	}

	button {
		transform: translateY(55%);
		font-size: 2.25rem;
		background-color: #17161e;
		align-self: center;
		color: var(--color-text1);
		font-family: var(--font-bebas);
		cursor: pointer;
		z-index: 2;
		padding: 12px 24px;
		border: none;
		border-radius: 2.5px;
		transition: all 0.3s ease;
	}

	.textbox {
		display: flex;
		justify-content: center;
		
	}

	.fighters {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.card {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-self: center;
		height: 57.5vh;
		width: 100vw;
	}

	.images {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		border-radius: 2.5px;
	}
	.image1 {
		transform: translateX(40%);
	}
	.image2 {
		z-index: 1;
	}
	.image3 {
		transform: translateX(-40%);
	}
	#img1, #img3 {
		width: 35rem;
		height: 35rem;
		object-fit: cover;
	}

	#img2 {
		width: 40rem;
		height: 40rem;
		object-fit: cover;
	}

</style>
