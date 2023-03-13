import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getAccessToken from "../../api/getAccessToken";
import { deleteTheCurrentPost, fetchPost } from "../../features/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
// import { accessToken } from "../../api/getAccessToken";

const Post: React.FC = () => {
   const dispatch = useAppDispatch();
   
   useEffect(() => {
      getAccessToken();
      dispatch(deleteTheCurrentPost());
   },[])

   return <h2>dupa</h2>
}

export default Post;