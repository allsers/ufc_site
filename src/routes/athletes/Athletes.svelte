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
    <ul id="eventsHTML">
        {#each Object.values(athletes) as athlete}
            <li id="card">
                <img id="fighter_img" src = {athlete.image} alt="{athlete.name}"/>
                <div id="text">
                    <p id="name">{athlete.name}</p>
                    <p id="record">{athlete.record}</p>
                    <p id="weight_class">{athlete.weight_class}</p> 
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .cards_container {
        padding: 0;
        padding-bottom: 5%;
        width: 100%;
        margin: 0;
        flex-direction: column;
        display: flex;
        align-items: center;
    }

    #card {
        display: flex;
    }
    #text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #fighter_img {
        width: 20vw;
        height: 20vw;
        object-fit: contain;
    }
</style>