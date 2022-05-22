import { useMoralisDapp } from "../MoralisDappProvider/MoralisDappProvider";
import { useMoralisQuery } from "react-moralis";
import Post from './Post';

const Posts = () => {
    const { selectedCategory } = useMoralisDapp();
    // console.log(selectedCategory)
    
    const queryPost = useMoralisQuery(
        "Posts",
        (query) => query.equalTo("postCategory", selectedCategory["categoryId"]),
        [selectedCategory],
        { live: true }
    );

    const fetchedPosts = JSON.parse(JSON.stringify(queryPost.data, ["postId", "contentId", "postOwner"])).reverse();
    const havePosts = fetchedPosts.length > 0 ? true : false;
    console.log(havePosts)

    const emptyResult = (
        <div>
            <h3>Be the first to post here for</h3>
            <h3>{selectedCategory["category"]} </h3>
        </div>
    );
    
    const postResult = (
        <div>
            <h1 className="text-white">Hi!</h1>
        </div>
    )
    
    return havePosts ? postResult : emptyResult;
}

export default Posts