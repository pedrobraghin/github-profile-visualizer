import type { ISearchHistory } from '~/types/search-history';
import type { IGitHubUser } from '~/types/user';

export function buildHistoryEntry(user: IGitHubUser): ISearchHistory {
  return {
    avatar_url: user.avatar_url,
    name: user.name,
    consultedAt: new Date().toISOString(),
    login: user.login,
    html_url: user.html_url,
    social_links: {
      twitter: user.twitter_username,
      blog: user.blog,
      location: user.location,
      company: user.company,
    },
  };
}
