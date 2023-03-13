import axios from "axios";

const REDDIT_CLIENT_ID = import.meta.env.VITE_REDDIT_CLIENT_ID;
const REDDIT_CLIENT_SECRET = import.meta.env.VITE_REDDIT_CLIENT_SECRET;
const REDDIT_USERNAME = import.meta.env.VITE_REDDIT_USERNAME;
const REDDIT_PASSWORD = import.meta.env.VITE_REDDIT_PASSWORD;

export let accessToken = '';

async function getAccessToken() {

    const url = 'https://www.reddit.com/api/v1/access_token';
    const data = new URLSearchParams({
        grant_type: 'password',
        username: REDDIT_USERNAME,
        password: REDDIT_PASSWORD,
    });

    const auth = {
        username: REDDIT_CLIENT_ID,
        password: REDDIT_CLIENT_SECRET,
    };

    const headers = { 'Content-Type': 'application/x-www-form-urlencoded'};

    const response = await axios.post(url, data, { auth, headers });
    const token = response.data.access_token;

    accessToken = token;
    console.log(accessToken);
    return accessToken;
    console.log(token);
}

export default getAccessToken;