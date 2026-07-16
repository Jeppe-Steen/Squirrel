export const useTheme = () => {
  const isDark = useState('theme-dark', () => true)

  const init = () => {
    if (!import.meta.client) return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const update = () => {
      isDark.value = media.matches
      document.documentElement.classList.toggle('dark', media.matches)
    }

    update()

    media.addEventListener('change', update)
  }

  return {
    isDark,
    init
  }
}