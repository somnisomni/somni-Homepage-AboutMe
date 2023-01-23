<div id="scene-boot-up"
     class="flex flex-col absolute left-0 top-0 right-0 bottom-0 z-50 justify-center items-center w-screen h-screen">
  <span class="anim2 font-thin text-6xl mb-16">Loading…</span>

  <div class="anim1">
    <LoadingSpinner />
  </div>
</div>

<script lang="ts">
import { onMount } from "svelte";
import anime from "animejs";
import LoadingSpinner from "../common/LoadingSpinner.svelte";

export let exit = false;
export let exitCompleted = false;

$: {
  if(exit) {
    anime({
      targets: "#scene-boot-up .anim1, #scene-boot-up .anim2",
      translateZ: "-2em",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: anime.stagger(200),
    }).finished.then(() => { exitCompleted = true; });
  }
};

onMount(() => {
  anime({
    targets: "#scene-boot-up .anim1",
    translateZ: "-2em",
    opacity: 0,
    direction: "reverse",
    duration: 2000,
    easing: "easeInExpo",
    delay: anime.stagger(200, { direction: "reverse" }),
  });
});
</script>

<style>
#scene-boot-up {
  perspective: 32em;
}
</style>