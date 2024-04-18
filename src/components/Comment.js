import React from "react";
import { faker } from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Comment = () => {
  function getRandomPostTime() {
    return Math.floor(Math.random() * 10) + 1 + "h"; //4h
  }
  function getRandomBtnLike() {
    return faker.datatype.boolean() ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartSolid} style={{ color: "red" }} />;
  }

  return (
    <>
      <div className="Comment">
        <div className="Comment-user-profile">
          <img src={faker.image.avatar()} alt="User Comment Profile" />
        </div>
        <div className="Comment-comment">
          <div className="Comment-text">
            <span className="Post-caption-username">{faker.internet.userName()}</span>
            {faker.lorem.words(12)}
          </div>
          <div className="Comment-detail">
            <span>{getRandomPostTime()}</span>
            <span>Reply</span>
          </div>
        </div>
        <div className="Comment-like">{getRandomBtnLike()}</div>
      </div>
      <div className="Comment">
        <div className="Comment-user-profile">
          <img src={faker.image.avatar()} alt="User Comment Profile" />
        </div>
        <div className="Comment-comment">
          <div className="Comment-text">
            <span className="Post-caption-username">{faker.internet.userName()}</span>
            {faker.lorem.words(8)}
          </div>
          <div className="Comment-detail">
            <span>{getRandomPostTime()}</span>
            <span>Reply</span>
          </div>
        </div>
        <div className="Comment-like">{getRandomBtnLike()}</div>
      </div>
      <div className="Comment">
        <div className="Comment-user-profile">
          <img src={faker.image.avatar()} alt="User Comment Profile" />
        </div>
        <div className="Comment-comment">
          <div className="Comment-text">
            <span className="Post-caption-username">{faker.internet.userName()}</span>
            {faker.lorem.words(10)}
          </div>
          <div className="Comment-detail">
            <span>{getRandomPostTime()}</span>
            <span>Reply</span>
          </div>
        </div>
        <div className="Comment-like">{getRandomBtnLike()}</div>
      </div>
    </>
  );
};

export default Comment;
