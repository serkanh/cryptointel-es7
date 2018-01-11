//Get the number of users count from each reddit url

const axios = require("axios");
const url =
    "https://www.reddit.com/r/ethereum/about.json";

//TODO convert this to a query to run on dynamodb
let subreddit_array = ['ethereum', 'litecoin']

export function main(event, context, callback) {

    const getUserCount = async url => {
        try {
            const response = await axios.get(`https://www.reddit.com/r/${url}/about.json`);
            const data = response.data;
            console.log(`${url} subscribers: ${data.data.subscribers}`)
        } catch (error) {
            console.log(error);
        }
    }


    for (const sub in subreddit_array) {
        getUserCount(subreddit_array[sub]);
    }
}