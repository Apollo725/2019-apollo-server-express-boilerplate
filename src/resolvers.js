import { Item } from './models/Item';

export const resolvers = {
  Query: {
    hello: () => {
      return "hello";
    }
  },
  Mutation: {
    createItem: async (_, { name }) => {
      const item = new Item({ name });
      await item.save();
      return item;
    }
  }
};
