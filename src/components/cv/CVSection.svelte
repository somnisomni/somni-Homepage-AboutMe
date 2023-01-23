<div>
  세부사항 표시: <input type="checkbox" bind:checked={ showProjectItemsDetails } />
  
  <div>
    <h1 class="s-title">팀 프로젝트</h1>
  
    <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-start mx-auto px-4 pb-4 md:px-8">
      {#each ProjectsTeam as project}
        <ProjectItem projectData={ project }
                     showDetails={ showProjectItemsDetails }
                     isTeamProject={ true } />
      {/each}
    </div>
  </div>
  
  <div class="mt-8">
    <h1 class="s-title">개인 프로젝트</h1>
  
    <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-start mx-auto px-4 pb-4 md:px-8">
      {#each ProjectsIndividual as project}
        <ProjectItem projectData={ project }
                     showDetails={ showProjectItemsDetails } />
      {/each}
    </div>
  </div>

  <div class="mt-8">
    <h1 class="s-title">오픈 소스 기여</h1>

    <ul>
      {#each ContributionsOpenSource as contrib }
        <li>
          <span class="font-bold">{ contrib.title }</span>
          
          <ul>
            {#each contrib.contributions as subcontrib }
              <li>{ subcontrib.desc }</li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
</div>

<script lang="ts">
import ProjectsIndividual from "@/data/projects_individual.json";
import ProjectsTeam from "@/data/projects_team.json";
import ContributionsOpenSource from "@/data/contributions_opensource.json";
import ProjectItem from "@/components/cv/components/ProjectItem.svelte";

let showProjectItemsDetails = false;
</script>

<style>
.s-title {
  @apply text-4xl text-center font-bold my-4;
}
</style>