import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      title
      description
    }
  }
`;

const GET_TODO = gql`
  query getTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      description
    }
  }
`;

export { GET_TODOS, GET_TODO };
