import React from "react";

export default () => {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-primary" /> = Success
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Fail
      </p>
      <p>
        <span className="px-3 mr-2 bg-info" /> = Pending
      </p>
    </div>
  );
};
