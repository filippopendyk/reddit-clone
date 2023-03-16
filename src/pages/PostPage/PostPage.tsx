import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RedditPost } from "../../features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import selectPostById from "../../utils/selectPostById";
import './PostPage.css';
import BackButton from "../../components/BackButton/BackButton";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import formatUps from "../../utils/formatUps";
import getProperlyFormattedPreviewUrl from "../../utils/getProperlyFormattedPreviewUrl";
import getTimeDifference from "../../utils/getTimeDifference";
import getActualTimeInSeconds from "../../utils/getActualTime";

const Post: React.FC = () => {
   const currentPost = useAppSelector((state) => state.currentPost.currentPost);

   return (
      <main>
         <div className="wrapper">
            <BackButton/>
            <div className="post-container">
               <div className="stats-container">
                  <FaAngleUp/>
                  {currentPost?.ups && <p>{formatUps(currentPost.ups)}</p>}
                  <FaAngleDown/>
               </div>
               <div className="post-content-container">
                  <p className="subreddit-name">{currentPost?.subreddit_name_prefixed}</p>
                  <p className="author-time">Posted by {currentPost?.author} {currentPost?.created ? getTimeDifference(currentPost.created, getActualTimeInSeconds()) : null}</p>
                  <p className="title">{currentPost?.title}</p>
                  {
                     currentPost?.preview?.images[0].source.url.includes('https://') && <img className='post-img' src={getProperlyFormattedPreviewUrl(currentPost.preview.images[0].source.url)} alt={currentPost.title}/>
                  }
                  <p className="selftext">{currentPost?.selftext}</p>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Post;