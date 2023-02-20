import { useParams } from "react-router-dom";

const Feed: React.FC = () => {
    let { category } = useParams();

    return <h2>This is feed component with {category ? category : 'Home'} category!</h2>
}


export default Feed;