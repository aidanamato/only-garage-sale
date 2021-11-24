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

  type Image {
    _id: ID
    url: String
  }

  type Tag {
    _id: ID
    name: String
  }

  type Event {
    _id: ID
    title: String
    firstName: String
    lastName: String
    location: String
    startTime: Date
    endTime: Date
    images: [Image]
    tags: [Tag]
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
    firstName: String!
    lastName: String!
    location: String!
    startTime: String!
    endTime: String!
    images: [String]
    tags: [String]
  }

  type Query {
    users: [User]
    events: [Event]
    event(_id: ID!): Event
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
