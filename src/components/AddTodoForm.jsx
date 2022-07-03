import React from "react";
import { Formik, Form, Field } from "formik";

const AddTodoForm = ({ handleSubmit }) => {
  return (
    <>
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
                    data-bs-dismiss="modal"
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
    </>
  );
};

export default AddTodoForm;
