import getFilterString from "../../utils/getFilterString";

type Props = {
    posts: {}[];
    filter: string;
}

const PostsDisplayer: React.FC<Props> = ({posts, filter}) => {    
    let filteredPosts: {}[];

    

    return (
        <h4>You are currently displaying {getFilterString(filter)}</h4>
    )
}

export default PostsDisplayer;