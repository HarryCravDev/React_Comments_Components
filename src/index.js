import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./Components/CommentDetail";
import ApprovalCard from "./Components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          name={faker.internet.userName()}
          date={faker.date.weekday()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          name={faker.internet.userName()}
          date={faker.date.weekday()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          img={faker.image.avatar()}
          name={faker.internet.userName()}
          date={faker.date.weekday()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
