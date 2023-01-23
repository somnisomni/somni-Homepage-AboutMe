<svelte:head>
  <title>somni::AboutMe</title>
</svelte:head>
<svelte:window on:load={ onLoad } />

{#if !loaded}
  <div>Loading</div>
{:else}
  <slot />
{/if}

<script lang="ts">
import "devicon";
import "@/styles/main.css";

import { onMount } from "svelte";
import loadWebFont from "$lib/webfontloader";

let webFontLoaded = false;
let windowLoaded = false;
$: loaded = webFontLoaded && windowLoaded;

async function onLoad() {
  await loadWebFont(() => {
    webFontLoaded = true;
  });

  windowLoaded = true;
}
onMount(onLoad);
</script>