import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import LoadingComp from "../../components/LoadingComp/LoadingComp";
import ErrorComp from "../../components/ErrorComp/ErrorComp";
import PostsDisplayer from "../PostsSorting/PostsSorting";
import PostsSorting from "../PostsSorting/PostsSorting";
import { RedditPost } from "../../features/posts/postsSlice";

type Props = {
    data: RedditPost[];
    isLoading: boolean;
    error: string | null;
}

const Posts: React.FC<Props> = ({isLoading, error, data}) => {

    const filter = useAppSelector((state) => state.filter.filter);

    return (
        <div className="posts-container">
            {
                isLoading ? <LoadingComp/>
                : error ? <ErrorComp error={error}/>
                : <PostsSorting posts={data} filter={filter}/>
            }
        </div>
    )
}

export default Posts;