import { RedditPost } from "../../features/posts/postsSlice";
import './Post.css';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import numeral from "numeral";
import getTimeDifference from "../../utils/getTimeDifference";
import * as moment from "moment";
import formatUps from "../../utils/formatUps";
import getActualTimeInSeconds from "../../utils/getActualTime";
import { useAppDispatch } from "../../hooks";

type Props = {
    post: RedditPost;
    key: number;
    id: number;
    thumbnail: string;
    author: string;
    subreddit_name_prefixed: string;
    selftext: string;
}

const Post: React.FC<Props> = ({post}) => {

    const dispatch = useAppDispatch();

    const handlePostClick = (): void => {
        dispatch(set)
    }

    return(
        <li>
            <div className="stats-container">
                <FaAngleUp/>
                <p>{formatUps(post.ups)}</p>
                <FaAngleDown/>
            </div>
            <div className="content-container">
                {
                    post.thumbnail.includes('https://') && <img src={post.thumbnail} alt={post.title}/>
                }
                <article className="text-container">
                    <p className="subreddit-name">{post.subreddit_name_prefixed}</p>
                    <p className="author-time">Posted by {post.author} {(getTimeDifference(post.created, getActualTimeInSeconds()))} </p>
                    <p className="title"
                        onClick={}
                    >{post.title}</p>
                    {
                        post.selftext.length > 0 ? <p data-testid='selftext' className="selftext">{post.selftext}</p> : null
                    }
                </article>
            </div>
        </li>
    )
}

export default Post;