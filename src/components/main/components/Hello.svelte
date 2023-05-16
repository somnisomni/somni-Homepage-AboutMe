<p>Hello, <strong class="font-medium">{ visitedText }</strong>!</p>
<p class="mt-4">I'm <strong class="font-bold">somni</strong>, an <strong class="font-medium">ordinary developer</strong></p>
<p>who <HelloCode /></p>

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
