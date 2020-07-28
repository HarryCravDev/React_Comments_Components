import React from "react";

const ApprovalCard = ({ children }) => {
  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button className="ui basic green button">Approve</button>
          <button className="ui basic red button">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
