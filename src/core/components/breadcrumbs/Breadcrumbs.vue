<template>
  <div class="text-sm text-gray-300 capitalize">
    {{ route.name }}
  </div>
</template>

<script setup>


  const router = useRouter()
  const route = useRoute()
  console.log(route.path)
  console.log(route.name)


</script>