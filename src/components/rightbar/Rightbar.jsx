import "./Rightbar.css";
import {
  Celebration,
  Home,
  LocationCity,
  Favorite,
  CalendarMonth,
  CakeOutlined,
} from "@mui/icons-material";
import { hundredUser } from "../../dummyData";

const HomeRightbar = () => {
  return (
    <>
      <div className="birthday-container">
        <Celebration className="celebration-icon" htmlColor="goldenrod" />
        <span className="birthday-text">
          <b>xyz</b> and <b>3 others</b> have their birtdays today.
        </span>
      </div>
      <h4 className="onlineFriendHeader">Online Friends</h4>
      <ul className="onlineFriendsList">
        {hundredUser.map((user) => {
          return (
            <li className="onlineFriend">
              <div className="onlineFriendContainer">
                <img
                  className="onlineFriendsImg"
                  src={user?.profilePicture}
                  alt=""
                />
                <span className="onlineFriendMarker"></span>
              </div>
              <span className="onlineFriendName">{user.username}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <div className="userInfo">
        <ul className="userInfoList">
          <li className="userInfoListItem">
            <LocationCity className="profInfoIcon"></LocationCity>
            <span className="current-location">
              Lives in <b>Bengaluru, India</b>
            </span>
          </li>
          <li className="userInfoListItem">
            <Home className="profInfoIcon"></Home>
            <span className="native-location">
              From <b>Cheemps-World</b>
            </span>
          </li>

          <li className="userInfoListItem">
            <Favorite className="profInfoIcon"></Favorite>
            <span className="relationship">Single</span>
          </li>
          <li className="userInfoListItem">
            <CalendarMonth className="profInfoIcon" />
            <span className="joiningDate">Joined on February 2024</span>
          </li>
          <li className="userInfoListItem">
            <CakeOutlined className="profInfoIcon" />
            <span className="dob">Born on February 1998</span>
          </li>
        </ul>
      </div>
      <h4 className="FriendsHeading">Friends </h4>
      <div className="friendList">
        {hundredUser.map((user) => {
          return (
            <div className="friendcard" key={user?.id}>
              <img className="personPic" src={user?.profilePicture} alt="" />
              <span className="personName">{user?.username}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
