<script setup lang="ts">
import { createMouseAnimation } from '../../src/createMouseAnimation'
</script>

<template>
  <main
    font-sans p="x-4 y-10" h-full text="center gray-700 dark:gray-200"
    @mousemove="e => createMouseAnimation(e, { background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9ImN1cnJlbnRDb2xvciI+PHBhdGggZD0iTTIzMiAxMDhhMjAgMjAgMCAxIDEtMjAtMjBhMjAgMjAgMCAwIDEgMjAgMjBtLTE2OCAwYTIwIDIwIDAgMSAwLTIwIDIwYTIwIDIwIDAgMCAwIDIwLTIwbTI4LTI4YTIwIDIwIDAgMSAwLTIwLTIwYTIwIDIwIDAgMCAwIDIwIDIwbTcyIDBhMjAgMjAgMCAxIDAtMjAtMjBhMjAgMjAgMCAwIDAgMjAgMjBtMTkuMjQgNzUuODVBNDMuNDYgNDMuNDYgMCAwIDEgMTYyLjU3IDEzMGEzNiAzNiAwIDAgMC02OS4xNCAwYTQzLjQ5IDQzLjQ5IDAgMCAxLTIwLjY3IDI1LjlhMzIgMzIgMCAwIDAgMjcuNzMgNTcuNjJhNzIuNDkgNzIuNDkgMCAwIDEgNTUgMGEzMiAzMiAwIDAgMCAyNy43My01Ny42MloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTIxMiA4MGEyOCAyOCAwIDEgMCAyOCAyOGEyOCAyOCAwIDAgMC0yOC0yOG0wIDQwYTEyIDEyIDAgMSAxIDEyLTEyYTEyIDEyIDAgMCAxLTEyIDEyTTcyIDEwOGEyOCAyOCAwIDEgMC0yOCAyOGEyOCAyOCAwIDAgMCAyOC0yOG0tMjggMTJhMTIgMTIgMCAxIDEgMTItMTJhMTIgMTIgMCAwIDEtMTIgMTJtNDgtMzJhMjggMjggMCAxIDAtMjgtMjhhMjggMjggMCAwIDAgMjggMjhtMC00MGExMiAxMiAwIDEgMS0xMiAxMmExMiAxMiAwIDAgMSAxMi0xMm03MiA0MGEyOCAyOCAwIDEgMC0yOC0yOGEyOCAyOCAwIDAgMCAyOCAyOG0wLTQwYTEyIDEyIDAgMSAxLTEyIDEyYTEyIDEyIDAgMCAxIDEyLTEybTIzLjEyIDEwMC44NmEzNS4zIDM1LjMgMCAwIDEtMTYuODctMjEuMTRhNDQgNDQgMCAwIDAtODQuNSAwQTM1LjI1IDM1LjI1IDAgMCAxIDY5IDE0OC44MkE0MCA0MCAwIDAgMCA4OCAyMjRhMzkuNDggMzkuNDggMCAwIDAgMTUuNTItMy4xM2E2NC4wOSA2NC4wOSAwIDAgMSA0OC44NyAwYTQwIDQwIDAgMCAwIDM0LjczLTcyWk0xNjggMjA4YTI0IDI0IDAgMCAxLTkuNDUtMS45M2E4MC4xNCA4MC4xNCAwIDAgMC02MS4xOSAwYTI0IDI0IDAgMCAxLTIwLjcxLTQzLjI2YTUxLjIyIDUxLjIyIDAgMCAwIDI0LjQ2LTMwLjY3YTI4IDI4IDAgMCAxIDUzLjc4IDBhNTEuMjcgNTEuMjcgMCAwIDAgMjQuNTMgMzAuNzFBMjQgMjQgMCAwIDEgMTY4IDIwOCIvPjwvZz48L3N2Zz4=) center center no-repeat', timeout: 1000 })"
  >
    <router-view />
    <Footer />
  </main>
</template>
