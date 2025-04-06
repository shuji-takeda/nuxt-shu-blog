<template>
  <v-app class="d-flex flex-column">
    <AppHeader />
    <v-main class="flex-grow-1 min-h-screen">
      <v-container class="py-6">
        <slot />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>
