import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { fetchPosts } from "../features/posts/postsSlice";

const Feed: React.FC = () => {
    let { category } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        let topic = category ? category : 'all';

        dispatch(fetchPosts(topic));
    },[category]);

    return <h2>This is feed component with {category ? category : 'Home'} category!</h2>
}


export default Feed;