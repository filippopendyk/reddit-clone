import { RedditPost } from "../../features/posts/postsSlice";
import Post from "../../components/Post/Post";

type Props = {
    filteredPosts: RedditPost[]
}

const SortedPosts: React.FC<Props> = ({filteredPosts}) => {
    console.log(filteredPosts);
    
    return (
        <ul>
            {
                filteredPosts.map((post) => {
                    return <Post post={post} key={post.id} id={post.id} author={post.author} thumbnail={post.thumbnail} subreddit_name_prefixed={post.subreddit_name_prefixed}/>
                })
            }
        </ul>
    )
}

export default SortedPosts;