import { useParams } from "react-router-dom";

const Feed: React.FC = () => {
    let { category } = useParams();
    console.log(category);

    return <h2>This is feed component with {category} category!</h2>
}


export default Feed;