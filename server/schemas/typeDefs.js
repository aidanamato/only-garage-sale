const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
     _id:ID
    firstName: String
    lastName: String
    email: String
    password: String
    address: String
  }

  type Query {
    users: [User]

  }

  input userInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    address: String
  }

  type Mutation {
    addUser(user: userInput!): User
  }
`;

module.exports = typeDefs;
