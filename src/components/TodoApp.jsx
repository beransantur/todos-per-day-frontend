import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import Todo from "./Todo";
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
          <div className="header">
            <h1>Todos per day</h1>
            {/* ADD-TASK-BTN */}
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="add-task-button"
            >
              <Icon.PlusSquareFill
                size={45}
                color={"grey"}
                style={{ cursor: "pointer" }}
              />{" "}
            </button>

            {/* MODAL */}
            <div
              className="modal fade add-todo"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <Formik
                      initialValues={{ selectedDay: "", task: "" }}
                      onSubmit={handleSubmit}
                    >
                      {(formik) => {
                        return (
                          <div>
                            <Form>
                              <div class="input-group mb-3">
                                <label htmlFor="">Task</label>
                                <Field name="task" class="form-control" />
                              </div>
                              <div>
                                <label className="day-selector">Day:</label>
                                <Field
                                  as="select"
                                  class="form-select input-sm"
                                  name="selectedDay"
                                >
                                  <option value="" selected={true}>
                                    Select a day
                                  </option>
                                  <option value="Monday">Monday</option>
                                  <option value="Tuesday">Tuesday</option>
                                  <option value="Wednesday">Wednesday</option>
                                  <option value="Thursday">Thursday</option>
                                  <option value="Friday">Friday</option>
                                  <option value="Saturday">Saturday</option>
                                  <option value="Sunday">Sunday</option>
                                </Field>
                              </div>
                              <div class="modal-footer d-flex w-100 justify-content-between p-0 pt-2 pb-2 m-0">
                                <button
                                  type="button"
                                  class="btn btn-secondary m-0"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  class="btn btn-primary"
                                  disabled={
                                    formik.values.selectedDay === "" ||
                                    formik.values.task === ""
                                  }
                                >
                                  Save changes
                                </button>
                              </div>
                            </Form>
                          </div>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="todos-header">
            <div className="todo-number">#</div>
            <div className="todo-content">Task</div>
            <div className="todo-day">Day</div>
            <div className="todo-done">Not done</div>
          </div>
          {todos.length > 0 ? (
            <div className="todos">
              {todos.map((todo, index) => {
                return (
                  <Todo todo={todo} index={index} updateTodo={updateTodo} />
                );
              })}
            </div>
          ) : (
            <div className="no-todo">There is no task</div>
          )}
        </>
      </div>
    </div>
  );
};

export default TodoApp;
