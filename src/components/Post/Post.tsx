import { RedditPost } from "../../features/posts/postsSlice";
import './Post.css';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import numeral from "numeral";

type Props = {
    post: RedditPost;
    key: number;
    id: number;
    preview?: {
        images: {
            source: {
                url: string;
            }
        }[]
    } | undefined;
}

const Post: React.FC<Props> = ({post}) => {
    let postViewsShortened = numeral(post.ups).format('0,0a');
    let isPreviewPreset = post.preview?.images[0].source.url ? true : false;
    let postPreview: string | undefined = post.preview?.images[0].source.url;

    return(
        <li>
            <div className="stats-container">
                <p>{(postViewsShortened).toString()}</p>
            </div>
            <div className="content-container">
                {post.title}
                {
                    isPreviewPreset ? <img src={postPreview} alt={post.title}/> : null
                }
            </div>
        </li>
    )
}

export default Post;