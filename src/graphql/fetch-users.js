import { gql } from "@apollo/client";

// TODO: implement pagination using "after"
export const GET_USERS = gql`
  query getUsers($query: String!, $limit: Int!) {
    search(query: $query, type: USER, first: $limit) {
      userCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      nodes {
        ... on User {
          id
          url
          avatarUrl
          login
          name
          email
          location
          createdAt
          updatedAt
          repositories {
            totalCount
          }
        }
      }
    }
  }
`;
