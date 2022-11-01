import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_TODOS } from "../queries/todoQueries";
import { DELETE_TODO } from "../mutations/todoMutations";
import { useMutation } from "@apollo/client";

export default function DeleteButton({ todoId }) {
  const navigate = useNavigate();

  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { id: todoId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_TODOS }],
  });

  return (
    <div>
      <button className="delete-button" onClick={deleteTodo}>
        <FaTrash className="icon" />
      </button>
    </div>
  );
}
