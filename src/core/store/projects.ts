import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
export const useProjectStore = defineStore('projects', {
  state: () => ({
    currentProject: [],
    projectsList: [],
  }),
  actions: {
    async getProjects() {
      try {
        const response = await axios.get('/api/41/projects?format=json',{
          headers: {
            'Content-Type': 'application/json',
            'X-Rundeck-Auth-Token': 'DevTk'
          },
        });
        console.log(response);
        this.projectsList = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getProject(projectname: string) {
      try {
        const response = await axios.get(`/api/41/project/${projectname}?format=json`,{
          headers: {
            'Content-Type': 'application/json',
            'X-Rundeck-Auth-Token': 'DevTk'
          },
        });
        console.log(response);
        this.currentProject = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async createProject(projectdata: object) {
      try {
        const response = await axios.post(
          '/api/14/projects?format=json',
          {
            "name": projectdata.name,
            "config": { 
              "label":projectdata.label,
              "description":projectdata.description, 
            } 
          },
          {
          headers: {
            'Content-Type': 'application/json',
            'X-Rundeck-Auth-Token': 'DevTk'
          },
        });
        console.log(response);
        return response
      } catch (error) {
        console.error(error);
      }
    }
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
