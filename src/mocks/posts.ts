import { m } from "vitest/dist/types-0373403c";

const posts = [
    {
        ups: 123,
        created: 123456789,
        title: 'example',
        id: '123',
        author: 'filip popendyk',
        subreddit_name_prefixed: 'r/example',
        thumbnail: 'https://i.redd.it/ccskoy6lvx881.jpg',
        upvote_ratio: 0.97,
        selftext: 'siemano',
        preview: {
            images: [{
                source: {
                    url: 'https://i.redd.it/ccskoy6lvx881.jpg'
                }
            }]
        },
    },
    {
        ups: 2137,
        created: 21372134337,
        title: '2137',
        id: '234',
        author: 'wykop.pl',
        subreddit_name_prefixed: 'r/2137',
        thumbnail: '',
        upvote_ratio: 0.96,
        selftext: '',
        preview: {
            images: [{
                source: {
                    url: 'https://i.redd.it/ccskoy6lvx881.jpg'
                }
            }]
        },
    }
]

export default posts;