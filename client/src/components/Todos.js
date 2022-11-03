import React from "react";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import TodoCard from "./TodoCard";
import { GET_TODOS } from "../queries/todoQueries";

export default function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  return (
    <>
      {data.todos.length > 0 ? (
        <div className="row mt-4">
          {data.todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <p className="no-tasks">No tasks</p>
      )}
    </>
  );
}
