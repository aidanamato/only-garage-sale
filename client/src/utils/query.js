import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
  query getEvents{
    events {
      _id
      title
      location
      startTime
      endTime
      images {
        url
      }
      tags {
        name
      }
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query getSingleEvent($_id: ID!) {
    event (_id: $_id) {
      _id
      title
      firstName
      lastName
      location
      description
      startTime
      endTime
      images {
        url
      }
      tags {
        name
      }
    }
  }
`;