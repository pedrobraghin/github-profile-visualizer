import type { ISearchHistory } from '~/types/search-history';

export function useHistory(key: string) {
  function save(data: ISearchHistory) {
    const current = load();
    const updated = [data, ...current.filter((u) => u.login !== data.login)];
    localStorage.setItem(key, JSON.stringify(updated));
  }

  function load(): ISearchHistory[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  function clear() {
    localStorage.removeItem(key);
  }

  return { save, load, clear };
}
