<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';

    export let data: PageData;
	
	$: events = data.data.events;

    onMount(() => {
        const section1 = document.getElementById('section1');
        if (section1) {
            section1.style.height = '300vh';
        }

        const eventsHTML = document.getElementById("eventsHTML");
        if (eventsHTML) {
            eventsHTML.style.opacity = '0';
        }

		if (eventsHTML) {
			eventsHTML.style.transition = 'opacity 0.35s';
			eventsHTML.style.opacity = '1';
		}
		if (section1) {
			section1.style.height = 'auto';
		}

    });
</script>

<div id="cardsContainer">
    <ol id="eventsHTML">
        {#each events as event}
            <li id="card">
                <p id="event">{event.event}</p>
                <p id="fighters">{event.fighters}</p>
                <p id="date">{event.date}</p>
                <p id="location">{event.location}</p>
            </li>
        {/each}
    </ol>
</div>

<style>
	@keyframes scaleUp {
		from {
			transform: scale(0.9);
		}
		to {
			transform: scale(1);
		}
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

	#cardsContainer {
		width: 100%;
		min-height: 200vh;
		position: relative;
		content-visibility: auto;
		contain-intrinsic-size: 1px 5000px;
	}

	:global(#card) {
		padding: 1rem;
		border-radius: 10px;
		padding-left: 0%;
		width: 42.5%;
		height: 14vh;
		margin: 0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column; 
		margin: 0.75rem 0;
		background-color: #17161e;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
		transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);

		transition: transform 0.3s ease-out forwards;
		view-timeline-name: --cardReveal;
		view-timeline-axis: block;
		animation-timeline: --cardReveal;
		animation-name: scaleUp;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
	}

	:global(#card)::before {
		border-radius: 10px;
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
	:global(#card)::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 2px solid transparent;
		border-radius: 12px;
		transition: all 0.3s ease;
	}

	:global(#card):hover::after {
		border-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
	}
	:global(#card):hover::before {
		opacity: 1;
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
		font-size: 1.5rem;
	}
	:global(#date) {
		font-size: 1.3rem;
	}
	:global(#location) {
		font-size: 1.1rem;
	}

	@media screen and (max-width: 480px) {
		:global(#event) {
			font-size: 1.15rem;
		}
		:global(#fighters) {
			font-size: 0.95rem;
		}
		:global(#date) {
			font-size: 0.9rem;
		}
		:global(#location) {
			font-size: 0.85rem;
		}
		:global(#card) {
			width: 65%;
		}
	}
	@media screen and (max-height: 1000px) {
		:global(#card) {
			height: auto;
		}
	}
</style>