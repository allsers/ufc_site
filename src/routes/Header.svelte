<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
</script>

<header>
	
	<nav>
		<ul>			
			<li aria-current={$page.url.pathname === '/crew' ? 'page' : undefined}>
				<a href="/crew">Crew</a>
			</li>
			<li id = "flex" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<img id="logo" src="{logo}" alt="logo">
				<a href="/">Vargrclan</a>
			</li>
			<li aria-current={$page.url.pathname === '/shop' ? 'page' : undefined}>
				<a href="/shop">Shop</a>
			</li>
		</ul>

	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		flex-grow: 1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.25);
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		background: rgb(22,59,88);
		background: radial-gradient(circle, rgba(22,59,88,1) 66%, rgba(51,82,107,1) 100%);
	}

	ul {
		width: 100%;
		position: relative;
		padding: 0;
		margin: 0;
		height: 3.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		background: var(--background);
	}

	li {
		padding: 5%;
		position: relative;	
		height: 100%;
		
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text1);
		font-weight: 900;
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.075em;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: var(--font-header);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		
	}
	#flex {
		display: flex;
	}

	a:hover {
		color: #95d2e6;
	}
	#logo {
		align-self: center;
		height: 45px;
		width: 45px;
	}
</style>
