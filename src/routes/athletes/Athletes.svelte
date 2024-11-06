<script lang="ts">
    import { onMount } from 'svelte';
    
    import jon_jones_image from '$lib/images/jonjones.webp';
    import georges_st_pierre_image from '$lib/images/georgesst-pierre.webp';
    import anderson_silva_image from '$lib/images/andersonsilva.webp';
    import khabib_nurmagomedov_image from '$lib/images/khabib-nurmagomedov.webp';
    import conor_mcgregor_image from '$lib/images/conormcgregor.webp';

    export const athletes = {
        jon_jones: {
            name: 'Jon Jones',
            record: '27 - 1 - 0',
            weight_class: 'Heavyweight',
            image: jon_jones_image,
            video_id: "ebeQBYvWKsw"
        },
        georges_st_pierre: {
            name: 'Georges St-Pierre',
            record: '26 - 2 - 0',
            weight_class: 'Welterweight',
            image: georges_st_pierre_image,
            video_id: "S5ZqBX9SMeQ"
        },
        anderson_silva: {
            name: 'Anderson Silva',
            record: '34 - 11 -0',
            weight_class: 'Middleweight',
            image: anderson_silva_image,
            video_id: "c96FlEr1V20"
        },
        khabib_nurmagomedov: {
            name: 'Khabib Nurmagomedov',
            record: '29 - 0 - 0',
            weight_class: 'Lightweight',
            image: khabib_nurmagomedov_image,
            video_id: "0rvIV_DGT1M"
        },
        conor_mcgregor: {
            name: 'Conor McGregor',
            record: '22 - 5 - 0',
            weight_class: 'Lightweight',
            image: conor_mcgregor_image,
            video_id: "3mPPMCa8Nxw"
        }
    };

    import svelteTilt from 'vanilla-tilt-svelte';
    import type { SSVTProps } from 'vanilla-tilt-svelte';

    let tiltOptions: SSVTProps = {
        scale: 1,
        speed: 400,
        max: 3,
        perspective: 5000, 
        transition: true, 
        reset: true,
        reverse: false, 
        startX: 0,
        startY: 0,
        axis: null,
        glare: false,
    } 

    let loading = {};
    function handleVideoLoad(athleteName) {
        loading[athleteName] = false;
    }

    onMount(() => {
        Object.keys(athletes).forEach(name => {
            loading[name] = true;
        });
    });
</script>

<div class="cards_container">
    <ul id="athletesHTML">
        {#each Object.values(athletes) as athlete}
            <li id="athlete_card" use:svelteTilt={tiltOptions}>
                <div class="media">
                    <div class="img_container">
                        <img id="fighter_img" src={athlete.image} alt="{athlete.name}" loading="lazy" />
                    </div>
                    <iframe
                        id="fighter_video"
                        src="https://www.youtube-nocookie.com/embed/{athlete.video_id}?controls=0&rel=0&showinfo=0"
                        frameborder="0"
                        class:fade-in={!loading[athlete.name]}
                        title="{athlete.name} Highlight Reel"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        on:load={handleVideoLoad}>
                    </iframe>
                </div>
                <div class="text">
                    <p id="name">{athlete.name}</p>
                    <p id="record">{athlete.record} (W - L - D)</p>
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
            transform: none;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .fade-in {
        animation: fadeIn 1s ease-in-out;
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
        gap: 1.75rem; 
        transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
        animation-name: scaleUp;
        animation-duration: 0.3s;
        animation-fill-mode: both;
    }

    #athlete_card {
        transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
        border-radius: 10px;
        width: 60vw;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #17161e;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        height: 70dvh;
    }

    #athlete_card:hover {
        box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.7);
    }

    .img_container {
        position: relative;
        width: 32vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 1.5% 1.5%;
        padding: 0%;
        margin: 0;
    }
    
    #fighter_img {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #fighter_video {
        margin: 0;
        width: 32vw;
        height: 17vw;
        border-radius: 1.5%;
        object-fit: cover;
    }

    .media {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.1rem;
        row-gap: 1rem;
        position: relative;
    }

    .text {
        color: white;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-grow: 1;
        text-align: left; 
        font-family: var(--font-bebas);
        transform-style: preserve-3d;
        transform: perspective(3000px);
    }

    #name {
        font-size: 3rem;
        font-weight: bold;
        margin: 0.5rem 0;
    }

    #record, #weight_class {
        font-size: 1.75rem;
        margin: 0.25rem 0;
    }

    @media (max-width: 480px) {
        #name {
            font-size: 2rem;
        }
        #record, #weight_class {
            font-size: 1.25rem;
        }
        #athlete_card {
            width: 90vw;
            height: 125vw;
        }

        .img_container {
            width: 54vw;
            height: 72vw;
        }
        #fighter_video {
            width: 54vw;
            height: 34vw;
        }
    }
</style>