import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <FaExclamationTriangle />
      <h1>404</h1>
      <p>This page does not exist</p>
      <Link to="/">Back</Link>
    </div>
  );
}
