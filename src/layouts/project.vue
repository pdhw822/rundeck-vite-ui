<template>
  <main class=" text-gray-700 dark:text-gray-200 mt-12 relative">
    <Navbar />
    <div class="flex h-full">
      <ProjectBar/>
      <div class="ml-12 p-6 w-full">
        <div class="max-w-5xl mx-auto">
          <RouterView />
          <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
            [Project Layout]
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>
