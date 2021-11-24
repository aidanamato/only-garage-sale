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
      user = await User.create(user);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent, { _id }) => {
      const deletedUser = await User.findOne({ _id });
      await User.deleteOne({ _id });
      return deletedUser;
    },
    deleteUsers: async () => {
      const deletedUsers = await User.deleteMany({});
      return deletedUsers.deletedCount;
    }
  }
};

module.exports = resolvers;
