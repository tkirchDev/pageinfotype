import { gql } from "apollo-server";

const typeDef = gql`
  type PageInfo {
    nodesPerPage: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    currentPage: Int!
    lastPage: Int!
  }
`;

export { typeDef };
