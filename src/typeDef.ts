import { gql } from 'apollo-server'

const typeDef = gql`
  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
    startCursor: String!
    endCursor: String!
  }
`

export { typeDef }
