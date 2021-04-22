import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUpMutation($name: String!, $email: String!, $password: String!) {
    signUp(input: { name: $name, email: $email, password: $password }) {
      user {
        id
        name
        email
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProductMutation($name: String!, $description: String!, $priceType: String!, $price: String!, $file: String!, $category_id: Int!, $auction_start: Float, $auction_end: Float) {
    createProduct(input: { name: $name, description: $description, sellType: $priceType, price: $price, img_url: $file, category_id: $category_id, auction_start: $auction_start, auction_end: $auction_end }) {
      product {
        id
        name
      }
    }
  }
`;
