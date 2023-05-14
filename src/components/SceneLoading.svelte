<div id="scene-boot-up"
     class="flex flex-col absolute left-0 top-0 right-0 bottom-0 z-50 justify-center items-center w-full h-full">
  <span class="anim2 font-bold text-5xl sm:text-6xl">Loading…</span>

  <div class="anim1 mt-16">
    <LoadingSpinner />
  </div>

  <div class="anim3 font-thin text-sm text-center fixed left-0 right-0 bottom-8 w-screen">loading essential resources…</div>
</div>

<script lang="ts">
import { onMount } from "svelte";
import anime from "animejs";
import LoadingSpinner from "./common/LoadingSpinner.svelte";

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
      delay: anime.stagger(200, { direction: "reverse" }),
    }).finished.then(() => { exitCompleted = true; });
  }
}

onMount(() => {
  anime({
    targets: "#scene-boot-up .anim3",
    opacity: 0,
    duration: 250,
    easing: "linear",
    complete() {
      document.querySelector("#scene-boot-up .anim3")?.remove();
    },
  });

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
