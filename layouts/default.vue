<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-grow container mx-auto p-6">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
