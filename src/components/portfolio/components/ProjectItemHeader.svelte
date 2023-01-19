<!-- Title / Stacks -->
<header class="mb-4">
  <div class="flex flex-row flex-wrap justify-between items-center md:text-3xl text-2xl">
    <div class="font-bold mb-1 mr-4">{ title }</div>

    <div class="flex items-center my-1">
      { #each stacks as stack }
        <i class="devicon-{ stack.toLowerCase() }-original devicon-{ stack.toLowerCase() }-plain colored mx-1"
            style="font-size: 70%"
            title={ getDeviconAltText(stack) } />
      { /each }
    </div>
  </div>

  <div class="md:text-xl text-lg text-zinc-700 font-light mt-2">{ @html desc }</div>
</header>

<script lang="ts">
import getDeviconAltText from "@/lib/semantic-devicon";

export let title: string;
export let desc: string;
export let stacks: string[];
</script>