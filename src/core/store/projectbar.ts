import { acceptHMRUpdate, defineStore } from 'pinia'
export const useProjectbarStore = defineStore('projectbar', {
  state: () => ({
    navitems: [
      {
          type: 'link',
          id: 'nav-project-dashboard-link',
          group: 'main',
          class: 'i-heroicons-home-20-solid',
          link: '/projects/project-name',
          label: 'Home',
          active: false,
          auth: ['admin','user','ops']
      },
      {
          type: 'link',
          id: 'nav-jobs-link', 
          group: 'main',
          class: 'i-heroicons-briefcase-20-solid',
          link: '/projects/project-name/jobs',
          label: 'Jobs',
          active: false,
          auth: ['admin','user','ops']
      },
      {
          type: 'link',
          id: 'nav-nodes-link',
          group: 'main',
          class: 'i-heroicons-server-stack-20-solid',
          link: '/projects/project-name/nodes',
          label: 'Nodes',
          active: false,
          auth: ['admin','user','ops']
      },
      {
          type: 'link',
          id: 'nav-commands-link',
          group: 'main',
          class: 'i-heroicons-command-line-solid',
          link: '/projects/project-name/commands',
          label: 'Ad-Hoc',
          active: false,
          auth: ['admin','user','ops']
      },
      {
          type: 'link',
          id: 'nav-activity-link',
          group: 'main',
          class: 'i-heroicons-signal',
          link: '/projects/project-name/activity',
          label: 'Activity',
          active: false,
          auth: ['admin','user','ops']
      },
      {
          id: 'nav-project-settings',
          type: 'container',
          style: 'list',
          group: 'bottom',
          class: 'i-heroicons-wrench-screwdriver-solid          ',
          label: 'Settings',
          active: false,
          auth: ['admin','user','ops']
      }
    ],
  })
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
