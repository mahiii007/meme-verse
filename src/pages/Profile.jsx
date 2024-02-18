import "./Profile.css";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";

const Profile = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="profile-container">
        <Sidebar></Sidebar>
        <div className="profileRightContainer">
          <div className="profileRightTop">
            <div className="coverImgContainer">
              <img
                className="coverImg"
                src="assets/cheems.jpg"
                alt="cover_pic"
              />
              <img
                className="profilePicImg"
                src="assets/cheems.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="profileInfoContainer">
              <h4 className="profileName">Cheemps Stark</h4>
              <span className="profileDescription">
                Hey there!!! You just step into a meemer's profile page.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed></Feed>
            <Rightbar profile></Rightbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
