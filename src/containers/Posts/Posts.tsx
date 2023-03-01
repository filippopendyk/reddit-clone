import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import LoadingComp from "../../components/LoadingComp/LoadingComp";
import ErrorComp from "../../components/ErrorComp/ErrorComp";


const Posts: React.FC = () => {
    const { data, isLoading, error } = useAppSelector((state) => state.posts);

    if(isLoading){
        return <LoadingComp/>
    }

    if(error){
        return <ErrorComp error={error}/>
    }

    return (
        <h3>Loaded posts!</h3>
    )
}

export default Posts;