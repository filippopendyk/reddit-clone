import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { resetTopic, setTopicAs } from "../features/topic/topicSlice";
import { useAppDispatch } from "../hooks";
import Posts from "../containers/Posts/Posts";

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

    return <Posts topic={category ? category : undefined} />
}


export default Feed;