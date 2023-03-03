import { RedditPost } from "../../features/posts/postsSlice";
import Post from "../../components/Post/Post";

type Props = {
    filteredPosts: RedditPost[]
}

const SortedPosts: React.FC<Props> = ({filteredPosts}) => {
    return (
        <ul>
            {
                filteredPosts.map((post) => {
                    return <Post post={post} key={post.id}/>
                })
            }
        </ul>
    )
}

export default SortedPosts;