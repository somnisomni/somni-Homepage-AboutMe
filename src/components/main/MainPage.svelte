<div>
  <div class="space-area bottom-left"><div /></div>
  <div class="space-area top-right"><div /></div>

  <main class="z-10 p-8">
    <span class="text-6xl font-bold">somni</span>
    <hr class="w-32 my-4"/>
  </main>
</div>

<script lang="ts">
import anime from "animejs";
import { onMount } from "svelte";

function rotateSpaceArea(spaceAreaParent: HTMLElement) {
  const parentHeight = spaceAreaParent.getBoundingClientRect().height;
  const parentWidth = spaceAreaParent.getBoundingClientRect().width;
  const angle = (-1 * Math.atan(parentWidth / parentHeight)) * (180 / Math.PI);

  spaceAreaParent.getElementsByTagName("div")[0].setAttribute("style", `--tw-rotate: ${angle}deg`);
}

onMount(() => {
  [[".bottom-left", "-100%"], [".top-right", "100%"]].forEach((v) => {
    anime({
      targets: `.space-area${v[0]}`,
      translateX: [v[1], 0],
      easing: "easeOutQuint",
      duration: 1500,
    });
  });

  function rotateAllSpaceArea() {
    for(const elem of document.getElementsByClassName("space-area")) {
      rotateSpaceArea(elem as HTMLElement);
    }
  }

  rotateAllSpaceArea();
  window.addEventListener("resize", rotateAllSpaceArea);
  window.addEventListener("orientationchange", rotateAllSpaceArea);
});
</script>

<style>
.space-area {
  @apply fixed w-1/5 h-screen;
  height: 40vw;
}

.space-area > div {
  @apply w-full h-screen scale-y-150 rotate-0 bg-zinc-800;
  height: 40vw;
  --tw-rotate: -30deg;
}

.space-area.bottom-left {
  @apply bottom-0 left-0;
}

.space-area.bottom-left > div {
  @apply origin-bottom-right;
}

.space-area.top-right {
  @apply top-0 right-0;
}

.space-area.top-right > div {
  @apply origin-top-left;
}
</style>
