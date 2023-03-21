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
import PostContentContainer from "../../components/PostContentContainer/PostContentContainer";

const Post: React.FC = () => {
   const currentPost = useAppSelector((state) => state.currentPost.currentPost);

   return (
      <main>
         <div className="wrapper">
            <BackButton/>
            {
               currentPost ? <PostContentContainer post={currentPost}/> : 'Unable to load post, try again.'
            }
         </div>
      </main>
   )
}

export default Post;