<script setup lang="ts">
const system = useSystemStore()
system.getSystem()


</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 gap-4">
      <card class="mb-6 flex justify-between items-center">
        <div class="font-black text-lg">Create a Project</div>
        <router-link to="/projects/create" class="btn-primary">New Project</router-link>
      </card>
      <card class="mb-6 flex justify-between items-center">
        <div class="font-black text-lg">Executions</div>
      </card>
    </div>
    <projects-table/>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
