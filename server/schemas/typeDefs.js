const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
     _id:ID
    firstName: String
    lastName: String
    email: String
    password: String
    zipCode: String
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

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(user: userInput!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(_id: ID!): [User]
  }
`;

module.exports = typeDefs;
