import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <FaExclamationTriangle className="error" />
      <h1>404</h1>
      <p>This page does not exist</p>
      <Link to="/" className="back-btn">
        Back
      </Link>
    </div>
  );
}
