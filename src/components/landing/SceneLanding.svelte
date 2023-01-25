<div id="scene-landing">
  <Wallpaper /> <!-- #bg -->
  
  <div class="z-10">

  </div>
</div>

<script lang="ts">
import { onMount } from "svelte";
import anime from "animejs";
import Wallpaper from "./components/Wallpaper.svelte";

onMount(() => {
  anime({
    targets: "#scene-landing #bg",
    scale: 0.85,
    opacity: 0,
    direction: "reverse",
    duration: 1500,
    easing: "easeInQuint",
  });
});
</script>
