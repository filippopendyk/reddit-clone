import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { fetchPosts } from "../../features/posts/postsSlice";
import Posts from "../../containers/Posts/Posts";
import { useAppSelector } from "../../hooks";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import './Feed.css';
import { resetCurrentSubreddit, setCurrentCategoryAs } from "../../features/currentSubreddit/currentSubredditSlice";
import { deleteTheCurrentPost } from "../../features/post/postSlice";
import { resetCurrentPostId } from "../../features/currentPostId/currentPostIdSlice";

const Feed: React.FC = () => {
    let { category } = useParams();
    const dispatch = useAppDispatch();

    const { data, isLoading, error } = useAppSelector((state) => state.posts);

    useEffect(() => {
        let topic = category ? category : 'all';

        dispatch(fetchPosts(topic));
        dispatch(resetCurrentSubreddit());
        dispatch(deleteTheCurrentPost());
        dispatch(resetCurrentPostId());
    },[category]);

    return (
        <main>
            <div className="wrapper">
                <FilterMenu/>
                <Posts data={data} isLoading={isLoading} error={error}/>
            </div>
        </main>
    )
}


export default Feed;