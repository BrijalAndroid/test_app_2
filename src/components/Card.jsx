import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
        <img src={user.avtar} alt="" className="card-img-top"/>
      <div className="card-body">
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Company : {user.company}</p>
      </div>
    </div>
  );
};

export default Card;
