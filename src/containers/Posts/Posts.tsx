import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import LoadingComp from "../../components/LoadingComp/LoadingComp";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import PostsDisplayer from "../../components/PostsDisplayer/PostsDisplayer";

type Props = {
    data: {}[];
    isLoading: boolean;
    error: string | null;
}

const Posts: React.FC<Props> = ({isLoading, error, data}) => {

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