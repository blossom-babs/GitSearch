import { gql } from "@apollo/client";

export const USER_DATA = gql`
  query($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      login
      bio
      location
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories {
        totalCount
      }
      topRepositories(
        last: 10
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          name
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
          description
        }
      }
    }
  }
`;
