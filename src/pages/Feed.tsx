import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import Posts from "../containers/Posts";

const Feed: React.FC = () => {
    let { category } = useParams();

    return <Posts category = {category} />
}


export default Feed;