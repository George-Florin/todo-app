import React from "react";
import DeleteButton from "./DeleteButton";

export default function TodoCard({ todo }) {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-body">
            <h5>{todo.title}</h5>
            <a href={`/todos/${todo.is}`}>View</a>
            <DeleteButton todoId={todo.id} />
            <p className="small">{todo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
