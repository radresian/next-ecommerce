import { connection } from '../db/connection';
import mint from './NftMinter';
import { findUser } from './user';
import { findProduct, setOwnerOfProduct } from './product';

export async function createBid(product_id, buyer_id, price) {
  const dbProduct = await findProduct({id:product_id});
  const product = await getBidInfo(product_id, dbProduct);

  if(product.sellType === 'fixed'){
    const user = await findUser({id:buyer_id});
    await mint(user.wallet, product_id);
    await setOwnerOfProduct(product_id, buyer_id);
    price = product.price;
  }else if (product.sellType === 'auction') {
    if (product.tokenHighestBidder === Number(buyer_id)) {
      throw new Error('You are already the highest bidder');
    }

    if (product.auctionEndTime !== 0 && product.auctionEndTime < Date.now()) {
      throw new Error('Auction Ended');
    }

    if (product.tokenHighestBid) {
      if (price <= product.tokenHighestBid) {
        throw new Error('Price is lower than highest bid');
      }
    }
  }
  // TODO: payment

  const bid = {
    product_id,
    buyer_id,
    price,
  };

  await connection('bid').insert(bid);

  return Date.now().toLocaleString();
}


export async function bidsOfProduct(product_id, order = 'desc') {

  const bids = await connection('bid')
    .select('*')
    .where('product_id', product_id)
    .orderBy('price', order)
  return bids;
}

export async function bidsOfProductWithUser(product_id, order = 'desc') {

  const bids = await connection('bid')
    .join('user','user.id', '=', 'bid.buyer_id')
    .select('*', 'user.userName as user_name', 'user.profilePhoto as user_avatar')
    .where('product_id', product_id)
    .orderBy('price', order)
  return bids;
}


export async function firstBidOfProduct(product_id) {
  const bids = await bidsOfProduct(product_id, 'asc');
  return bids[0];
}

export async function highestBidOfProduct(product_id) {
  const bids = await bidsOfProduct(product_id);
  return bids[0];
}

export async function getBidInfo(product_id, dbProduct){
  const firstBid = await firstBidOfProduct(product_id);
  const product = {...dbProduct};
  if(firstBid){
    const highestBid = await highestBidOfProduct(product_id);
    product.tokenHighestBid = highestBid.price;
    product.tokenHighestBidder = highestBid.buyer_id;
    if(dbProduct.sellType === 'auction'){
      product.auctionEndTime = new Date(firstBid.created_at).getTime() + (1000 * 60 * 60 *24);
    }else if(dbProduct.sellType === 'fixed') {
      product.auctionEndTime = 1;
    }
  }else {
    product.tokenHighestBid = 0;
    product.tokenHighestBidder = 0;
    product.auctionEndTime = 0;
  }
  return product;
}
export async function executeBid(user, inputPassword) {
}

export async function returnBid(user, inputPassword) {
}
