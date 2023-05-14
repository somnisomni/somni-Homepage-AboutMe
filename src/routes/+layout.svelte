<svelte:head>
  <title>somni</title>
</svelte:head>
<svelte:window on:load={ onLoad } />

{#if !loadingSceneExitAnimCompleted}
  <div out:fade>
    <SceneLoading exit={ loaded }
                  bind:exitCompleted={ loadingSceneExitAnimCompleted }/>
  </div>
{:else}
  <div in:fade>
    <slot />
  </div>
{/if}

<script lang="ts">
/* Library / Stylesheet imports */
import "@/styles/main.css";
import { onMount } from "svelte";
import { fade } from "svelte/transition";
import loadWebFont from "$lib/webfontloader";

/* Component imports */
import SceneLoading from "@/components/SceneLoading.svelte";

let webFontLoaded = false;
let windowLoaded = false;
let loadingSceneMinimumDurationPassed = false;
let loadingSceneExitAnimCompleted = false;
$: loaded = webFontLoaded && windowLoaded && loadingSceneMinimumDurationPassed;

setTimeout(() => {
  loadingSceneMinimumDurationPassed = true;
}, 2000);

async function onLoad() {
  await loadWebFont(() => {
    webFontLoaded = true;
  });

  windowLoaded = true;
}
onMount(onLoad);
</script>
