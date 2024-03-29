import { RedditPost } from "../../features/posts/postsSlice";
import getTimeDifference from "../../utils/getTimeDifference";
import getActualTimeInSeconds from "../../utils/getActualTime";
import getProperlyFormattedPreviewUrl from "../../utils/getProperlyFormattedPreviewUrl";
import formatUps from "../../utils/formatUps";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import './PostContentContainer.css';
import { MouseEventHandler } from "react";

type Props = {
    post: RedditPost;
}

const PostContentContainer: React.FC<Props> = ({post}) => {
   const handlePostClick: MouseEventHandler<HTMLParagraphElement> = () => {
      window.open(`https://reddit.com${post.permalink}`, "_blank");
   }

    return <div className="post-container">
    <div className="stats-container">
       <FaAngleUp/>
       {post.ups && <p>{formatUps(post.ups)}</p>}
       <FaAngleDown/>
    </div>
    <div className="post-content-container">
       <p className="subreddit-name">{post.subreddit_name_prefixed}</p>
       <p className="author-time">Posted by {post.author} {post.created ? getTimeDifference(post.created, getActualTimeInSeconds()) : null}</p>
       <p className="title" onClick={handlePostClick}>{post.title}</p>
       {
          post.preview?.images[0].source.url.includes('https://') && <img className='post-img' src={getProperlyFormattedPreviewUrl(post.preview.images[0].source.url)} alt={post.title}/>
       }
       {
         post.selftext ? <p className="selftext">{post.selftext}</p> : null
       }
    </div>
 </div>
}

export default PostContentContainer;