<section class="flex flex-col md:p-6 p-4 m-4 bg-white transition-shadow duration-300 shadow-lg hover:shadow-xl rounded-lg">
  <!-- Title / Stacks -->
  <header class="mb-4">
    <div class="flex flex-row flex-wrap justify-between items-center md:text-3xl text-2xl">
      <div class="font-bold mb-1 mr-4">{ projectData.title }</div>

      <div class="flex items-center my-1">
        { #each projectData.stacks as stack }
          <i class="devicon-{ stack.toLowerCase() }-plain colored mx-1"
             style="font-size: 70%"
             title={ stack } />
        { /each }
      </div>
    </div>
    <div class="md:text-xl text-lg text-zinc-700 font-light mt-2">{ @html projectData.desc }</div>
  </header>

  <!-- Dev years / Source code repo -->
  <div class="mb-4">
    { #if showDetails }
      <div class="font-semibold">
        { #if projectData.status === "ACTIVE" } <span class="text-cyan-600">개발 지속 중</span> { /if }
        { #if projectData.status === "MAINTAINING" } <span class="text-violet-600">유지보수 중</span> { /if }
        { #if projectData.status === "COMPLETED" } <span class="text-emerald-600">개발 완료 <small>(유지보수 X)</small></span> { /if }
        { #if projectData.status === "DISCONTINUED" } <span class="text-rose-600">개발 중단 <small>(미완성)</small></span> { /if }
      </div>
    { /if }

    <div class="text-zinc-500 mt-1">
      <span>{ buildYearRangeString(projectData.year_from, projectData.year_to) }</span>
      &bull;
      <a href={ projectData.repositoryUrl } class="inline-block">
        <i class="devicon-{ getSourceRepoPlatformFromUrl(projectData.repositoryUrl) }-plain" />
        <span>{ getGitHubRepoShorthand(projectData.repositoryUrl) }</span>
      </a>
    </div>
  </div>

  <!-- Details -->
  { #if showDetails }
    <div>
      <ul class="text-sm list-disc list-outside md:pl-6 pl-4">
        { #each projectData.details as detail }
          <li>{ @html detail }</li>
        { /each }
      </ul>
    </div>
  { /if }

  <!-- App link -->
  { #if projectData.appUrl }
    <div class="text-right font-semibold text-sky-600 mt-2">
      <a href={ projectData.appUrl } class="p-2 text-lg after:content-['→'] after:ml-2">배포/릴리즈</a>
    </div>
  { /if }
</section>

<script lang="ts">
import type { ProjectData } from "$lib/interfaces";

export let projectData: ProjectData;
export let showDetails: boolean = true;

function buildYearRangeString(from: number, to: number): string {
  let result = from.toString();

  if(from !== to) {
    result += "-";

    if(to !== -1) {
      result += to.toString();
    }
  }

  return result;
}

function getSourceRepoPlatformFromUrl(url: string): "github" | null {
  const usp = new URL(url);

  switch(usp.host) {
    case "github.com": return "github";
    default: return null;
  }
}

function getGitHubRepoShorthand(url: string): string {
  const path = new URL(url).pathname;
  const regexMatch = /^\/(.+)\/(.+)$/.exec(path);

  if(regexMatch) {
    return `${regexMatch[1]}/${regexMatch[2]}`;
  } else {
    return path;
  }
}
</script>