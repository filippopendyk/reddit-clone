import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getAccessToken from "../../api/getAccessToken";
import { deleteTheCurrentPost, fetchPost } from "../../features/post/postSlice";
import { useAppDispatch } from "../../hooks";
// import { accessToken } from "../../api/getAccessToken";

const Post: React.FC = () => {
   const { postId } = useParams();
   const dispatch = useAppDispatch();
   
   useEffect(() => {
      getAccessToken();
      fetchPost()
   },[])

   return <h2>dupa</h2>
}

export default Post;