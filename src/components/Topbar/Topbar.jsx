import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";
import NotificationIcon from "@mui/icons-material/Notifications";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <span className="logo">MEMEVERSE</span>
      </div>
      <div className="center">
        <div className="search-box">
          <SearchIcon className="search-icon" />
          <input type="text" className="search-input"></input>
        </div>
      </div>
      <div className="right">
        <div className="links">
          <span>Home</span>
          <span>Timeline</span>
        </div>
        <div className="icon-container">
          <div className="items">
            <MessageIcon className="icon" />
            <span className="badge">1</span>
          </div>
          <div className="items">
            <PeopleIcon className="icon" />
            <span className="badge">1</span>
          </div>
          <div className="items">
            <NotificationIcon className="icon" />
            <span className="badge">1</span>
          </div>
        </div>

        <img className="image" alt="profile" src="assets/cheems.jpg"></img>
      </div>
    </div>
  );
};

export default Topbar;
