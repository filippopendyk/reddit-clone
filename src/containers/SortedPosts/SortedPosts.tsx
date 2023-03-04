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
                    return <Post post={post} key={post.id} id={post.id} preview={post.preview} />
                })
            }
        </ul>
    )
}

export default SortedPosts;