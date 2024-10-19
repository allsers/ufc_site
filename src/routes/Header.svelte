<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>			
			<li aria-current={$page.url.pathname === '/events' ? 'page' : undefined}>
				<a href="/events">Events</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class='logo'>UFC</a>
			</li>
			<li aria-current={$page.url.pathname === '/athletes' ? 'page' : undefined}>
				<a href="/athletes">Athletes</a>
			</li>
		</ul>

	</nav>
</header>

<style>
	header {
		display: flex;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}


	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		background-image: radial-gradient(circle, #0b0b16 70%, #0f172c 100%);
	}

	ul {
		width: 100%;
		padding: 0;
		margin: 0;
		height: 3.5rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		background: var(--background);
	}

	li {
		display: flex;
		align-items: center;
		height: 100%;
	}

	nav a {
		padding: 2.5%;
		text-shadow: 8px 8px 12px #000000;
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text1);
		font-weight: 700;
		font-size: 1.3rem;
		text-transform: uppercase;
		letter-spacing: 0.075em;
		text-decoration: none;
		transition: color 0.2s linear;
		
	}

	nav a.logo {
		display: flex;
		justify-self:center;
		font-family: var(--font-header);
		font-size: 2.5rem;
		padding: 0 0rem;
		
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
