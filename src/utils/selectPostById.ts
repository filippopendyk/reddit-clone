import { RedditPost } from "../features/posts/postsSlice";

export default function selectPostById(posts: RedditPost[], postId: string){
    const post = posts.filter((post) => {
        return post.id === postId;
    })

    return post;
}