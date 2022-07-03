import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import Header from "./Header";
import Todos from "./Todos";
import TodosHeader from "./TodosHeader";
const TodoApp = () => {
  const handleSubmit = async (values, formikProps) => {
    await saveTodo(values);
    formikProps.resetForm();
    formikProps.setFieldValue("task", "");
  };

  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const res = await axios.get("http://localhost:5000/todos");
    const data = await res.data;

    const newTodos = data.filter((todo) => todo.status !== "completed");

    setTodos(newTodos);
  };

  const saveTodo = async (values) => {
    const savedTodo = await axios.post(
      "http://localhost:5000/todos/createTodo",
      values
    );
    const data = await savedTodo.data;
    const newTodos = [...todos];
    newTodos.push(data);
    setTodos(newTodos);
  };

  const updateTodo = async (todo) => {
    const newTodo = { ...todo, status: "completed" };
    const updatedTodo = await axios.patch(
      "http://localhost:5000/todos/updateTodo",
      newTodo
    );
    const data = await updatedTodo.data;
    console.log("Data", data);
    const newTodos = todos.filter((todo) => todo._id !== newTodo._id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <>
          <Header handleSubmit={handleSubmit} />
          <TodosHeader />
          {todos.length > 0 ? (
            <Todos todos={todos} updateTodo={updateTodo} />
          ) : (
            <div className="no-todo">
              <p className="lead">
                <Icon.XOctagonFill size={30} style={{ marginRight: "5px" }} />
                There is no task
              </p>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default TodoApp;
