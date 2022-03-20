import { connection } from '../db/connection';

export async function createBid(product_id, buyer_id, price) {
  console.log('bid:' + product_id + ' ' + buyer_id + ' ' + price)
  const highestBid = await highestBidOfProduct(product_id);
  if(highestBid){
    if(price <= highestBid.price){
      throw new Error('Price Error');
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
    .select('*', 'user.name as user_name', 'user.profilePhoto as user_avatar')
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

export async function executeBid(user, inputPassword) {
}

export async function returnBid(user, inputPassword) {
}
