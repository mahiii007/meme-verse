import "./Sidebar.css";
import FeedIcon from "@mui/icons-material/Feed";
import PeopleIcon from "@mui/icons-material/People";
import LinkIcon from "@mui/icons-material/Link";
import { hundredUser } from "../../dummyData";
// import { FeedIcon, People, Link } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="lists">
          <li>
            <FeedIcon className="icons" />
            <span>Feed</span>
          </li>
          <li>
            <PeopleIcon className="icons" />
            <span>Links</span>
          </li>
          <li>
            <LinkIcon className="icons" />
            <span>Friends</span>
          </li>
        </ul>
        <button className="sidebarButton" type="button">
          Show More
        </button>
        <hr className="sidebarHr" />
        <h4 className="closedFriendHeader">Closed Friends</h4>
        <ul className="sidebarFriendList">
          {hundredUser.map((user) => {
            return (
              <li key={user.id}>
                <img src={user?.profilePicture} alt="pic" />
                <span>{user?.username}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
