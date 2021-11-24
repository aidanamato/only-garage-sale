const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

  type User {
     _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    zipCode: String
  }

  type Event {
    _id: ID
    title: String
    location: String
    startTime: Date
    endTime: Date
    images: [String]
    tags: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  input userInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    zipCode: String
  }

  input eventInput {
    title: String!
    location: String!
    startTime: String!
    endTime: String!
    images: [String]
    tags: [String]
  }

  type Query {
    users: [User]
    events: [Event]
  }

  type Mutation {
    addUser(user: userInput!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(_id: ID!): User
    deleteUsers: Int
    addEvent(event: eventInput!): Event
  }
`;

module.exports = typeDefs;
