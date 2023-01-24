<div>
  {#if !introAnimationCompleted} <SceneIntro bind:animationCompleted={ introAnimationCompleted } /> {/if}
</div>

<script lang="ts">
import SceneIntro from "@/components/landing/SceneIntro.svelte";

let introAnimationCompleted = false;
</script>
