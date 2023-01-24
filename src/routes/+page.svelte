<div>
  {#if !introAnimationCompleted}
    <div out:fade>
      <SceneIntro bind:animationCompleted={ introAnimationCompleted } />
    </div>
  {/if}

  YAY
</div>

<script lang="ts">
import { fade } from "svelte/transition";
import SceneIntro from "@/components/landing/SceneIntro.svelte";

let introAnimationCompleted = false;
</script>
