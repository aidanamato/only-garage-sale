const { AuthenticationError } = require('apollo-server-express');
const { dateScalar } = require('./scalars');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    events: async () => {
      return await Event.find();
    },
    event: async (parent, { _id }) => {
      const event = await Event.findOne({ _id });
      return event;
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
    },
    addEvent: async (parent, args) => {
      console.log(args);
      const event = await Event.create(args.event);
      return event;
    }
  },
  Date: dateScalar
};

module.exports = resolvers;
