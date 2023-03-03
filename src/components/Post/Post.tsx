import { RedditPost } from "../../features/posts/postsSlice";
import './Post.css';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import numeral from "numeral";

type Props = {
    post: RedditPost;
    key: number;
}

const Post: React.FC<Props> = ({post}) => {
    let postViewsShortened = numeral(post.ups).format('0,0a');

    return(
        <li>
            <div className="stats-container">
                <p>{(postViewsShortened).toString()}</p>
            </div>
            <div className="content-container">
                {post.title}
            </div>
        </li>
    )
}

export default Post;