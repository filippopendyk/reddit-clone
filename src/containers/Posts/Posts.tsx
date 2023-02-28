import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";

type Props = {
    topic: string | undefined;
}

const Posts: React.FC<Props> = ({topic}) => {



    return (
        <h2>This is Posts container about {topic ? topic : 'Home'}</h2>
    )
}

export default Posts;