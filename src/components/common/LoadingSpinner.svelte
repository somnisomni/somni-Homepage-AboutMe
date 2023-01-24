<div class="loading-spinner-parent">
  <div class="loading-spinner">
    <div class="dot d1" />
    <div class="dot d2" />
    <div class="dot d3" />
  </div>
</div>

<script lang="ts">
import { onMount } from "svelte";
import anime from "animejs";

onMount(() => {
  // Spinner itself
  anime({
    targets: ".loading-spinner",
    rotate: 360,
    loop: true,
    duration: 5000,
    easing: "linear",
  });

  // Dot in/out
  const dotInOutAnimeCommonProps: anime.AnimeParams = {
    opacity: 1,
    scale: [0, 1],
    direction: "alternate",
    easing: "easeInOutCubic",
    loop: true,
    duration: 1000,
    delay: 100,
    endDelay: 100,
  };

  [[".d1", 0, -1], [".d2", -1, 1], [".d3", 1, 1]].forEach((v, i) => {
    setTimeout(() => {
      anime({
        ...dotInOutAnimeCommonProps,
        targets: `.loading-spinner ${v[0]}`,
        translateX: `${(v[1] as number) * 1}em`,
        translateY: `${(v[2] as number) * 1}em`,
      });
    }, i * 200);
  });
});
</script>

<style>
.loading-spinner-parent {
  display: inline-block;
}

.loading-spinner {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
}

.loading-spinner .dot {
  position: absolute;
  width: 1em;
  height: 1em;
  margin: 0.125em;
  border-radius: 1em;
  background-color: currentColor;

  opacity: 0;
}
</style>
