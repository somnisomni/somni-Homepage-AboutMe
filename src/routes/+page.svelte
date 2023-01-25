<div>
  {#if !introAnimationCompleted}
    <div out:fade>
      <SceneIntro bind:animationCompleted={ introAnimationCompleted } />
    </div>
  {:else}
    <SceneLanding />
  {/if}
</div>

<script lang="ts">
import { fade } from "svelte/transition";
import SceneIntro from "@/components/landing/SceneIntro.svelte";
import SceneLanding from "@/components/landing/SceneLanding.svelte";

let introAnimationCompleted = false;
</script>
