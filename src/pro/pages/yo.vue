<script setup lang="ts">
  const { t } = useI18n()
  
  const system = useSystemStore()
  system.getSystem()
  </script>
  
  
  <template>
    <div class="container mx-auto">
     <h1>New Project {{ t('button.home') }}</h1>
    </div>
  </template>
  
  <route lang="yaml">
  meta:
    layout: default
  </route>
  