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
				<a href="/">UFC</a>
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
		justify-content: space-between;
		width: 100%;
		flex-grow: 1;
		position: fixed;
		z-index: 3;
	}


	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		--background: #0D0E1C;
	}

	ul {
		width: 100%;
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		background: var(--background);
	}

	li {
		padding: 1%;
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text1);
		font-weight: 700;
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		
	}
	nav ul li:nth-child(2) a {
		font-family: var(--font-header);
		font-size: 2rem;
	}


	a:hover {
		color: var(--color-theme-1);
	}
</style>
