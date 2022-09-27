import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'

export const useSystemStore = defineStore('system', {
  state: () => ({
    systeminfo: [],
  }),
  actions: {
    async getSystem() {
      try {
        const response = await axios.get('/api/41/system/info?format=json',{
          headers: {
            'Content-Type': 'application/json',
            'X-Rundeck-Auth-Token': 'DevTk'
          },
        });
        console.log(response);
        this.systeminfo = response
      } catch (error) {
        console.error(error);
      }
      /*
      const result = await fetch('/api/27/system/info?format=json',{
        headers: {
          'Content-Type': 'application/json',
          'X-Rundeck-Auth-Token': 'DevTk'
        },
      });
      const data = await result.json();
      console.log(data)
      this.systeminfo = data;
      */
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
