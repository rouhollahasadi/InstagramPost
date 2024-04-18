import React from "react";
import { faker } from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import Comment from "./Comment";

const Post = (props) => {
  // const randomName = faker.person.fullName(); // Rowan Nikolaus
  //const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  //let username = faker.internet.userName(); //تولید یوزرنیم رندوم
  let username = props.username;
  console.log(props)
  function getRandomPostTime() {
    return Math.floor(Math.random() * 10) + 1 + "h"; //4h
  }
  function getRandomBtnLike() {
    return faker.datatype.boolean() ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartSolid} style={{ color: "red" }} />;
  }

  return (
    <div className="Post">
      <div className="Post-header">
        <div className="Post-header-profile-image">
          <img src={props.image} alt="Post Profile " />
        </div>
        <div className="Post-header-username">{username}</div>
        <div className="Post-header-more-btn">{<FontAwesomeIcon icon={faEllipsisV} />}</div>
      </div>
      <div className="Post-image">
        <img src={faker.image.urlPicsumPhotos()} alt="Post " />
      </div>
      <div className="Post-caption">
        <span className="Post-caption-username">{username}</span>
        {faker.lorem.words(4)}
        <div className="Post-caption-time">{getRandomPostTime()} </div>
      </div>
      <div className="Post-comments">
        <Comment />
      </div>
    </div>
  );
};

export default Post;
