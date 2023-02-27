import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { resetTopic, setTopicAs } from "../features/topic/topicSlice";
import { useAppDispatch } from "../hooks";

const Feed: React.FC = () => {
    let { category } = useParams();

    const dispatch = useAppDispatch();

    // Sets the current category of posts

    useEffect(() => {
        if(typeof category === 'undefined'){
            dispatch(resetTopic);
        } else {
            dispatch(setTopicAs(category.toLowerCase()));
        }
    }, [category]);

    return <h2>This is feed component with {category ? category : 'Home'} category!</h2>
}


export default Feed;