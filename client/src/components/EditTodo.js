import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_TODO } from "../queries/todoQueries";
import { UPDATE_TODO } from "../mutations/todoMutations";
import { FaPen } from "react-icons/fa";

export default function EditTodo({ todo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [updateTodo] = useMutation(UPDATE_TODO, {
    //variables: { id: todo.id, title, description },
    //refetchQueries: [{ query: GET_TODO, variables: { id: todo.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      return alert("Please fill in the required fields");
    }

    updateTodo(title, description);
  };

  return (
    <>
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#editTodoModal"
        >
          <div className="d-flex align-items-center">
            <FaPen className="icon" />
            <div>Edit</div>
          </div>
        </button>

        <div
          className="modal fade"
          id="editTodoModal"
          aria-labelledby="editTodoModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editTodoModalLabel">
                  New
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Title*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description (optional)</label>
                    <textarea
                      className="form-control"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
