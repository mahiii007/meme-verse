import "./Post.css";
import { MoreVert, Favorite, ThumbUpSharp } from "@mui/icons-material";
import { hundredUser } from "./../../dummyData";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="topPostSection">
          <div className="topLeft">
            <img
              className="profileImg"
              src={
                hundredUser.find((user) => user.id === post?.userId)
                  ?.profilePicture
              }
              alt="profile_pic"
            />
            <span className="profName">
              {hundredUser.find((user) => user.id === post.userId)?.username}
            </span>
            <span className="postTime">5 mins ago</span>
          </div>
          <div className="topRight">
            <MoreVert className="moreIcon" />
          </div>
        </div>
        <div className="centerPostSection">
          <span className="postCaption">{post?.desc}</span>
          <img
            className="postImg"
            src={post?.photo}
            loading="lazy"
            alt="profile_pic"
          />
        </div>
        <div className="bottomPostSection">
          <div className="bottomLeft">
            <Favorite htmlColor="red" className="reactionIcon" />
            <ThumbUpSharp htmlColor="blue" className="reactionIcon" />
            <span className="LikeCount">
              {post?.like} people liked the post.
            </span>
          </div>
          <div className="bottomRight">
            <button className="commentBtn">{post.comment} comments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
