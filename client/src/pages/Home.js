import React from "react";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

export default function Home() {
  return (
    <>
      <div>
        <AddTodo />
      </div>
      <Todos />
      <hr />
    </>
  );
}
