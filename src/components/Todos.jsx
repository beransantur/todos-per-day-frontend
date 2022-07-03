import Todo from "./Todo";

const Todos = ({ todos, updateTodo }) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} updateTodo={updateTodo} />;
      })}
    </div>
  );
};

export default Todos;
