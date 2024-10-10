<svelte:head>
	<title>Vargrclan</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import wood_texture from '$lib/images/wood-texture.png';
	import viking_background from '$lib/images/vikingbackground.png';
</script>

<section id="section1" style="background-image: url({viking_background});">
	<div class="container" style="background-image: url({wood_texture});">
		<h1>Recruitment</h1>
		<p class="full-text">
			We in the Vargrclan recruit new members through daring raids and cultural rites of passage. 
			Young warriors are drawn to our reputation for adventure and glory, eager to prove their bravery in battle. 
			We hold initiation ceremonies where individuals showcase their skills, 
			fostering a strong sense of loyalty and belonging within our community.
		</p>
		<p class="short-text">
			We in the Vargrclan recruit new members through daring raids and cultural rites of passage, drawing young warriors eager to prove their bravery.
			Our initiation ceremonies foster loyalty and a strong sense of belonging.		
		</p>
		<p>Sign up for the Vargrclan newsletter to start your recruitment.</p>
		<form>
			<input type="name" placeholder="Name" required>
			<input type="email" placeholder="Email" required>
			<button type="submit">Submit</button>
		</form>
	</div>
</section>


<style>
	#section1 {
		margin: 0;
		min-height: 100vh;
		max-width: 100vw;
		display: block;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 5%;
		background-size: cover;
		background-position: center;
	}
	h1 {
		width: 100%;
		color: #ffffff;
		font-family: var(--font-header);
		font-size: 2.2em;
		z-index: 1;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
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
	.container input {
		padding: 10px;
		width: calc(100% - 22px); 
		border: 1px solid #ccc; 
		border-radius: 4px; 
	}
	p {
		font-family: var(--font-norse);
		color: #ffffff;
		display: flex;
		font-size: 1.2rem;
		padding: 1%;
	}
	form {
		font-family: var(--font-norse);
		padding: 1.25%;
	}
	@media (max-width: 840px) {
		#section1 {
			padding-top: 15%;
			height: 75vh;
			background-position:-55vw;
		}
		.container {
			width: 65%;
		}
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
