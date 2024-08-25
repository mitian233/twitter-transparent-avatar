import {requestClient} from "~/utils/twitterClient";

export default defineEventHandler(async (event) => {
    // const session = await useSession(event, {password: process.env.NUXT_SESSION_PASSWORD || '625866ef-8745-4fcf-9bac-ac670259f867'});
    const authLink = await requestClient.generateAuthLink(process.env.SITE_URL + '/api/callback', { linkMode: 'authorize' });
    // console.log(authLink);
    return sendRedirect(event, authLink.url);
})
