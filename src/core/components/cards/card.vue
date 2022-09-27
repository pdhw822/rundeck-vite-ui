<template>
  <div class="bg-white dark:bg-gray-900 rounded-lg mt-6">
    <div :class="[cssOverride ? cssOverride : 'p-6']">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: ['cssOverride']
  })
</script>