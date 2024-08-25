import {createAuthedClient} from "~/utils/twitterClient";

export default defineEventHandler(async (event) => {
    const session = await useSession(event, {password: process.env.NUXT_SESSION_PASSWORD || '625866ef-8745-4fcf-9bac-ac670259f867'});
    if (!session || !session.data.isLogged) {
        return createError({
            status: 400,
            statusMessage: "Bad Request",
            message: "You are not logged in!",
        })
    }
    const formData = await readFormData(event);
    const file = formData.get('file') as File;
    if (!file) {
        return createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
            message: 'No file uploaded',
        });
    }
    const fileBuffer = await file.arrayBuffer();
    const client = createAuthedClient(session.data.accessToken, session.data.accessSecret);
    try {
        const data = await client.v1.updateAccountProfileImage(Buffer.from(fileBuffer));
        return {
            status: 200,
            statusMessage: "OK",
            data: data,
        }
    } catch (e) {
        return createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: 'Error uploading file',
        })
    }
})
