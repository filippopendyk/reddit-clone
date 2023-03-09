import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getAccessToken from "../../api/getAccessToken";
// import { accessToken } from "../../api/getAccessToken";

const Post: React.FC = () => {
   const { postId } = useParams();
   
   useEffect(() => {
      getAccessToken();
   },[])

   return <h2>dupa</h2>
}

export default Post;