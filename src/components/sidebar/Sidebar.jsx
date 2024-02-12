import "./Sidebar.css";
import FeedIcon from "@mui/icons-material/Feed";
import PeopleIcon from "@mui/icons-material/People";
import LinkIcon from "@mui/icons-material/Link";
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

        <ul className="sidebarFriendList">
          {new Array(10).fill("_").map((d) => {
            return (
              <li>
                <img src="assets/cheems.jpg" alt="pic" />
                <span>cheemps stark</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
