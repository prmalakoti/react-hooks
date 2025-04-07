import { LoginContext } from "./Context";
import { useContext } from "react";

const SinglePost = () => {
  const { name } = useContext(LoginContext);
  console.log(`Login context : ${name}`);
};

export default SinglePost;
