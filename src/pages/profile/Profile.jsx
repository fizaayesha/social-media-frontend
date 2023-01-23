import FaceBookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./profile.scss";
import Posts from "../../components/posts/Posts"

const profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTS-mrYXGQZioYPV3SSQZ65nHJCEYIQyyTPg&usqp=CAU"
          alt=""
          className="cover"
        />
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FaceBookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
              <button>Follow</button>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  );
};

export default profile;
