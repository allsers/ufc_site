<script>
	import { page } from '$app/stores';
</script>

<footer>
	<div class="container">
		<div class="sep">
			<h1>UFC</h1>
		</div>
		<div class="row">
			<div class="footer-col">
				<h4>UFC</h4>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/events">Events</a></li>
					<li><a href="/athletes">Athletes</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>Social Media</h4>
				<ul>
					<li><a href="https://www.facebook.com/UFC/">Facebook</a></li>
					<li><a href="https://www.instagram.com/ufc/">Instagram</a></li>
					<li><a href="https://www.tiktok.com/@ufc">TikTok</a></li>
					<li><a href="https://www.twitter.com/@ufc">Twitter</a></li>
					<li><a href="https://www.youtube.com/ufc">YouTube</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>Legal</h4>
				<ul>
					<li><a href="/">Terms</a></li>
					<li><a href="/">Privacy Policy</a></li>
					<li><a href="/">Ad Choices</a></li>
				</ul>
			</div>
			<div class="footer-col">
				
			</div>
		</div>
	</div>
</footer>

<style>
    footer {
		display: flex;
		background-color: black;
		color: var(--color-text1)
	}
	h1 {
		font-family: var(--font-header);
		color: var(--color-text1);
	}

	h4 {
		height: 5px;
	}
	.container {
		display: flex;
		padding: 10px;
	}
	.sep {
		padding-left: 50px;
		padding-right: 65vw;
	}
	.container {
		flex-grow: 1;
	}
	.row {
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	ul {
		all:unset;
		list-style-type: none;
	}

	li a {
		color:gray;
	}
</style>