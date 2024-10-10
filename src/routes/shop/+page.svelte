<svelte:head>
	<title>Vargrclan</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import chest from '$lib/images/norse_chest.png';
	import wood_texture from '$lib/images/wood-texture.png';
	import viking_brooch from '$lib/images/viking_brooch.jpg';
	import shield from '$lib/images/shield.png';
	import viking_sword from '$lib/images/viking_sword.png';
	import viking_axe from '$lib/images/viking_axe.png';
	import runestone from '$lib/images/runestone.png';
	import viking_helmet from '$lib/images/viking_helmet.png';
	import cattle from '$lib/images/cattle.png';
	import hnefetafl from '$lib/images/Hnefetafl.png';
</script>

<div id="section1" style='background-image: url({chest});'>
	<h1 style='background-image: url({wood_texture});'>Shop</h1>
	<div class="grid-container">
        <div class="item" style='background-image: url({wood_texture});'>
            <img src="{viking_brooch}" alt="Item 1">
            <h2>Viking brooch</h2>
            <p>DKK 269</p>
        </div>
        <div class="item" style='background-image: url({wood_texture});'>
            <img src="{shield}" alt="Item 2">
            <h2>Shield</h2>
            <p>DKK 799</p>
        </div>
        <div class="item" style='background-image: url({wood_texture});'>
            <img src="{viking_sword}" alt="Item 3">
            <h2>Viking Sword</h2>
            <p>DKK 1359</p>
        </div>
        <div class="item" style='background-image: url({wood_texture});'>
            <img src="{viking_axe}" alt="Item 4">
            <h2>Viking Axe</h2>
            <p>DKK 2639</p>
        </div>
		<div class="item" style='background-image: url({wood_texture});'>
            <img src="{runestone}" alt="Item 5">
            <h2>Runestone</h2>
            <p>DKK 99</p>
        </div>
		<div class="item" style='background-image: url({wood_texture});'>
            <img src="{viking_helmet}" alt="Item 6">
            <h2>Viking Helmet</h2>
            <p>DKK 2249</p>
        </div>
		<div class="item" style='background-image: url({wood_texture});'>
            <img src="{cattle}" alt="Item 7">
            <h2>Cattle</h2>
            <p>DKK 119900</p>
        </div>
		<div class="item" style='background-image: url({wood_texture});'>
            <img src="{hnefetafl}" alt="Item 8">
            <h2>Hnefetafl</h2>
            <p>DKK 275</p>
        </div>

    </div>
</div>

<style>
	#section1 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 2rem;
		height: 100vh;
		width: 100%;
		background-size: cover;
		background-position: center;
	}
	h1 {
		width: 100%;
		align-self: center;
		color: #ffffff;
		font-family: var(--font-header);
		font-size: 2.2em;
		z-index: 1;
	}
	p {
		font-family: var(--font-norse);
		color: #ffffff;
		display: flex;
		font-size: 1.2rem;
	}
	.grid-container {
		max-width: 1200px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		padding: 20px;

	}
	.item {
		border-radius: 4% 4%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
	}
	h2 {
		font-family: var(--font-norse);
		color: #ffffff;
		display: flex;
		
	}
	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 2% 2%;
	}
	@media only screen and (max-width: 710px) {
		#section1 {
			height: 190vh;
		}
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
</style>