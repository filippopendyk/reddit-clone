import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { fetchPosts } from "../features/posts/postsSlice";
import Posts from "../containers/Posts/Posts";
import { useAppSelector } from "../hooks";

const Feed: React.FC = () => {
    let { category } = useParams();
    const dispatch = useAppDispatch();

    const { data, isLoading, error } = useAppSelector((state) => state.posts);

    useEffect(() => {
        let topic = category ? category : 'all';

        dispatch(fetchPosts(topic));
    },[category]);

    return <Posts data={data} isLoading={isLoading} error={error}/>
}


export default Feed;