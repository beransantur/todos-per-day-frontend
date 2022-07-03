const TodoApp = () => {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <div className="header">
          <h1>Todos per day</h1>
          <button>Add new todo</button>
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
