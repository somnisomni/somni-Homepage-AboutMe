<div id="scene-intro"
     class="bg-black text-slate-100 flex flex-col absolute left-0 top-0 right-0 bottom-0 z-10 pl-4 sm:pl-12 justify-center items-start w-screen h-screen">
  <div class="cont">
    <div id="hello" class="text-5xl sm:text-7xl font-thin mb-2 opacity-0">Hello,</div>
    <div id="visitor" class="text-6xl sm:text-8xl font-semibold opacity-0">{ visitorText }.</div>
  </div>
</div>

<script lang="ts">
import { onMount } from "svelte";
import anime from "animejs";
import { LOCALSTORAGE_PROP_VISITED } from "$lib/constants";

let visitorText: "Stranger" | "Friend" = "Stranger";
export let animationCompleted = false;

onMount(() => {
  if(window.localStorage.getItem(LOCALSTORAGE_PROP_VISITED)) {
    visitorText = "Friend";
  } else {
    visitorText = "Stranger";
    window.localStorage.setItem(LOCALSTORAGE_PROP_VISITED, "true");
  }

  anime.timeline({
    targets: "#scene-intro #hello, #scene-intro #visitor",
    duration: 1000,
  }).add({  // Setup
    translateX: "25%",
    opacity: 0,
    duration: 10,
  }).add({  // Fly in
    translateX: 0,
    opacity: 1,
    easing: "easeOutQuint",
    delay: anime.stagger(250),
  }, 10).add({  // Fly out
    translateX: "-25%",
    opacity: 0,
    easing: "easeInQuint",
    delay: anime.stagger(250),
  }, "+=500").finished.then(() => { animationCompleted = true; });
});
</script>
