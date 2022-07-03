import * as Icon from "react-bootstrap-icons";

const Todo = ({ todo, index, updateTodo }) => {
  let specialClassName = "todo";
  if (index % 2 !== 0) {
    specialClassName += " striped";
  }

  return (
    <>
      {todo.status === "alive" ? (
        <div className={specialClassName}>
          <div className="todo-number">{index + 1}</div>
          <div className="todo-content">{todo.task}</div>
          <div className="todo-day">{todo.day}</div>
          <div className="todo-done">
            <Icon.Check2Square
              size={40}
              className="done-icon"
              color={"green"}
              style={{ cursor: "pointer" }}
              onClick={() => {
                updateTodo(todo);
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Todo;
