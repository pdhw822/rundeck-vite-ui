<script setup lang="ts">
  const { t, availableLocales, locale } = useI18n()
  
  const toggleLocales = () => {
    // change to some real logic
    const locales = availableLocales
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  }
  </script>
  
  <template>
    <nav class="fixed top-0 w-full h-12 flex justify-between bg-white dark:bg-black shadow-lg z-10">
      <div class="flex">
        <router-link to="/" class="h-12 w-12 bg-red-500 p-3">
          <svg class="w-full" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class=" fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M47.8871 12.5101L40.4771 0.746094H0.768066L8.17807 12.5061L47.8881 12.5081L47.8871 12.5101ZM0.770066 59.5421H40.4801L47.8901 47.7821H8.18007L0.770066 59.5441V59.5421ZM15.5871 24.2651H55.2971L59.0001 30.1471L55.2971 36.0281H15.5871L19.2901 30.1471L15.5871 24.2661V24.2651Z" />
          </svg>
        </router-link>
        <div>
          project search
        </div>
      </div>  

      <div class="flex justify-end">
        <a class="h-12 w-12 p-3 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
          <div i="heroicons-cog-8-tooth-20-solid" class="w-8 h-8 text-black dark:text-white"/>
        </a>
        <a class="h-12 w-12 p-3 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
          <div i="heroicons-user-solid" class="w-8 h-8 text-black dark:text-white"/>
        </a>
      </div>
    </nav>
  </template>
  