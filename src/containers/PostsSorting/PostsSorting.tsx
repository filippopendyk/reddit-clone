import { RedditPost } from "../../features/posts/postsSlice";
import getFilterString from "../../utils/getFilterString";
import SortedPosts from "../SortedPosts/SortedPosts";

type Props = {
    posts: RedditPost[];
    filter: string;
}

const PostsSorting: React.FC<Props> = ({posts, filter}) => {    

    if(filter === 'best'){
        return <SortedPosts filteredPosts={posts}/>
    }

    if(filter === 'top'){
        let filteredPosts = posts.slice(0);
        filteredPosts.sort((a: RedditPost,b: RedditPost) => {
            if(a.ups > b.ups) return -1;
            if(a.ups < b.ups) return 1;
            return 0;
        })

        return <SortedPosts filteredPosts={filteredPosts}/>
    }

    if(filter === 'new'){
        let filteredPosts = posts.slice(0);
        filteredPosts.sort((a: RedditPost,b: RedditPost) => {
            if(a.created > b.created) return -1;
            if(a.created < b.created) return 1;
            return 0;
        })
        
        return <SortedPosts filteredPosts={filteredPosts}/>
    }

    return (
        <h4>You are currently displaying {getFilterString(filter)}</h4>
    )
}

export default PostsSorting;