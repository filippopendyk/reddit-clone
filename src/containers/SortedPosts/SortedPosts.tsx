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
                filteredPosts.map((post, index) => {
                    return <Post post={post} key={index} id={post.id} author={post.author} thumbnail={post.thumbnail} subreddit_name_prefixed={post.subreddit_name_prefixed} selftext={post.selftext}/>
                })
            }
        </ul>
    )
}

export default SortedPosts;