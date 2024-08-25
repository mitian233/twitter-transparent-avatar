<script setup lang="ts">
const user_data = useUserData();
const gotoLogout = () => {
  user_data.value = null;
  window.location.href = "/auth/logout"
}
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="navbar fixed px-5">
        <div class="navbar bg-base-200 shadow-xl rounded-2xl">
          <div class="flex-1">
            <label for="my-drawer" class="btn btn-square drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </label>
            <NuxtLink class="btn btn-ghost text-xl" to="/">Transparent Avatar</NuxtLink>
          </div>
          <div class="flex-none gap-2">
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img
                      alt="Tailwind CSS Navbar component"
                      :src="user_data?.name ? user_data?.profile_image_url_https :'/default.jpg'" />
                </div>
              </div>
              <ul v-if="user_data?.name"
                  tabindex="0"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <p>Hi! {{user_data?.name}}</p>
                  <NuxtLink class="justify-between" to="/upload">
                    Profile pic upload
                  </NuxtLink>
                  <a class="justify-between" :href="'https://x.com/' + (user_data?.screen_name)">My Twitter profile</a>
                  <button class="justify-between" @click="gotoLogout">Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <div class="mb-5 text-xl">
          <p>Transparent Avatar</p>
        </div>
        <ul>
          <li><a href="https://3kn.jp/">Author</a></li>
          <li><a href="https://github.com/mitian233/twitter-transparent-avatar">GitHub Repo</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
