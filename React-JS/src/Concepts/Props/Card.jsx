import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="bg-green-200 border border-gray-400">
        Author : {props.authorName}                                       <br/>
        Title  : {props.title}
      </div>
    </>
  );
};

export default Card;
