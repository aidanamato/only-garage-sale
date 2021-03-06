import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser ($user: userInput!) {
    addUser(user: $user) {
      token
      user {
        _id
      }
    }
  }
`

export const LOGIN = gql`
  mutation login ($email: String!, $password: String!) {
    login (email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`

export const ADD_EVENT = gql`
  mutation ($event: eventInput!) {
    addEvent (event: $event) {
      _id
    }
  }
`;