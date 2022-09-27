<template>

  <div class="relative">
    <div>
      <button @click="toggle()" type="button" class="btn-secondary-sm flex items-center justify-center" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Options
        <div i="heroicons-chevron-down-20-solid" class="w-6 h-6 text-black"/>
      </button>
    </div>

    <div :class="[togglestate ? '' : 'hidden']" class=" absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none" v-for="(item, index) in config" :key="index">
        <router-link :to="item.link" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" :id="`menu-item-${index}`"> 
          {{ item.label}} 
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: ['config'],
    data(){
      return {
        togglestate: false
      }
    },
    methods: {
      toggle(){
        this.togglestate = !this.togglestate
      }
    }
  })
</script>