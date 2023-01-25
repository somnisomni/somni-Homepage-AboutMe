<!-- svelte-ignore a11y-img-redundant-alt -->
<img id="bg"
     class="-z-10 w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover brightness-50"
     srcset="https://picsum.photos/seed/somni{SEED}/480 480w,
             https://picsum.photos/seed/somni{SEED}/720 720w,
             https://picsum.photos/seed/somni{SEED}/1280 1280w,
             https://picsum.photos/seed/somni{SEED}/1920 1920w,
             https://picsum.photos/seed/somni{SEED}/2560 2560w"
     src="https://picsum.photos/seed/somni{SEED}/1280"
     alt="Background image from picsum.photos" />

<script lang="ts">
import { SEED } from "$lib/constants";
</script>
