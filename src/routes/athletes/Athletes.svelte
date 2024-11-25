<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
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
            record: '34 - 11 - 0',
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

    let video = {};
    function playVideo(athlete) {
        video[athlete.name] = true;
    }

    function YtThumbnail({ videoId }: { videoId: string }) {
        return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    }

    onMount(() => {
        Object.keys(athletes).forEach(name => {
            video[name] = false;
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
                    {#if video[athlete.name]}
                        <iframe transition:fade={{ duration: 500 }}
                            id="fighter_video"
                            src="https://www.youtube-nocookie.com/embed/{athlete.video_id}?autoplay=1&rel=0&modestbranding=1"
                            frameborder="0"
                            title="{athlete.name} Highlight Reel"
                            loading="lazy"
                            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        ></iframe>
                    {:else}
                        <div class="thumbnail-container">
                            <img id="thumbnail" src={YtThumbnail({ videoId: athlete.video_id})} alt="">
                            <button id="play-button" on:click={() => playVideo(athlete)}><i class="fas fa-play"></i></button>
                        </div>
                    {/if}
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
        height: 40vw;
    }

    #athlete_card:hover {
        box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.7);
    }

    .img_container {
        position: relative;
        width: 32vw;
        height: 18vw;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 1.5px 1.5px;
        padding: 0%;
        margin: 0;
    }
    
    #fighter_img {
        margin: 0;
        padding: 0;
        width: 32vw;
        height: 18vw;
        object-fit: cover;
    }

    .thumbnail-container {
        height: 18vw;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    #thumbnail {
        margin: 0;
        padding: 0;
        width: 32vw;
        height: 18vw;
        object-fit: cover;
    }

    #play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: none;
        border: none;
        cursor: pointer;
        font-size: 2.75rem;
        color: #ececec;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }

    #fighter_video {
        margin: 0;
        width: 32vw;
        height: 18vw;
        border-radius: 5px 5px;
        object-fit: cover;
    }

    .media {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40vw;
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
        #fighter_img {
            width: 54vw;
            height: 72vw;
        }
        #fighter_video {
            width: 54vw;
            height: 34vw;
        }
        #thumbnail {
            width: 54vw;
            height: 34vw;
        }
        .media {
            height: 100%;
        }
        #athlete_card {
            height: 108vw
        }
    }
</style>