<script setup lang="ts">
import { createMouseAnimation } from '../../src/createMouseAnimation'
</script>

<template>
  <main
    font-sans p="x-4 y-10" h-full text="center gray-700 dark:gray-200"
    @mousemove="e => createMouseAnimation(e, { backgroundColor: 'yellow', timeout: 1000 })"
  >
    <router-view />
    <Footer />
  </main>
</template>
