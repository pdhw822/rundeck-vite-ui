import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => ({
    systeminfo: [],
  }),
  actions: {
    async getSystem() {
      const result = await fetch('/api/27/system/info?format=json',{
        headers: {
          'Content-Type': 'application/json',
          'X-Rundeck-Auth-Token': 'DevTk'
        },
      });
      const data = await result.json();
      console.log(data)
      this.systeminfo = data;
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
