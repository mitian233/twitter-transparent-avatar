export default defineNuxtRouteMiddleware(async (to, from) => {
    const data = await useFetch('/api/getuser');
    const isLogged = (data.data.value?.statusMessage === 'OK');
    if(!isLogged) {
        return navigateTo('/')
    }
})
