import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Formik, Form, Field } from "formik";
import AddTodoForm from "./AddTodoForm";

const Header = ({ handleSubmit }) => {
  return (
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
                Add todo
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <AddTodoForm handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
