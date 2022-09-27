import { acceptHMRUpdate, defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', {
  state: () => ({
    name: 'Rundeck OSS',
    theme: 'core'
  }),
  actions: {
    updateTheme() {
      document.querySelector('html').classList.add("MyClass");
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
