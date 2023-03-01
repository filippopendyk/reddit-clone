import { RedditPost } from "../../features/posts/postsSlice";

type Props = {
    post: RedditPost;
    key: number;
}

const Post: React.FC<Props> = ({post, key}) => {
    return <>
        <li key={key}>
            <div className="stats-container">
                {post.ups};
            </div>
            <div className="content-container">
                {post.title}
            </div>
        </li>
    </>
}

export default Post;