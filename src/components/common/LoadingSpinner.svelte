<div class="loading-spinner-parent">
  <div class="loading-spinner">
    <div class="dot d1" />

    <div class="bottom-dots">
      <div class="dot d2" />
      <div class="dot d3" />
    </div>
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
    direction: "alternate",
    easing: "easeInOutCubic",
    loop: true,
    duration: 750,
    endDelay: 50,
  };

  [[".d1", 0, "-1em"], [".d2", "-1em", "1em"], [".d3", "1em", "1em"]].forEach((v, i) => {
    setTimeout(() => {
      anime({
        ...dotInOutAnimeCommonProps,
        targets: `.loading-spinner ${v[0]}`,
        translateX: v[1],
        translateY: v[2],
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
  width: 1em;
  height: 1em;
  margin: 0.125em;
  border-radius: 1em;
  background-color: currentColor;

  opacity: 0;
}

.loading-spinner .bottom-dots {
  display: flex;
  flex-direction: row;
}
</style>
