import React from "react";

const Todo = props => {
  return (
    <div>
      <p>{props.list.name}</p>
    </div>
  );
};

export default Todo;
