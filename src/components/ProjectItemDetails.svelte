<!-- Details -->
<div>
  <ul class="text-sm list-disc list-outside md:pl-6 pl-4">
    { #each details as detail }
      <li>{ @html detail }</li>
    { /each }
  </ul>
</div>

<script lang="ts">
export let details: string[];
</script>