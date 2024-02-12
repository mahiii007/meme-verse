import "./Post.css";
import { MoreVert, Favorite, ThumbUpSharp } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="topPostSection">
          <div className="topLeft">
            <img
              className="profileImg"
              src="assets/cheems.jpg"
              alt="profile_pic"
            />
            <span className="profName">Cheems Stark</span>
            <span className="postTime">5 mins ago</span>
          </div>
          <div className="topRight">
            <MoreVert className="moreIcon" />
          </div>
        </div>
        <div className="centerPostSection">
          <span className="postCaption">This is my 1st post !!!!!!!!!</span>
          <img className="postImg" src="assets/cheems.jpg" alt="profile_pic" />
        </div>
        <div className="bottomPostSection">
          <div className="bottomLeft">
            <Favorite htmlColor="red" className="reactionIcon" />
            <ThumbUpSharp htmlColor="blue" className="reactionIcon" />
            <span className="LikeCount">100 people liked the post.</span>
          </div>
          <div className="bottomRight">
            <button className="commentBtn">33 comments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
