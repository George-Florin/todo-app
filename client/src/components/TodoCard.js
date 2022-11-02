import React from "react";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

export default function TodoCard({ todo }) {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="card-container">
              <h2>{todo.title}</h2>
              <br />
              <h5>{todo.description}</h5>
            </div>
            <div className="card-btn-container">
              <Checkbox />
              <a className="view-btn" href={`/todos/${todo.is}`}>
                View
              </a>
              <DeleteButton todoId={todo.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
