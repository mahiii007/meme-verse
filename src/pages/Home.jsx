import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="main-container">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </div>
    </div>
  );
};

export default Home;
