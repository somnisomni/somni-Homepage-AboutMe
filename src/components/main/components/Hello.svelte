<p class="text-2xl md:text-4xl">Hello, <strong class="font-medium">{ visitedText }</strong>!</p>
<p class="text-2xl md:text-4xl mt-4">I'm <strong class="font-bold">somni</strong>, an ordinary <strong class="desc-block pb-0 md:pb-2 font-medium">web developer</strong></p>
<p class="text-2xl md:text-4xl">who <HelloCode /></p>

<script lang="ts">
import { LOCALSTORAGE_PROP_VISITED } from "@/lib/constants";
import { onMount } from "svelte";
import HelloCode from "./HelloCode.svelte";

let visitedText: "Stranger" | "Friend" = "Stranger";

onMount(() => {
  if(window.localStorage.getItem(LOCALSTORAGE_PROP_VISITED) === "true") {
    visitedText = "Friend";
  } else {
    window.localStorage.setItem(LOCALSTORAGE_PROP_VISITED, "true");
  }
})
</script>
