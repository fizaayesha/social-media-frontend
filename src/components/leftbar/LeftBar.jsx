import React from "react";
import "./leftbar.scss";
import meow from "../../Assets/meow.jpeg";

function LeftBar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={meow} alt="" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={meow} alt="" /> {/* friends */}
            <span>Memories</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
