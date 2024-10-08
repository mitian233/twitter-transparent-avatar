<script setup lang="ts">
const {data: userdata} = useFetch('/api/getuser');
const user_data_dict = useUserData();
user_data_dict.value = userdata.value?.data;
const fileUploaderRef = ref<HTMLInputElement | null>(null);
const uploadLoadingRef = ref<HTMLSpanElement | null>(null);
const logoutModal = ref<HTMLDialogElement | null>(null);
const resultModal = ref<HTMLDialogElement | null>(null);
const uploadSucceed = ref<boolean | null>();

definePageMeta({
  middleware: [
    'auth',
  ]
})


const gotoLogout = () => {
  user_data_dict.value = null;
  window.location.href = "/auth/logout"
}
const handleSubmit = async () => {
  const file = fileUploaderRef.value?.files?.[0];
  if (!file) {
    return;
  } else {
    uploadLoadingRef.value?.style.setProperty('display', '');
    const formData = new FormData();
    formData.append('file', file);
    try {
      const fetchres = await fetch('/api/imgupload', {
        method: 'POST',
        body: formData
      })
      uploadSucceed.value = (fetchres.status === 200);
      resultModal.value?.showModal();
      uploadLoadingRef.value?.style.setProperty('display', 'none');
    } catch (e) {
      uploadSucceed.value = false;
      resultModal.value?.showModal();
      uploadLoadingRef.value?.style.setProperty('display', 'none');
    } finally {
      try {
        const data = await fetch('/api/getuser');
        const data_json = await data.json();
        user_data_dict.value = data_json?.data;
      } catch (e) {
        console.log(e);
      }
    }
  }
}

interface UserDataPart {
  id: number;
  name: string;
  screen_name: string;
}
</script>

<template>
  <div class="w-full flex flex-col gap-3 p-5 md:px-32">
    <h1 class="text-xl">Twitter/X transparent avatar upload tool</h1>
    <p>Hi! <a class="link" target="_blank"
              :href="'https://x.com/' + (userdata?.data as UserDataPart)?.screen_name">{{ (userdata?.data as UserDataPart)?.name }}</a>
    </p>
    <div class="flex flex-row gap-2 items-center">
      <label class="form-control w-full max-w-xs flex-auto w-full">
        <div class="label">
          <span class="label-text">Pick a image</span>
        </div>
        <input ref="fileUploaderRef" type="file" name="file" class="file-input file-input-bordered w-full"
               accept="image/jpeg, image/png"/>
        <div class="label">
          <span class="label-text-alt">&nbsp;</span>
        </div>
      </label>
      <button @click="handleSubmit" class="btn btn-primary">
        <span ref="uploadLoadingRef" class="loading loading-spinner" style="display: none;"></span>
        Upload
      </button>
    </div>
    <button class="btn" @click="logoutModal?.showModal()">Logout</button>
    <dialog ref="logoutModal" id="logout_modal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Logout</h3>
        <p class="py-4">Are you sure you want to logout?</p>
        <p class="pb-4">This will log you out of Twitter/X and clear your session. Your information has never been
          stored on the server. </p>
        <div class="modal-action">
          <form method="dialog" class="flex flex-row gap-2">
            <button class="btn btn-primary" @click="gotoLogout">Continue logout</button>
            <button class="btn">Cancel</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog ref="resultModal" id="result_modal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Upload result</h3>
        <p class="py-4">
          {{ uploadSucceed && uploadSucceed === true ? 'Upload success :)' : 'Something went wrong :(' }}</p>
        <p class="pb-4" v-if="uploadSucceed">Check your profile: <a class="link" target="_blank"
                                                                    :href="'https://x.com/' + (userdata?.data as UserDataPart)?.screen_name">{{ (userdata?.data as UserDataPart)?.name }}</a>
        </p>
        <div class="modal-action">
          <form method="dialog" class="flex flex-row gap-2">
            <button class="btn btn-primary">OK</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style scoped>

</style>
