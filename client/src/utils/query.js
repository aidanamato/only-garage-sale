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