<p>You can find me at...</p>

<p>Email: <a bind:this={ emailElement } href="@" class="email-link">@</a></p>
<p>GitHub: <a href="https://github.com/somnisomni">somnisomni</a></p>
<p>Twitter: <a href="https://twitter.com/somni_somni">@somni_somni</a></p>
<p>Bluesky: <a href="https://staging.bsky.app/profile/somni.one">@somni.one</a></p>
<p>Blog: <a href="https://log.somni.one">somni.log</a></p>

<script lang="ts">
import { onMount } from "svelte";

let emailElement: HTMLAnchorElement;

onMount(() => {
  emailElement.innerText = "";
  emailElement.setAttribute("data-id", "me");
  emailElement.setAttribute("data-domain", "somni.one");
  emailElement.href = "mailto:" + "me" + "@" + "somni.one";
});
</script>

<style>
.email-link::before {
  content: attr(data-id) "@" attr(data-domain);
}
</style>
