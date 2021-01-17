import { gql } from '@apollo/client'

export const USERS_QUERY = gql`
  query {
    users(query: {department: null}) {
      id
      name
      age
      department
      FB
      IG
      birthday
      popularity
      photo
    }
  }
`