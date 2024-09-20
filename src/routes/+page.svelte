<script>
	import background_image from '$lib/images/BackgroundImage.png';
	import fighter_middle from '$lib/images/fighter-middle.png';
	import fighter_left from '$lib/images/fighter-left.png';
	import fighter_right from '$lib/images/fighter-right.png';
	import { onMount } from 'svelte';

    onMount(() => {
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
						child.style.opacity = 1;
					});

				} else {
					children?.forEach((child) => {
						child.style.transition = 'opacity 0.5s ease';
						child.style.opacity = 0;
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
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section id = "section1" style='background-image: url({background_image});'>
	<h1>As Real As It Gets.</h1>
</section>

<section id = "section2">
	<div class="textbox">
		<button>Check Out Our Fighters!</button>
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

	#section2 {
		background-color: #090913;
		height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		overflow: hidden;
		text-transform: uppercase;
		flex-wrap: wrap;
		z-index: 2;
	}
	#section2 > * {
		opacity: 0;
		transition: opacity 0.5s ease, transform 0.5s ease;
	}

	.thing {
		opacity: 1;
	}

	h1 {
		width: 100%;
		align-self: center;
		color: var(--color-text1);
		font-family: var(--font-bebas);
		position: fixed;
		z-index: 1;
	}

	button {
		all: unset;
		transform: translateY(55%);
		font-size: 2rem;
		background-color: #17161e;
		padding:10px;
		width: 100%;
		align-self: center;
		color: var(--color-text1);
		font-family: var(--font-bebas);
		border-radius: 5px;
		cursor: pointer;
		z-index: 2;
	}

	.textbox {

		display: flex;
		justify-content: center;
	}

	.images {
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(-7.5%);
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
		width: 400px;
		height: 400px;
		object-fit: cover;
	}

	#img2 {
		width: 500px;
		height: 500px;
		object-fit: cover;
	}

</style>
