import "./Share.css";
import { PermMedia, Tag, Place, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="shareTop">
          <img
            className="profileImg"
            src="assets/cheems.jpg"
            alt="profile_pic"
          />
          <input
            className="shareText"
            placeholder="what's on your mind?"
            type="text"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptsText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <Tag htmlColor="blue" className="shareIcon" />
              <span className="shareOptsText">Tag</span>
            </div>
            <div className="shareOption">
              <Place htmlColor="green" className="shareIcon" />
              <span className="shareOptsText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptsText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
