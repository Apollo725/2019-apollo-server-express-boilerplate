import { gql } from 'apollo-server-express';

export const resolvers = {
  Query: {
    hello: () => {
      return "hello";
    }
  }
};
