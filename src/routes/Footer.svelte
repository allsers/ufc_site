<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/leikislogo2.png';
</script>

<footer>
	<div class="container">
		<div class="sep">
			<div class="logo">
				<img src="{logo}" id = "logo" alt = "logo">
				<h1>Vargrclan</h1>
			</div>
			
			<p>&copy; 2024 Vargrclan</p>
		</div>
		<div class="row">
			<div class="footer-col">
				<h4>Vargrclan</h4>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/crew">Recruitment</a></li>
					<li><a href="/shop">Shop</a></li>
				</ul>
			</div>
		
		</div>
	</div>
</footer>

<style>
    footer {
		position: relative;
		display: flex;
		background-color: rgb(10, 28, 42);
		color: var(--color-text1)
	}
	h1 {
		font-family: var(--font-header);
		color: var(--color-text1);
		font-size: 2rem;
	}
	.logo {
		display: flex;
	}
	#logo {
		align-self: center;
		height: 50px;
		width: 50px;
		padding:3%;
	}
	h4 {
		height: 5px;
		font-family: var(--font-norse);
		font-size: 1.5rem;
	}

	.container {
		display: flex;
		padding: 10px;
	}
	.sep {
		padding-left: 50px;
		padding-right: 70%;
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
		font-family: var(--font-norse);
		font-size: 1.3rem;
	}
	@media (max-width: 915px) {
		.sep {
			padding-left: 50px;
			padding-right: 55vw;
		}
	}
	@media (max-width: 825px) {
		.sep {
			padding-left: 50px;
			padding-right: 27.5vw;
		}
	}
	@media (max-width: 450px) {
		.sep {
			padding-left: 50px;
			padding-right: 24vw;
		}
	}

</style>