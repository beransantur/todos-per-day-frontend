import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

const TodoApp = () => {
  const handleSubmit = (values, formikProps) => {
    formikProps.resetForm();
    formikProps.setFieldValue("task", "");
  };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
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
                      console.log(formik.values);
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

        <div className="todos">
          <div className="todo">
            <div className="todo-number">1</div>
            <div className="todo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              iure! Animi, reprehenderit ipsam eveniet, veritatis nostrum esse
              earum libero quis reiciendis molestias ut natus rem nulla?
              Voluptates, asperiores quos harum magni quae perspiciatis
              repudiandae? Iusto suscipit accusamus nostrum accusantium,
              temporibus aut possimus modi cumque esse ab aliquid, quasi nemo
              dolorem?
            </div>
            <div className="todo-day">Wednesday</div>
            <div className="todo-done">
              <Icon.Check2Square
                size={40}
                color={"green"}
                style={{ cursor: "pointer" }}
              />
            </div>{" "}
          </div>{" "}
          <div className="todo striped">
            <div className="todo-number">1</div>
            <div className="todo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              iure! Animi, reprehenderit ipsam eveniet, veritatis nostrum esse
              earum libero quis reiciendis molestias ut natus rem nulla?
              Voluptates, asperiores quos harum magni quae perspiciatis
              repudiandae? Iusto suscipit accusamus nostrum accusantium,
              temporibus aut possimus modi cumque esse ab aliquid, quasi nemo
              dolorem?
            </div>
            <div className="todo-day">Wednesday</div>
            <div className="todo-done">
              <Icon.Check2Square
                size={40}
                color={"green"}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>{" "}
          <div className="todo">
            <div className="todo-number">1</div>
            <div className="todo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              iure! Animi, reprehenderit ipsam eveniet, veritatis nostrum esse
              earum libero quis reiciendis molestias ut natus rem nulla?
              Voluptates, asperiores quos harum magni quae perspiciatis
              repudiandae? Iusto suscipit accusamus nostrum accusantium,
              temporibus aut possimus modi cumque esse ab aliquid, quasi nemo
              dolorem?
            </div>
            <div className="todo-day">Wednesday</div>
            <div className="todo-done">Not done</div>
          </div>{" "}
          <div className="todo striped">
            <div className="todo-number">1</div>
            <div className="todo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              iure! Animi, reprehenderit ipsam eveniet, veritatis nostrum esse
              earum libero quis reiciendis molestias ut natus rem nulla?
              Voluptates, asperiores quos harum magni quae perspiciatis
              repudiandae? Iusto suscipit accusamus nostrum accusantium,
              temporibus aut possimus modi cumque esse ab aliquid, quasi nemo
              dolorem?
            </div>
            <div className="todo-day">Wednesday</div>
            <div className="todo-done">Not done</div>
          </div>{" "}
          <div className="todo">
            <div className="todo-number">1</div>
            <div className="todo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              iure! Animi, reprehenderit ipsam eveniet, veritatis nostrum esse
              earum libero quis reiciendis molestias ut natus rem nulla?
              Voluptates, asperiores quos harum magni quae perspiciatis
              repudiandae? Iusto suscipit accusamus nostrum accusantium,
              temporibus aut possimus modi cumque esse ab aliquid, quasi nemo
              dolorem?
            </div>
            <div className="todo-day">Wednesday</div>
            <div className="todo-done">Not done</div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
