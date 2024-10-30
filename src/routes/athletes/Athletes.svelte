<script lang="ts">
    import { onMount } from 'svelte';
    import jon_jones_image from '$lib/images/jonjones.webp';
    import georges_st_pierre_image from '$lib/images/georgesst-pierre.webp';
    import anderson_silva_image from '$lib/images/andersonsilva.webp';

    export const athletes = {
        jon_jones: {
            name: 'Jon Jones',
            record: '27-1-0',
            weight_class: 'Heavyweight',
            image: jon_jones_image,
        },
        georges_st_pierre: {
            name: 'Georges St-Pierre',
            record: '26-2-0',
            weight_class: 'Welterweight',
            image: georges_st_pierre_image,
        },
        anderson_silva: {
            name: 'Anderson Silva',
            record: '34-11-0',
            weight_class: 'Middleweight',
            image: anderson_silva_image,
        }
    }
    onMount(async () => {


    });
</script>

<div class="cards_container">
    <ul id="athletesHTML">
        {#each Object.values(athletes) as athlete}
            <li id="athlete_card">
                <div class="media">
                    <img id="fighter_img" src = {athlete.image} alt="{athlete.name}"/>
                </div>
                <div class="text">
                    <p id="name">{athlete.name}</p>
                    <p id="record">{athlete.record} (W-L-D)</p>
                    <p id="weight_class">{athlete.weight_class}</p> 
                </div>
            </li>
        {/each}
    </ul>
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

    .cards_container {
        padding: 0;
        padding-top: 0.75%;
        padding-bottom: 5%;
        width: 100%;
        margin: 0;
        flex-direction: column;
        display: flex;
        align-items: center;
    }

    #athletesHTML {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        list-style-type: none;
        padding: 0;
        margin: 0;  
        gap: 1.5rem; /* Set spacing between cards */
        transform: 
            perspective(5000px)
            rotateY(0deg)
            rotateX(0deg);
    }

    #athlete_card {
        border-radius: 10px;
        width: 50vw;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #17161e;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
        animation-name: scaleUp;
        animation-duration: 0.3s;
        animation-fill-mode: both;
        height: 50vh;
    
    }

    #fighter_img {
        margin: 0;
        width: 20vw;
        height: 20vw;
        border-radius: 1.5%;
        object-fit: cover;
    }

    .media {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .text {
        color: white;
        font-size: 2rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        text-align: left; 
        font-family: var(--font-bebas);
    }

    #name {
        font-size: 1.75rem;
        font-weight: bold;
        margin: 0.5rem 0;
    }

    #record, #weight_class {
        font-size: 1.5rem;
        margin: 0.25rem 0;
    }
</style>