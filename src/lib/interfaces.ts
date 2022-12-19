export interface ProjectData {
  id: string,
  title: string,
  desc: string,
  stacks: string[],
  year_from: number,
  year_to: number,
  status: "ACTIVE" | "MAINTAINING" | "COMPLETED" | "DISCONTINUED",
  details: string[],
  repositoryUrl?: string,
  appUrl?: string,
}

export interface ProjectDataTeam extends ProjectData {
  charge: string,
  pageUrl?: string,
}
