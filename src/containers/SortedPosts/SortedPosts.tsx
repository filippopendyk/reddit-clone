import { RedditPost } from "../../features/posts/postsSlice";
import Post from "../Post/Post";

type Props = {
    filteredPosts: RedditPost[]
}

const SortedPosts: React.FC<Props> = ({filteredPosts}) => {
    return (
        <ul>
            {
                filteredPosts.map((post, index) => {
                    return <Post post={post} key={index}/>
                })
            }
        </ul>
    )
}

export default SortedPosts;