<script setup lang="ts">
const gotoLogin = () => {
  window.location.href="/auth/twitter"
}
</script>

<template>
  <div class="w-full flex flex-col gap-3 p-5 md:px-32">
    <h1 class="text-xl">Twitter/X transparent avatar upload tool</h1>
    <button class="btn btn-primary" @click="gotoLogin">Login with Twitter</button>
    <p>This website only uses Twitter API to get your profile image and update your profile image.</p>
    <p>Presented by
      <a href="https://twitter.com/9_bishi" target="_blank" class="link">mikan</a>
    </p>
  </div>
</template>

<style scoped>

</style>
