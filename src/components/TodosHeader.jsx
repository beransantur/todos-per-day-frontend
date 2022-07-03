import React from "react";

const TodosHeader = () => {
  return (
    <div className="todos-header">
      <div className="todo-number">#</div>
      <div className="todo-content">Task</div>
      <div className="todo-day">Day</div>
      <div className="todo-done">Completed</div>
    </div>
  );
};

export default TodosHeader;
