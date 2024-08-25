import { TwitterApi } from "twitter-api-v2";
const twitterApiTokens = {
    appKey: process.env.TWITTER_APP_KEY || '',
    appSecret: process.env.TWITTER_APP_SECRET || '',
};

const requestClient = new TwitterApi(twitterApiTokens);

const createAuthedClient = (accessToken: string, accessSecret: string) => {
    return new TwitterApi({
        ...twitterApiTokens,
        accessToken,
        accessSecret,
    })
}

export {requestClient, createAuthedClient}
