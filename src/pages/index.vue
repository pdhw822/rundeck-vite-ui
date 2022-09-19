<script setup lang="ts">
const system = useSystemStore()
system.getSystem()


</script>

<template>
  <div class="container mx-auto">
    <projects-table/>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
