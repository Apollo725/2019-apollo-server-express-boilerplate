import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String!
  }
  type Item {
    id: ID!
    name: String!
  }
  type Mutation {
    createItem( name: String! ): Item
  }
`;