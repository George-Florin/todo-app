import React from "react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TODO } from "../mutations/todoMutations";
import { GET_TODOS } from "../queries/todoQueries";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    variables: { title, description },
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [...todos, addTodo] },
      });
    },
  });

  const { loading, error } = useQuery(GET_TODOS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      return alert("Please fill in all the fields");
    }

    addTodo(title, description);

    setTitle("");
    setDescription("");
  };

  if (loading) return null;
  if (error) return <p>Error</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addTodoModal"
          >
            <div className="d-flex align-items-center">
              <FaPlus className="icon" />
              <div>Add</div>
            </div>
          </button>

          <div
            className="modal fade"
            id="addTodoModal"
            aria-labelledby="addTodoModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addTodoModalLabel">
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
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Description (optional)
                      </label>
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
      )}
    </>
  );
}
