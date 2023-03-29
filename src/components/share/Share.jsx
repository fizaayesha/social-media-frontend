import React from "react";
import Image from "../../Assets/loginbg.jpeg";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import "./share.scss";
import {
  // useQuery,
  useMutation,
  useQueryClient,
  // QueryClient,
  // QueryClientProvider,
} from "@tanstack/react-query";

const Share = () => {
  const [file, setFile] = useState(null);
  const [descrip, setDescrip] = useState("");
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) {
      imgUrl = await upload();
    }
    mutation.mutate({ descrip, img: imgUrl });
    setDescrip("");
    setFile(null);
    // mutation.mutate({ descrip });
  };
  const handleChange = async (e) => {
    let descrip = e.target.value;
    setDescrip(descrip);
  };
  //  <input type = "text" onChange = {handleChange} value ={value}/>
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser?.profilePic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser?.name}?`}
              // onChange={(e) => setDescrip[e.target.value]}
              onChange={handleChange}
              value={descrip}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />

        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile[e.target.files[0]]}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Image} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Image} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
 