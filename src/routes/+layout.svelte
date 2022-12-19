<svelte:head>
  <title>somni::AboutMe</title>
</svelte:head>
<svelte:window on:load={ onLoad } />

<slot />

<script lang="ts">
import "devicon";
import "@/styles/main.css";

import { onMount } from "svelte";
import loadWebFont from "@/lib/webfontloader";

async function onLoad() {
  await loadWebFont();
}
onMount(onLoad);
</script>