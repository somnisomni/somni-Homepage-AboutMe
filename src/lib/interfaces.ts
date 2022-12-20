export type ProjectStatus = "ACTIVE" | "MAINTAINING" | "COMPLETED" | "DISCONTINUED";

export interface ProjectData {
  id: string,
  title: string,
  desc: string,
  stacks: string[],
  yearFrom: number,
  yearTo: number,
  status: ProjectStatus,
  details: string[],
  repositoryUrl?: string,
  appUrl?: string,
}

export interface ProjectDataTeam extends ProjectData {
  association: string,
  teamName: string,
  charge: string,
  pageUrl?: string,
}
