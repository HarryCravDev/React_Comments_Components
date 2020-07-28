import React from "react";

const CommentDetail = ({ img, name, date, text }) => {
  return (
    <div className="comment">
      {/* Avatar */}
      <a href="#" className="avatar">
        <img src={img} alt="#" />
      </a>
      <div className="content">
        {/* Author Name */}
        <a href="#" className="author">
          {name}
        </a>
        <div className="metadata">
          {/* Time */}
          <span className="date">{date}</span>
        </div>
        {/* Information - Text */}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
