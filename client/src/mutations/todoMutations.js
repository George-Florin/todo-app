import { gql } from "@apollo/client";

const ADD_TODO = gql`
  mutation addTodo($title: String!, $description: String!) {
    addTodo(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String!, $description: String!) {
    updateTodo(id: $id, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

export { ADD_TODO, DELETE_TODO, UPDATE_TODO };
