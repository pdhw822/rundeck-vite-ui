import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projectsList: [],
  }),
  actions: {
    async getProjects() {
      const result = await fetch('/api/14/projects?format=json',{
        headers: {
          'Content-Type': 'application/json',
          'X-Rundeck-Auth-Token': 'DevTk'
        },
      });
      const data = await result.json();
      console.log(data)
      this.projectsList = data;
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
