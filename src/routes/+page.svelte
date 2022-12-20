<div class="w-full min-h-full">
  세부사항 표시: <input type="checkbox" bind:checked={ showProjectItemsDetails } />

  <div>
    <h1>팀 프로젝트</h1>

    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start mx-auto px-4 pb-4 md:px-8">
      {#each ProjectsTeam as project}
        <ProjectItem projectData={ project }
                     showDetails={ showProjectItemsDetails }
                     isTeamProject={ true } />
      {/each}
    </div>
  </div>

  <div>
    <h1>개인 프로젝트</h1>

    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start mx-auto px-4 pb-4 md:px-8">
      {#each ProjectsIndividual as project}
        <ProjectItem projectData={ project }
                    showDetails={ showProjectItemsDetails } />
      {/each}
    </div>
  </div>
</div>

<script lang="ts">
import ProjectsIndividual from "@/data/projects_individual.json";
import ProjectsTeam from "@/data/projects_team.json";
import ProjectItem from "@/components/ProjectItem.svelte";

let showProjectItemsDetails: boolean = false;
</script>