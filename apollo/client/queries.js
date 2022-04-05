import { gql } from '@apollo/client';

export const GET_DRAWER_STATE = gql`
  query isDrawerOpen {
    isDrawerOpen @client
  }
`;

export const SORT_PRODUCT_SECTION = gql`
  query sortProductSection {
    sortProductSection @client
  }
`;

export const CART = gql`
  query cart {
    cart @client {
      products
      cartCount
    }
  }
`;

export const WISHLIST = gql`
  query wishlist {
    wishlist @client {
      products
      wishlistCount
    }
  }
`;

export const CART_COUNT = gql`
  query cart {
    cart @client {
      cartCount
    }
  }
`;

export const WISHLIST_COUNT = gql`
  query wishlist {
    wishlist @client {
      wishlistCount
    }
  }
`;

export const VIEWER = gql`
  query ViewerQuery {
    viewer {
      id
      wallet
      name
      email
      userName
      twitter
      instagram
      creator
      description
      profilePhoto
      coverImage
    }
  }
`;

export const USER = gql`
  query UserQuery($id: Int!) {
    userById(id: $id) {
      id
      wallet
      name
      email
      userName
      twitter
      instagram
      creator
      description
      profilePhoto
      coverImage
    }
  }
`;

export const PRODUCTS = gql`
  query ProductsQuery($field: String!, $order: String!, $category: String) {
    products(sort: { field: $field, order: $order }, category: $category) {
      id
      name
      description
      img_url
      price
      sellType
      creator_id
      owner_id
      tokenId
      tokenHighestBid
      auctionEndTime
      tokenHighestBidder
      creator_userName
    }
  }
`;

export const PRODUCTS_BY_IDS = gql`
  query productsByIds($id: [ID]!) {
    productsById(id: $id) {
      id
      name
      description
      img_url
      price
      sellType
      creator_id
      owner_id
      tokenId
      tokenHighestBid
      auctionEndTime
      tokenHighestBidder
      creator_userName
      creator_avatar
    }
  }
`;

export const PRODUCTS_BY_CREATOR_ID = gql`
  query productsByCreatorId($id: ID!) {
    productsByCreatorId(id: $id) {
      id
      name
      description
      img_url
      price
      sellType
      creator_id
      owner_id
      tokenId
      tokenHighestBid
      auctionEndTime
      tokenHighestBidder
      creator_userName
      creator_avatar
    }
  }
`;

export const PRODUCTS_BY_IDS_PRICE = gql`
  query productsByIds($id: [ID]!) {
    productsById(id: $id) {
      price
    }
  }
`;

export const CATEGORIES = gql`
  query CategoriesQuery {
    categories {
      id
      name
      label
      md_icon
    }
  }
`;

export const BIDS_OF_PRODUCT = gql`
  query BidsOfProduct($product_id: Int!) {
    bidsOfProduct(product_id: $product_id) {
      product_id
      buyer_id
      price
      minted
      returned
      created_at
      user_name
      user_avatar
    }
  }
`;
