import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    wallet: String
    userName: String
    twitter: String
    instagram: String
    creator: Boolean
    description: String
    profilePhoto: String
    coverImage: String
    created_at: Date!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    img_url: String!
    price: String!
    created_at: Date!
    updated_at: Date!
    creator_id: Int!
    owner_id: Int!
    tokenId:  String!
    tokenHighestBid: String! 
    auctionEndTime: String!
    tokenHighestBidder: String!
    creator_userName: String
    creator_avatar: String
  }
  type Category {
    id: ID!
    name: String!
    label: String!
    md_icon: String!
  }
  type Bid {
    product_id: Int!
    buyer_id: Int!
    price: String!
    minted: Boolean!
    returned: Boolean!
    created_at: Date!
    user_name: String
    user_avatar: String
  }
  input SignUpInput {
    name: String!
    email: String!
    password: String!
  }
  input ProfileInput {
    name: String!
    email: String!
    wallet: String
    userName: String
    twitter: String
    instagram: String
    description: String
    profilePhoto: String
    coverImage: String
  }
  input SignInInput {
    email: String!
    password: String!
  }
  input ProductInput {
    name: String!
    description: String!
    img_url: String!
    price: String!
    category_id: Int!
  }
  input UpdateProductInput {
    name: String!
    description: String!
    img_url: String!
    price: String!
    rating: String!
  }
  type SignUpPayload {
    user: User!
  }
  type SignInPayload {
    user: User!
  }
  type ProductPayload {
    product: Product!
  }
  type BidPayload {
    bid: Bid!
  }
  input Sort {
    field: String!
    order: String! = ASC
  }

  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
    userById(id: Int!): User
    products(sort: [Sort!], category: String): [Product]!
    productsById(id: [ID]): [Product!]
    productsByCreatorId(id: ID): [Product!]
    product(id: ID!): Product
    categories: [Category]!
    bidsOfProduct(product_id: Int!): [Bid]
  }
  type Mutation {
    updateProfile(input: ProfileInput!): SignUpPayload!
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
    createProduct(input: ProductInput!): ProductPayload
    deleteProduct(id: ID!): Boolean!
    updateProduct(id: ID!, input: UpdateProductInput!): ProductPayload
    createBidMut(product_id: Int!, price: String!): BidPayload
  }
`;
