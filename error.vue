<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="absolute min-h-[100svh] w-full flex flex-col justify-center items-center">
    <h1 class="text-9xl">{{ error?.statusCode }}</h1>
    <pre>{{ error?.message }}</pre>
    <NuxtLink class="underline cursor-pointer hover:text-blue-800" to="/">Go back home</NuxtLink>
  </div>
</template>
