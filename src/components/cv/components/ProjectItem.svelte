<section class="project-item flex flex-col md:p-6 p-4 m-4 bg-white transition-all duration-300 shadow-md hover:shadow-xl rounded-lg select-none">
  <!-- Header -->
  <ProjectItemHeader title={ projectData.title }
                     desc={ projectData.desc }
                     stacks={ projectData.stacks } />

  <!-- Info -->
  { #if !isTeamProject }
    <ProjectItemInfo showDetails={ showDetails }
                     status={ projectData.status }
                     yearFrom={ projectData.yearFrom }
                     yearTo={ projectData.yearTo }
                     repositoryUrl={ projectData.repositoryUrl } />
  { :else }
    <ProjectItemInfo showDetails={ showDetails }
                     isTeamProject={ isTeamProject }
                     status={ projectData.status }
                     yearFrom={ projectData.yearFrom }
                     yearTo={ projectData.yearTo }
                     repositoryUrl={ projectData.repositoryUrl }
                     teamAssociation={ projectDataTeam.association }
                     teamName={ projectDataTeam.teamName }
                     teamCharge={ projectDataTeam.charge } />
  { /if }

  <!-- Details -->
  { #if showDetails }
    <ProjectItemDetails details={ projectData.details } />
  { /if }

  <!-- App link -->
  { #if projectData.appUrl }
    <ProjectItemAppLink url={ projectData.appUrl } />
  { :else if isTeamProject && projectDataTeam.pageUrl }
    <ProjectItemAppLink url={ projectDataTeam.pageUrl }
                        text="관련 페이지" />
  { /if }
</section>

<script lang="ts">
import type { ProjectData, ProjectDataTeam } from "$lib/interfaces";
import ProjectItemHeader from "./ProjectItemHeader.svelte";
import ProjectItemInfo from "./ProjectItemInfo.svelte";
import ProjectItemDetails from "./ProjectItemDetails.svelte";
import ProjectItemAppLink from "./ProjectItemAppLink.svelte";

export let projectData: ProjectData;
export let showDetails = true;
export let isTeamProject = false;

$: projectDataTeam = projectData as ProjectDataTeam;
</script>

<style>
.project-item {
  transform: translateY(0);
}

.project-item:hover,
.project-item:focus {
  transform: translateY(-1.5%);
}
</style>
