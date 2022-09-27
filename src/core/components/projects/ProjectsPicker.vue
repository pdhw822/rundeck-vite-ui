<template>
  <OnClickOutside @trigger="close">
  <div class="relative" >
    <div  @click="toggle()"  class="rounded p-2 border flex justify-between items-center w-80 cursor-pointer">
      <div class="flex items-center">
        <div i="heroicons-folder-20-solid" class="w-5 h-5 text-black dark:text-white"/>
        <div class="text-sm ml-3">Select a Project</div>
      </div>
      <div i="heroicons-chevron-down-20-solid" class="w-5 h-5 text-black dark:text-white"/>
    </div>
    <div :class="[togglestate ? '' : 'hidden']" class="absolute top-12 left-0 w-full bg-white dark:bg-gray-900  rounded max-h-48 overflow-y-scroll shadow-xl shadow-red-500/20">
      <div v-for="(item,index) in projectsList" :key="index">
        <a :href="`/projects/${item.name}`" @click="toggle">
          <div class="px-4 py-1 hover:bg-gray-700 cursor-pointer first:pt-3 last:pb-3">
            {{item.name}}
          </div>
        </a>
      </div>
    </div>
  </div>
</OnClickOutside>
</template>
<script setup lang="ts">
  import { OnClickOutside } from '@vueuse/components'
  
</script>

<script lang="ts">
  import { mapState } from 'pinia'
  import { useProjectStore } from '~/store/projects'
  import { defineComponent } from "vue"

  export default defineComponent({
      data(){
        return {
          togglestate: false
        }
      },
      computed: {
      ...mapState(useProjectStore, ['projectsList'])
      },
      methods: {
        toggle(){
          this.togglestate = !this.togglestate
        },
        close(){
          this.togglestate = false
        }
      }
    })
  </script>