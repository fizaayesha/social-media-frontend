import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  // QueryClient,
  // QueryClientProvider,
} from "@tanstack/react-query";
import moment from "moment";
const Comments = ({ postId }) => {
  const [descrip, setDescrip] = useState("");
  const { currentUser } = useContext(AuthContext);
  const fetchPosts = async () => {
    const response = await makeRequest.get("/comments?postId=" + postId);
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["comments"], fetchPosts);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );
  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ descrip, postId });
    // mutation.mutate({ descrip });
    setDescrip("");
  };
  const handleChange = async (e) => {
    let descrip = e.target.value;
    setDescrip(descrip);
  };
  return (
    <div className="comments">
      <div className="write">
      <img src={"/upload/" + currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={descrip}
          onChange={handleChange}
        />
        <button onClick={handleClick} >Send</button>
      </div>
      {
      error
      ?
      "Something went wrong":
      isLoading
        ? "Loading"
        : data.map((comment) => (
            <div className="comment">
              <img src={comment?.profilePic} alt="" />
              <div className="info">
                <span>{comment?.name}</span>
                <p>{comment?.descrip}</p>
              </div>
              <span className="date">
                {moment(comment?.createdAt).fromNow}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;