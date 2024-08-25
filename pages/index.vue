<script setup lang="ts">
const gotoLogin = () => {
  window.location.href="/auth/twitter"
}
</script>

<template>
  <div class="h-[100svh] w-full flex flex-col justify-center items-center gap-3 p-5">
    <h1 class="text-xl text-center">Twitter/X transparent avatar upload tool</h1>
    <button class="btn" @click="gotoLogin">Login with Twitter</button>
    <p>This website only uses Twitter API to get your profile image and update your profile image.</p>
    <p>Presented by
      <a href="https://twitter.com/9_bishi" target="_blank" class="link">mikan</a> |
      <a href="https://github.com/mitian233/twitter-transparent-avatar" target="_blank" class="link">GitHub</a>
    </p>
  </div>
</template>

<style scoped>

</style>
