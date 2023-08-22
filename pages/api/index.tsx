import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query getData($ids: [ID!]!, $name: String) {
    charactersByIds(ids: $ids) {
      id
      name
      image
      species
      status
      origin {
        name
      }
    }
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        species
        status
        origin {
          name
        }
      }
      info {
        count
        next
        prev
        pages
      }
    }
  }
`;
