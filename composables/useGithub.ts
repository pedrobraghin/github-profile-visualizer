import type { IGitHubUser } from '~/types/user';
import { api } from '~/services/api';
import type { AxiosError } from 'axios';

export const useGithub = () => {
  const user = ref<IGitHubUser | null>(null);
  const error = ref<AxiosError | null>(null);
  const loading = ref(false);

  const fetchUser = async (username: string) => {
    loading.value = true;
    try {
      const res = await api.get(`https://api.github.com/users/${username}`);
      user.value = res.data;
    } catch (err) {
      error.value = err as AxiosError;
    } finally {
      loading.value = false;
    }
  };

  return { user, error, loading, fetchUser };
};
