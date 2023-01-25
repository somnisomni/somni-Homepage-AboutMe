<div id="scene-landing">
  <Wallpaper /> <!-- #bg -->
  
  <div id="front" class="z-10">
    <div id="link-icons">
      <LinkIcon />
    </div>
  </div>
</div>

<script lang="ts">
import { onMount } from "svelte";
import anime from "animejs";
import Wallpaper from "./components/Wallpaper.svelte";
import LinkIcon from "./components/LinkIcon.svelte";

onMount(() => {
  anime.timeline().add({
    targets: "#scene-landing #bg",
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutQuint",
  }).add({
    targets: "#scene-landing #front",
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutQuint",
  });
});
</script>
