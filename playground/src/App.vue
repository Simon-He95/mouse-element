<script setup lang="ts">
import { createElement } from '../../src/component'
function clickHandler(e: MouseEvent) {
  createElement(e)
}
</script>

<template>
  <main
    font-sans
    p="x-4 y-10"
    text="center gray-700 dark:gray-200"
    @mousemove="clickHandler"
  >
    <my-component />
    <router-view />
    <Footer />
  </main>
</template>
