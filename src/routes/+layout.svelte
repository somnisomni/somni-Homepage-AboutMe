<svelte:head>
  <title>somni::AboutMe</title>
</svelte:head>
<svelte:window on:load={ onLoad } />

<slot />

<script lang="ts">
import "normalize.css";
import "@/styles/main.scss";

import { onMount } from "svelte";
import loadWebFont from "@/lib/webfontloader";

async function onLoad() {
  await loadWebFont();
}
onMount(onLoad);
</script>