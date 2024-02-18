import "./Feed.css";
import Share from "./../share/Share";
import Post from "./../post/Post";
import { hundredPost } from "./../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {hundredPost.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
