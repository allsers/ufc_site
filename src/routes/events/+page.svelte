<svelte:head>
	<title>UFC</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';

    onMount(async () => {
		const section1 = document.getElementById('section1')
		if (section1) {
			section1.style.height = '300vh';
		}
		interface Event { // Definerer interfacen som skal bli brukt for events lista
			event: string;
			fighters: string;
			location: string;
			date: string;
		};
		let events: Event[] = [];
        try {
            const response = await fetch('/events');
            if (!response.ok) throw new Error('Network response was not ok');
            events = await response.json();
        } catch (error) {
            console.error('Error fetching events:', error);
        }

		const eventsHTML = document.getElementById("eventsHTML")
		if (eventsHTML) {
			eventsHTML.style.opacity = '0';
		}
		events.forEach(event => {
			const li = document.createElement('li');
			li.id = 'card';

			const elements = [ // Kobler id til p-element sammen med tekst, der event er et objekt hentet fra listen events
				{ id: 'event', text: event.event }, 
				{ id: 'fighters', text: event.fighters },
				{ id: 'date', text: event.date },
				{ id: 'location', text: event.location }
			];
			
			elements.forEach(({ id, text }) => {
				const p = document.createElement('p');
				p.id = id;
				p.innerText = text;
				li.appendChild(p);
			});

			eventsHTML?.appendChild(li);
		});
	
		if (eventsHTML) {
			setTimeout(() => {
				eventsHTML.style.transition = 'opacity 0.35s';
				eventsHTML.style.opacity = '1';
				if (section1) {
					section1.style.height = 'auto';
				}
			}, 25); 
		};
		document.addEventListener('mousemove', (e) => {
			const card = document.getElementById('card');
			const rect = card?.getBoundingClientRect();
			if (rect) {
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				card?.style.setProperty('--mouse-x', `${x}px`);
				card?.style.setProperty('--mouse-y', `${y}px`);
			}
		});
    });

</script>
<div id="section1">
	<h1>Events</h1>
	<ol id="eventsHTML">

	</ol>
	
</div>

<style>

	#section1 {
		padding: 0;
		background: 
		linear-gradient(
			to bottom,
			rgba(9,9,19,1) 0%,
			rgba(9,9,19,1) 2.5%,
			transparent 10%
		),
		linear-gradient(
			90deg, 
			rgba(9,9,19,1) 15%, 
			rgba(38,38,78,1) 50%, 
			rgba(9,9,19,1) 85%
		);
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;

	}

	h1 {
		width: 100vw;
		justify-content: center;
		display: flex;
		padding: 0;
		margin-left: 0;
		color: var(--color-text1);
		font-family: var(--font-bebas);
	}

	#eventsHTML {
		padding: 0;
		padding-bottom: 5%;
		width: 100%;
		margin: 0;
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style-type: none;
	}

	:global(#card) {
		padding: 1rem;
		border-radius: 2%;
		padding-left: 0%;
		width: 42.5%;
		height: 12.5vh;
		margin: 0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column; 
		margin: 0.75rem 0;
		background-color: #17161e;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
		transition: all 0.25s;
	}

	:global(#card) {
		position: relative;
		transition: transform 0.3s ease;
	}

	:global(#card)::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: opacity 0.3s ease;
		opacity: 0;
		background: radial-gradient(
			circle at 0 0,
			rgba(255, 255, 255, 0.1) 0%,
			rgba(255, 255, 255, 0) 50%
		);
	}

	:global(#card):hover::before {
		transition: all 0.4s;
		opacity: 1;
	}

	:global(#card):hover {
		transform: scale(1.005) translateY(-5px);
	}
	:global(#card p) {
    	margin: 0;
		color: var(--color-text1);
	}
	:global(#card p:nth-child(n+2)) {
    	font-family: var(--font-bebas);
	}
	:global(#event) {
		font-size: 1.6rem;
		font-family: var(--font-header);
		text-shadow: 8px 8px 12px #000000;
	}
	:global(#fighters) {
		font-size: 1.25rem;
	}
	:global(#location) {
		font-size: 1.1rem;
	}
</style>