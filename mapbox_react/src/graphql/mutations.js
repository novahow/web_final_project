import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $name: String!
    $age: Int!
    $department: String!
    $FB: String
    $IG: String
    $birthday: String
    $photo: String!
  ) {
    createUser(
      data: {
        name: $name
        age: $age
        department: $department
        FB: $FB
        IG: $IG
        birthday: $birthday
        photo: $photo 
      }
    ) {
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