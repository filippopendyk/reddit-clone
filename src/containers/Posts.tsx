import { useAppSelector } from "../hooks";

type Props = {
    category: string | undefined; 
}

const Posts: React.FC<Props> = ({category}) => {

    return (
        <h1>This is Posts container about {category}</h1>
    )
}

export default Posts;