import { gql } from "@apollo/client";

export const Verify_Token_Query = gql`
query Query($token: String!) {
    VerifyToken(Token: $token) {
      success
      message
      user {
        Email
        Id
      }
    }
  }
`;

