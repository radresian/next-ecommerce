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
  mutation CreateProductMutation($name: String!, $description: String!, $price: String!, $file: String!, $category_id: Int!) {
    createProduct(input: { name: $name, description: $description, price: $price, img_url: $file, category_id: $category_id }) {
      product {
        id
        name
      }
    }
  }
`;

export const CREATE_BID = gql`
  mutation CreateBidMutation($product_id: Int!, $price: String!) {
    createBidMut(product_id:$product_id, price: $price) {
      bid {
        created_at
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfileMutation($name: String!, $description: String!, $userName: String!, $email: String!, $wallet: String!, $twitter: String!, $instagram: String!, $profilePhoto: String!, $coverImage: String!) {
    updateProfile(input: { name: $name, description: $description, userName: $userName, email: $email, wallet: $wallet, twitter: $twitter, instagram: $instagram, profilePhoto: $profilePhoto, coverImage: $coverImage }) {
      user {
        userName
      }
    }
  }
`;
