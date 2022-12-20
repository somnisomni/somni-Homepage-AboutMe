<!-- Project information -->
<div class="mb-4">
  <!-- Dev status -->
  { #if showDetails }
    <div class="font-semibold">
      { #if status === "ACTIVE" } <span class="text-cyan-600">지속 개발 중</span> { /if }
      { #if status === "MAINTAINING" } <span class="text-violet-600">유지보수 중</span> { /if }
      { #if status === "COMPLETED" } <span class="text-emerald-600">개발 완료 <small>(유지보수 X)</small></span> { /if }
      { #if status === "DISCONTINUED" } <span class="text-rose-600">개발 중단 <small>(미완성)</small></span> { /if }
    </div>
  { /if }

  <div class="text-zinc-500">
    <!-- Dev years / Source code repo link -->
    <div class="mt-1">
      <span>{ buildYearRangeString(yearFrom, yearTo) }</span>
  
      { #if repositoryUrl }
        &bull;
        <a href={ repositoryUrl } class="inline-block">
          <i class="devicon-{ getSourceRepoPlatformFromUrl(repositoryUrl) }-plain" />
          <span>{ getGitHubRepoShorthand(repositoryUrl) }</span>
        </a>
      { /if }
    </div>
  
    <!-- Additional information for team projects -->
    { #if isTeamProject }
    <div class="mt-1">
      <span>{ teamAssociation }</span>
      &bull;
      <span>{ teamName }</span>
      &bull;
      <span>{ teamCharge }</span>
    </div>
    { /if }
  </div>
</div>

<script lang="ts">
import type { ProjectStatus } from "$lib/interfaces";

export let showDetails: boolean = true;
export let isTeamProject: boolean = false;

export let status: ProjectStatus;
export let yearFrom: number;
export let yearTo: number;
export let repositoryUrl: string | null | undefined;

export let teamAssociation: string | null | undefined = null;
export let teamName: string | null | undefined = null;
export let teamCharge: string | null | undefined = null;

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