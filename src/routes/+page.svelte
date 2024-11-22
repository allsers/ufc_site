<script lang="ts">
    import { onMount } from 'svelte';
    import HeroSection from './HeroSection.svelte';
    let FightersSection: typeof import('./FightersSection.svelte').default | null = $state(null);

    onMount(async () => {
        const module = await import('./FightersSection.svelte');
        FightersSection = module.default;
    });
</script>

<svelte:head>
    <title>UFC</title>
    <meta name="description" content="UFC website for previous events, athletes in the UFC, and more." />
</svelte:head>

<HeroSection />
{#if FightersSection}
  <FightersSection />
{:else}
  <section id="section2">

  </section>
{/if}

<style>
  #section2 {
    background: radial-gradient(circle, rgba(38,38,78,1) 0%, rgba(9,9,19,1) 45%);
    width: 100%;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    z-index: 2;
    overflow: hidden;
    height: 100vh;
  }
</style>