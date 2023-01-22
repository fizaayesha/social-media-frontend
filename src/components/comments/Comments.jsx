import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dash lorem ipsum adsh whsta is this behaviour sir i am not getting anuthing",
      name: "Ayess jain",
      useId: 1,
      profilePic:
        "https://images.ctfassets.net/hrltx12pl8hq/6czYVzKLCtCAjcfDc6Q9h2/b268534ee924bcd993e530919d5f96d1/Holiday-Look-Book_Thumb.jpg?fit=fill&w=480&h=270",
    },
    {
      id: 2,
      desc: "Lorem ipsum dash lorem ipsum adsh whsta is this behaviour sir i am not getting anuthing",
      name: "Lisa desuza",
      useId: 2,
      profilePic:
        "https://images.ctfassets.net/hrltx12pl8hq/6czYVzKLCtCAjcfDc6Q9h2/b268534ee924bcd993e530919d5f96d1/Holiday-Look-Book_Thumb.jpg?fit=fill&w=480&h=270",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser?.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="data">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;