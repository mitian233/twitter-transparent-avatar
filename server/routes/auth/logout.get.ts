export default defineEventHandler(async (event) => {
    setCookie(event, 'logged', '', {expires: new Date(0)});
    const session = await useSession(event, {password: process.env.NUXT_SESSION_PASSWORD || '625866ef-8745-4fcf-9bac-ac670259f867'});
    if (session) {
        await session.clear();
    }
    return sendRedirect(event, '/');
})
