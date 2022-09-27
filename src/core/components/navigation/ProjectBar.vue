<template>
   <div class="w-15 bg-gray-300 dark:bg-black fixed top-0 mt-15 h-[calc(100%-80px)]">
      <div class="w-full h-15 text-xs hover:bg-gray-400 text-gray-500 hover:text-gray-700 dark:text-gray-500 flex flex-col items-center justify-center cursor-pointer" v-for="(item,index) in navitems" :key="index">
          <div :class="item.class" class="w-7 h-7"></div>
        <div class="font-bold">{{item.label}}</div>
      </div>
    </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'
import { useProjectbarStore } from '~/store/projectbar'
import { defineComponent } from "vue"

export default defineComponent({
    computed: {
    ...mapState(useProjectbarStore, ['navitems'])
    }
  })
</script>