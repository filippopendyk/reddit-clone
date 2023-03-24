import PostComments from '../../components/PostComments/PostComments';
import './PostCommentProvider.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchComments } from '../../features/comments/commentsSlice';

type Props = {
    postId: string;
}

const PostCommentsProvider: React.FC<Props> = ({postId}) => {
    const dispatch = useAppDispatch();
    const { data, isLoading, error } = useAppSelector((state) => state.comments);

    useEffect(() => {
        console.log(postId, typeof(postId));
        dispatch(fetchComments(postId));
    },[]);

    if(isLoading){
        return <p>Loading comments...</p>
    }

    if(error){
        return <p>Error while loading comments: {error}</p>
    }

    return (
        <div className="post-comments-provider">
            <PostComments/>
        </div>
    )
}

export default PostCommentsProvider;