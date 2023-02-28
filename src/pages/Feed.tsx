import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";

const Feed: React.FC = () => {
    let { category } = useParams();

    // Sets the current category of posts

    return <h2>This is feed component with {category ? category : 'Home'} category!</h2>
}


export default Feed;