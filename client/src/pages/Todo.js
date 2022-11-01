import React from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../queries/todoQueries";

export default function Todo() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TODO, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  return <div>Todo</div>;
}
