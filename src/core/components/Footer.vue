<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="h-6 text-xl mt-6 fixed bottom-0 w-full bg-white dark:bg-black flex justify-between items-center">
    <div class="text-xs text-white bg-gray-700 h-6 px-4 flex items-center font-bold">
      <span to="/" class="h-3 w-3 inline-block mr-2">
          <svg class="w-full" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class=" fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M47.8871 12.5101L40.4771 0.746094H0.768066L8.17807 12.5061L47.8881 12.5081L47.8871 12.5101ZM0.770066 59.5421H40.4801L47.8901 47.7821H8.18007L0.770066 59.5441V59.5421ZM15.5871 24.2651H55.2971L59.0001 30.1471L55.2971 36.0281H15.5871L19.2901 30.1471L15.5871 24.2661V24.2651Z" />
          </svg>
        </span>
      RUNDECK OSS
    </div>
    <div>
      <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
        <div class="text-sm" i-carbon-campsite />
      </RouterLink>

      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div class="text-sm" i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div class="text-sm" i-carbon-language />
      </a>

      <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <div class="text-sm" i-carbon-dicom-overlay />
      </RouterLink>

      <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
        <div class="text-sm" i-carbon-logo-github />
      </a>
    </div>
  </nav>
</template>
