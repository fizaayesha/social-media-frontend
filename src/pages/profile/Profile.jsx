import React from "react";
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
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
// import Update from "../../components/update/Update";
import { useState } from "react";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  const handleFollow = () => {

  };
  // console.log(typeof currentUser.id);
  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img src={data.coverPic} alt="" className="cover" />
            <img src={data.profilePic} alt="" className="profilePic" />
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
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data.city} </span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{data.website}</span>
                  </div>
                  {userId === currentUser.id ? (
                    <button>Update</button>
                  ) : (
                    <button onClick={handleFollow}>Follow</button>
                  )}
                </div>
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
          </div>{" "}
        </>
      )}
      <Posts />
    </div>
  );
};

export default Profile;
