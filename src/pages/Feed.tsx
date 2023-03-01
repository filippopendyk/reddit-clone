import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { fetchPosts } from "../features/posts/postsSlice";
import Posts from "../containers/Posts/Posts";

const Feed: React.FC = () => {
    let { category } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        let topic = category ? category : 'all';

        dispatch(fetchPosts(topic));
    },[category]);

    return <Posts/>
}


export default Feed;