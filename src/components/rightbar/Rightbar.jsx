import React from "react";
import meow from "../../Assets/meow.jpeg";
import "./rightbar.scss";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest ActivitiesI</span>{" "}
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <p>
                <span>Jane Doe</span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <p>
                <span>Jane Doe</span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <p>
                <span>Jane Doe</span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <p>
                <span>Jane Doe</span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <p>
                <span>Jane Doe</span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <p>
                <span>Jane Doe</span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <p>
                <span>Jane Doe</span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
            <div className="button">
              <button>Follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={meow} alt="" />
              <div className="online">
                <span>Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
