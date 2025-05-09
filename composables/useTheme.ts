const theme = ref('dark');

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  onMounted(() => {
    theme.value = localStorage.getItem('theme') ?? 'dark';

    watch(
      theme,
      (newTheme) => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
      },
      { immediate: true }
    );
  });

  return {
    theme,
    toggleTheme,
  };
}
