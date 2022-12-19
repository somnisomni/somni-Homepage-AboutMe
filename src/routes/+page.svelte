<div class="w-full min-h-full">
  세부사항 표시: <input type="checkbox" bind:checked={ showProjectItemsDetails } />

  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start mx-auto px-4 pb-4 md:px-8">
    {#each projects as project}
      <ProjectItem projectData={ project }
                   showDetails={ showProjectItemsDetails } />
    {/each}
  </div>
</div>

<script lang="ts">
import projects from "@/data/projects_individual.json";
import ProjectItem from "@/components/ProjectItem.svelte";

let showProjectItemsDetails: boolean = false;
</script>