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

    return (
        <div className="posts-container">
            {
                isLoading ? <LoadingComp/>
                : error ? <ErrorComp error={error}/>
                : <PostsDisplayer posts={data} />
            }
        </div>
    )
}

export default Posts;