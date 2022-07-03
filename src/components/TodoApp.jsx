import * as Icon from "react-bootstrap-icons";

const TodoApp = () => {
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
                  <div class="input-group mb-3">
                    <label htmlFor="">Task</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div className="dropdown-modal">
                      <label htmlFor="" className="day-selector">
                        Day:
                      </label>
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <span class="dropdown-item" href="#">
                              Action
                            </span>
                          </li>
                          <li>
                            <span class="dropdown-item" href="#">
                              Another action
                            </span>
                          </li>
                          <li>
                            <span class="dropdown-item" href="#">
                              Something else here
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer d-flex w-100 justify-content-between">
                  <button
                    type="button"
                    class="btn btn-secondary m-0"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
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
