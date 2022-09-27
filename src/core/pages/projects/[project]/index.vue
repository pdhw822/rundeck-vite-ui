<template>
  <div class="container mx-auto">
    <Breadcrumbs />
    <page-title></page-title>

    <pre wrap>{{ currentProject }}</pre>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useProjectStore } from '~/core/store/projects'
  export default {
    mounted(){
      const route = useRoute()
      console.log(route.path)
      console.log(route)
      console.log(route.query)
      console.log(route.name)
      console.log(route.fullPath)
      console.log(route.params)
      this.getProject(route.params.project)
    },

    methods: {
      ...mapActions(useProjectStore, ['getProject'])
    },
    computed: {
      ...mapState(useProjectStore, ['currentProject'])
    },
  }
</script>
<route lang="yaml">
  meta:
    layout: project
  </route>