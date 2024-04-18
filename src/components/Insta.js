import "./insta.css";
import Post from "./Post";
import USER_IMG from '../images/myavatar.png'


const Insta = (props) => {
  return (
    <div>
      <Post username="Rouhollah" image={USER_IMG}/>
    </div>
  );
};

export default Insta;
