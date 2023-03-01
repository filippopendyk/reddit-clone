import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import LoadingComp from "../../components/LoadingComp/LoadingComp";
import ErrorComp from "../../components/ErrorComp/ErrorComp";

type Props = {
    topic: string | undefined;
}

const Posts: React.FC<Props> = ({topic}) => {
    const { data, isLoading, error } = useAppSelector((state) => state.posts);

    if(isLoading){
        return <LoadingComp/>
    }

    if(error){
        return <ErrorComp error={error}/>
    }

    return (
        <h3>This is Posts container about {topic ? topic : 'Home'}</h3>
    )
}

export default Posts;