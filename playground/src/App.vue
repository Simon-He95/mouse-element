<script setup lang="ts">
import { createElement } from '../../src/createElement'
</script>

<template>
  <main
    font-sans
    p="x-4 y-10"
    text="center gray-700 dark:gray-200"
    @mousemove="createElement"
  >
    <my-component />
    <router-view />
    <Footer />
  </main>
</template>
