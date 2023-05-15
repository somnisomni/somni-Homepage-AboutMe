<p>Hello, <strong class="font-medium">{ visitedText }</strong>!</p>
<p>I'm <strong class="font-bold">somni</strong>, an <strong class="font-medium">ordinary developer</strong></p>
<p>who <code class="text-xl md:text-3xl transition-all">{ CODE_SNIPPET }</code></p>

<script lang="ts">
import { LOCALSTORAGE_PROP_VISITED } from "@/lib/constants";
import { onMount } from "svelte";

let visitedText: "Stranger" | "Friend" = "Stranger";

const CODE_SNIPPET = "writeCode(lines, With.DREAMS);";

onMount(() => {
  if(window.localStorage.getItem(LOCALSTORAGE_PROP_VISITED) === "true") {
    visitedText = "Friend";
  } else {
    window.localStorage.setItem(LOCALSTORAGE_PROP_VISITED, "true");
  }
})
</script>
