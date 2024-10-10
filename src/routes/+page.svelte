<script lang="ts">
	import background_image from '$lib/images/BackgroundImage.png';
	import wood_texture from '$lib/images/wood-texture.png';
	import norse_image from '$lib/images/norse.png';
	import vikingsymbol from '$lib/images/vikingsymbol.png';
	import bluebanner from '$lib/images/left-banner.png';
	import shield from '$lib/images/vikingetogt_skjold.png';
	import axe from '$lib/images/vikingetogt_axe.png';
	import leikislogo1 from '$lib/images/leikislogo1.png';
	import leikislogo2 from '$lib/images/leikislogo2.png';
	import flyer from '$lib/images/flyer.png';
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

<svelte:head>
	<title>Vargrclan</title>
	<meta name="description" content="Viking home page" />
</svelte:head>
<section id = "section1" style='background-image: url({background_image});'>
	<h1>Óttalausir Ráðar Norðr</h1>
	<h2 id="eng-slogan">Fearless raiders of the north</h2>
</section>

<section id = "section2" style='background-image: url({norse_image});'>
	<div class="flex" style='background-image: url({wood_texture});'>
		<h2>Our History</h2>
		<div class="text-content">
			<p class="full-text">
				The Vargrclan has a storied history rooted in the fierce spirit of the Viking Age. Emerging from the rugged fjords of Scandinavia, this clan became renowned for their seafaring prowess and warrior culture. Led by their formidable chieftain, Eirik Ulfrhjarta (Wolfheart), the Vargrclan embarked on daring raids and explorations across the North Sea, establishing a legacy that would echo through generations. They upheld traditions that honored their ancestors while adapting to new realities, revering the sea and performing rituals before voyages to ensure safe passage. Today, the legacy of the Vargrclan endures, embodying the courage and resilience that defined their journey.
			</p>
			<p class = "short-text">
				The Vargrclan has a rich Viking heritage, known for our seafaring skills and warrior culture. Under chieftain Eirik Ulfrhjarta, we undertook daring raids across the North Sea. We honor our ancestors with rituals for safe voyages. Our enduring legacy embodies the courage and resilience that define us.
			</p>
		</div>
	</div>
</section>

<section id = "section3" style='background-image: url({vikingsymbol});'>
	<div class="showcase">
		<div class="imgs">
			<div class="side">
				<img id="banner" src="{bluebanner}" alt="banner">
			</div>
			<div class="mid">
				<h2 style="background-image: url({wood_texture});" id="showcase-header">Showcase</h2>
				<img src="{shield}" alt="shield" id="shield">
				<div class="row">
					<img id="leikislogo" src="{leikislogo1}" alt="logo1">
					<img src="{axe}" alt="axe">
					<img id="leikislogo" src="{leikislogo2}" alt="logo2">
				</div>
			</div>
			<div class="side">
				<img id="banner" src="{bluebanner}" alt="banner">
			</div>
		</div>
		<div class="center">
			<img id="flyer" src="{flyer}" alt="flyer">
		</div>
		
	</div>
</section>

<style>
	#section1 {
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		background-position: center 55px;
		margin: 0;
		min-height: 100vh;
		max-width: 100vw;
		display: block;
		display: flex;
		flex-direction: column;
		justify-content: center;
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

	#section2 {
		background-size: cover;
		padding-top: 6%;
	
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: flex-end;
		z-index: 2;
		overflow: hidden;
		height: 85vh;
	}
	#section3 {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: flex-end;
		z-index: 2;
		overflow: hidden;
		height: 180vh;
		background-color: white;

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	@media (max-width: 1105px) {
		#section2 {
			height: 92.5vh;
			background-position: -36vw;
		}
	}

	@media (max-width: 525px) {
		#section2 {
			height: 92.5vh;
			background-position: -77.5vw;
		}
	}

	.flex {
		display: flex;
		background-color: rgb(178, 167, 154);
		flex-direction: column;

		align-items: center;
		text-align: center;
		background-size: cover;
		background-position: center;
		overflow-x: hidden;
		justify-content: center;
		width: 50%;
		border-radius: 5%;

		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
		
	}

	.showcase {
		text-align: center;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-content: space-between;
		overflow-x: hidden;
		justify-content: center;
	}
	.row {
		justify-content: space-around;
		align-items: center;
		display: flex;
		width: 100%;
		padding-bottom: 5%;
	}
	.imgs {
		height: 100%;
		width: 100%;
		display: flex;

		justify-content: space-between;
		
	}
	.side {
		display: flex;
		flex-direction: column;
		justify-self: center;
	}
	#leikislogo {
		width: 250px;
		height: 250px;
	}
	#shield {
		display: flex;
		align-self: center;
		width: 300px;
		height: 300px;
	}
	#banner {
		max-width: 275px;
		border-radius: 1%;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
	}
	.center {
		width: 100vw;
		display: flex;
		justify-content: center;
	}
	#flyer {
		display: flex;
		justify-self: center;
		max-width: 500px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.75);

	}
	@media (max-width: 1215px) {
		.side {
			display: none;
		}
		.imgs {
			justify-content: center;
		}
	}
	.mid {
		display: flex;
		text-align: center;
		flex-wrap: wrap;
		flex-direction: column;
		justify-self: center;
	}
	#showcase-header {
		background-size: cover;
		background-position: center;
		display: flex;
		font-family: var(--font-header);
		align-self: center;
		border-radius: 4%;
		padding: 2%;
		padding-left: 20%;
		padding-right: 20%;
		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
	}

	h1 {
		width: 100%;
		align-self: center;
		color: #ffffff;
		font-family: var(--font-header);
		font-size: 2.2em;
		position: fixed;
		z-index: 1;
		text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
	}

	#eng-slogan {
		color: #efefef;
		margin-top: 100px;
		display: flex;
		position: fixed;
		align-self: center;
		justify-content: center;
		text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
	}
	h2 {
		display: flex;
		justify-self: center;
		text-align: center;
		font-family: var(--font-norse);
		color: #ffffff;
		
	}
	.text-content {
		padding: 1.5%;
	}
	p {
		font-family: var(--font-norse);
		color: #ffffff;
		display: flex;
		font-size: 1.2rem;
		padding: 1%;
	}
	@media only screen and (max-width: 600px) {
		.full-text {
			display: none;
		}
		.short-text {
			display: block; 
		}
	}
	@media only screen and (min-width: 600px) {
		.full-text {
			display: block;
		}
		.short-text {
			display: none;
		}
	}
</style>
