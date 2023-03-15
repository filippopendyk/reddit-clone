import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RedditPost } from "../../features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import selectPostById from "../../utils/selectPostById";
import './PostPage.css';
import BackButton from "../../components/BackButton/BackButton";

const Post: React.FC = () => {
   const currentPost = useAppSelector((state) => state.currentPost.currentPost);

   return (
      <main>
         <div className="wrapper">
            <BackButton/>
            <p>Eluwina</p>
         </div>
      </main>
   )
}

export default Post;