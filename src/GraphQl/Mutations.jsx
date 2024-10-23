import { gql, useMutation } from '@apollo/client';

export const SIGN_UP = gql`
  mutation UserSignUp($data: SignUpData!) {
    UserSignUp(Data: $data) {
      success
      message
      data {
        Phone
        Email
        FullName  
        Id
      }
    }
  }
`;

export const Login_MU = gql`
mutation UserLogin($email: String!, $password: String!) {
    UserLogin(Email: $email, Password: $password) {
      success
      message
      token
      user {
        Phone
        Email
        FullName
        Id
      }
    }
  }
`;
