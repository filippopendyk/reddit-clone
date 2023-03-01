import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import LoadingComp from "../../components/LoadingComp/LoadingComp";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import PostsDisplayer from "../../components/PostsDisplayer/PostsDisplayer";

const Posts: React.FC = () => {
    const { data, isLoading, error } = useAppSelector((state) => state.posts);

    if(isLoading){
        return <LoadingComp/>
    }

    if(error){
        return <ErrorComp error={error}/>
    }

    return (
        <PostsDisplayer posts={data}/>
    )
}

export default Posts;