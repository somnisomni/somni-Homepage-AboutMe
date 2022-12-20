<!-- App link -->
<div class="text-right font-semibold text-sky-600 mt-2">
  <a href={ url } class="p-2 text-lg after:content-['→'] after:ml-2">{ text }</a>
</div>

<script lang="ts">
export let url: string;
export let text: string = "배포/릴리즈";
</script>