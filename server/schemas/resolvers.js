const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    }

  },

  Mutation: {
    addUser: async (parent, { user }) => {
    
      return await User.create(user);

    }

  }
};

module.exports = resolvers;
