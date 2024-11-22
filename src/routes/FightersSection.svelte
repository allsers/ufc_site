<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import fighter_middle from '$lib/images/fighter-middle.webp';
    import fighter_left from '$lib/images/fighter-left.webp';
    import fighter_right from '$lib/images/fighter-right.webp';
    import heavyweight from '$lib/images/heavyweight.webp';
    import featherweight from '$lib/images/featherweight.webp';
    import lightning from '$lib/images/lightning.webp';

    interface IntersectionObserverEntry {
        isIntersecting: boolean;
    }

    function setupIntersectionObserver(sectionId: string): () => void {
        const section = document.getElementById(sectionId);
        if (!section) return () => {};

        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '50% 0px 10% 0px',
            threshold: 0.6,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
            const visible = entries.some(entry => entry.isIntersecting);
            const children = section.querySelectorAll('*');
            children.forEach((child) => {
                if (child instanceof HTMLElement) {
                    child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    child.style.opacity = visible ? '1' : '0';
                    if (child.tagName.toLowerCase() === 'button') {
                        child.style.transform = visible ? 'translateY(55%)' : 'translateY(-10%)';
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(section);

        return () => {
            observer.unobserve(section);
        };
    }

    onMount(() => {
        return setupIntersectionObserver('section2');
    });
</script>

<section id="section2" role="main" aria-label="Fighter showcase">
    <h2 class="visually-hidden">UFC Fighter Showcase</h2>
    <div class="flex">
        <div class="left">
            <img src={lightning} id="lightning1" alt="" aria-hidden="true" loading="lazy">
            <img id="featherweight" src={featherweight} alt="Featherweight UFC fighter" aria-label="Picture of a featherweight UFC fighter" loading="lazy">
        </div>
        <div class="card">
            <div class="textbox">
                <button onclick={() => goto(`${base}/athletes`)} aria-label="View our fighters">Check Out Our Fighters!</button>
            </div>
            <div class="fighters">
                <div class="images">
                    <div class="image1">
                        <img id="img1" src={fighter_left} alt="Fighter on the left" aria-label="UFC fighter in left position" loading="lazy">
                    </div>
                    <div class="image2">
                        <img id="img2" src={fighter_middle} alt="Fighter in the middle" aria-label="UFC fighter in center position" loading="lazy">
                    </div>
                    <div class="image3">
                        <img id="img3" src={fighter_right} alt="Fighter on the right" aria-label="UFC fighter in right position" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <img src={lightning} id="lightning2" alt="" aria-hidden="true" loading="lazy">
            <img id="heavyweight" src={heavyweight} alt="Heavyweight UFC fighter" aria-label="Picture of a heavyweight UFC fighter" loading="lazy">
        </div>
    </div>
</section>

<style>
    #section2 {
        background: radial-gradient(circle, rgba(38,38,78,1) 0%, rgba(9,9,19,1) 45%);
        width: 100%;
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        z-index: 2;
        overflow: hidden;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    #heavyweight {
        height: 85vh;
        align-self: flex-end;
    }

    #featherweight {
        height: 80vh;
        justify-self: flex-start;
        transform: translateX(15%);
    }

    .left, .right {
        z-index: 1;
        display: flex;
        align-self: flex-end;
        flex-direction: column;
        object-fit: contain;
        display: none;
    }

    .flex {
        display: flex;
        overflow-x: hidden;
        justify-content: center;
        height: 100vh;
    }

    #lightning1 {
        z-index: 1;
        position: absolute;
        object-fit: contain;
        height: 55vh;
        z-index: -1;
        margin: -21vh 10vw;
        overflow: hidden;
    }

    #lightning2 {
        z-index: 1;
        position: absolute;
        transform: scaleX(-1);
        height: 55vh;
        width: 21.9vw;
        z-index: -1;
        margin: -16vh -7.1vw;
        object-fit: cover;
    }

    #section2 > * {
        opacity: 0;
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    button {
        opacity: 0;
        font-size: 2em;
        background-color: #17161e;
        align-self: center;
        color: var(--color-text1);
        font-family: var(--font-bebas);
        cursor: pointer;
        z-index: 2;
        padding: 12px 24px;
        border: none;
        border-radius: 2.5px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease;
    }

    button:hover {
        transform: scale(101%) translateY(55%);
    }

    .textbox {
        z-index: 4;
        display: flex;
        justify-content: center;
    }

    .fighters {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 3;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        height: 57.5vh;
        width: 100vw;
    }

    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    img {
        border-radius: 2.5px;
    }

    .image1, .image2, .image3 {
        flex-shrink: 0;
    }

    .image1 {
        transform: translateX(40%);
    }

    .image2 {
        z-index: 1;
    }

    .image3 {
        transform: translateX(-40%);
    }

    #img1, #img3 {
        width: 21.5vw;
        height: 21.5vw;
        max-width: 500px;
        max-height: 500px;
        object-fit: cover;
    }

    #img2 {
        width: 25vw;
        height: 25vw;
        max-width: 600px;
        max-height: 600px;
        object-fit: cover;
    }

    @media screen and (max-width: 480px) {
        button {
            font-size: 1.5em;
        }

        #img1, #img3 {
            width: 40vw;
            height: 65vw;
        }
        #img1 {
           object-position: 20%;
        }
        #img3 {
            object-position: 80%;
        }
        #img2 {
            width: 50vw;
            height: 75vw;
        }
    }

    @media screen and (min-width: 768px) {
        .flex {
            flex-direction: row;
        }

        .card {
            width: 80%;
        }

        .images {
            flex-direction: row;
        }

        #img1, #img3 {
            width: 22vw;
            height: 22vw;
        }

        #img2 {
            width: 28vw;
            height: 28vw;
        }
    }

    @media screen and (min-width: 1024px) {
        .card {
            width: 60%;
        }

        button {
            font-size: 2.25em;
        }

        .left, .right {
            display: block;
        }
    }
</style>