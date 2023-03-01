import { RedditPost } from "../../features/posts/postsSlice";

type Props = {
    filteredPosts: RedditPost[]
}

const SortedPosts: React.FC<Props> = ({filteredPosts}) => {
    return <p>This is sorted posts container</p>
}

export default SortedPosts;