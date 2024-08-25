import {createAuthedClient} from "~/utils/twitterClient";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const oauthToken = query.oauth_token;
    const oauthVerifier = query.oauth_verifier;
    const session = await useSession(event, {password: process.env.NUXT_SESSION_PASSWORD || '625866ef-8745-4fcf-9bac-ac670259f867'});
    if (!oauthToken || !oauthVerifier || !session) {
        return createError({
            status: 400,
            statusMessage: "Bad Request",
            message: "You denied the app or your session expired!",
        })
    } else {
        await session.update({
            oauthToken: oauthToken.toString(),
            oauthVerifier: oauthVerifier.toString(),
            isLogged: true,
        })
    }
    const client = createAuthedClient(oauthToken.toString(), session.id as string);
    try {
        const { client: loggedClient, accessToken, accessSecret } = await client.login(oauthVerifier.toString());
        await session.update({
            accessToken: accessToken,
            accessSecret: accessSecret,
        });
        setCookie(event, 'logged', 'true');
        return sendRedirect(event, '/upload');
    } catch (e) {
        return createError({
            status: 400,
            statusMessage: "Bad Request",
            message: "Invalid verifier or access tokens!",
        })
    }
})
