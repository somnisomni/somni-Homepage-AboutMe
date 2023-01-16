<div class="bg-slate-50 w-full min-h-full pb-8">
  <header class="flex items-center justify-center w-full h-64 bg-sky-700 mb-8">
    <span class="text-6xl text-slate-100 text-center font-black">솜니 / somni</span>
  </header>

  <main class="container mx-auto px-4">
    세부사항 표시: <input type="checkbox" bind:checked={ showProjectItemsDetails } />
  
    <div>
      <h1 class="text-4xl text-center font-bold my-4">팀 프로젝트</h1>
  
      <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-start mx-auto px-4 pb-4 md:px-8">
        {#each ProjectsTeam as project}
          <ProjectItem projectData={ project }
                       showDetails={ showProjectItemsDetails }
                       isTeamProject={ true } />
        {/each}
      </div>
    </div>
  
    <div class="mt-8">
      <h1 class="text-4xl text-center font-bold my-4">개인 프로젝트</h1>
  
      <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-start mx-auto px-4 pb-4 md:px-8">
        {#each ProjectsIndividual as project}
          <ProjectItem projectData={ project }
                       showDetails={ showProjectItemsDetails } />
        {/each}
      </div>
    </div>
  </main>
</div>

<script lang="ts">
import ProjectsIndividual from "@/data/projects_individual.json";
import ProjectsTeam from "@/data/projects_team.json";
import ProjectItem from "@/components/ProjectItem.svelte";

let showProjectItemsDetails = false;
</script>