import type { ContributionItem } from "./interfaces";

export default function parseContributionUrl(repoUrl: string, contribItem: ContributionItem): string | null {
  if(repoUrl.match(/^https?:\/\/github.com\/(.+)\/(.+)/)) {
    if(contribItem.pullRequest) {
      return `${repoUrl}/pull/${contribItem.pullRequest}`;
    } else if(contribItem.directCommit) {
      return `${repoUrl}/commit/${contribItem.directCommit}`;
    }
  }

  return null;
}
