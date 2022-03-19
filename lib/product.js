import { connection } from '../db/connection';
import addEthereumInfo from './product-ethereum'

const getTokenIdOfProduct = (product) => {
  return Number(product.price) * 100 * 1000000 + product.id;
}

const addBidInfo = async (products) => {
  return await Promise.all(products.map(async product => {
    const bids = await connection('bid').where('product_id', product.id);
    console.log({bids});
    const firstBid = bids.filter((bid)=>bid.first)[0];
    console.log({firstBid});
    if(firstBid){
      const highestBid = bids.filter((bid)=>bid.highest)[0];
      console.log({highestBid});
      product.tokenHighestBid = highestBid.price;
      product.tokenHighestBidder = highestBid.buyer_id;
      product.auctionEndTime = new Date(firstBid.created_at).getTime() + (1000 * 60 * 60 *24);
    }else {
      product.tokenHighestBid = 0;
      product.tokenHighestBidder = 0;
      product.auctionEndTime = 0;
    }
    product.tokenId = getTokenIdOfProduct(product)
    return product;
  }));
}

export async function listProducts({ sort, category }) {
  if (sort && category) {
    // Sort + Category
    const sortParsed = JSON.parse(JSON.stringify(sort[0]));
    const { field, order } = sortParsed;

    const products = await connection('product')
      .join(
        'product_category',
        'product.id',
        '=',
        'product_category.product_id'
      )
      .join('category', 'category.id', '=', 'product_category.category_id')
      .where('category.name', category)
      .select('product.*')
      .orderBy(field, order);

  } else if (sort) {
    // Sort
    const sortParsed = JSON.parse(JSON.stringify(sort[0]));
    const { field, order } = sortParsed;

    const products = await connection('product').orderBy(field, order);
  } else if (category) {
    // Category
    const products = await connection('product')
      .join(
        'product_category',
        'product.id',
        '=',
        'product_category.product_id'
      )
      .join('category', 'category.id', '=', 'product_category.category_id')
      .where('category.name', category)
      .select('product.*');
  }
  // Default
  const products = await connection('product');

  return addBidInfo(products);

  //return addEthereumInfo(products);
}

export async function findProduct({ id }) {
  const product = await connection('product').whereRaw('id = ?', [id]).first();

  return product;
}

export async function findProductsById({ id }) {
  if (id) {
    const products = await connection('product').where((builder) =>
      builder.whereIn('id', id)
    );
    return addBidInfo(products);

    //return addEthereumInfo(products, false);
  }
  return;
}

export async function CreateProduct(input) {
  const newProduct = {
    name: input.name,
    description: input.description,
    img_url: input.img_url,
    price: parseFloat(input.price),
    sellType: 'auction',
    created_at: Date.now(),
    updated_at: Date.now(),
    creator: input.creator,
    user_id: input.userId
  };

  const trx = await connection.transaction();
  try {
    const insertedProductId = await trx('product').insert(newProduct);
    const product_id = insertedProductId[0];

    await trx('product_category').insert({
      product_id,
      category_id: input.category_id,
    });

    await trx.commit();

    const createdProduct = await findProduct({ id: product_id });

    return createdProduct;
  } catch (error) {
    console.log({error})
    await trx.rollback();

    throw new Error('Server side error to create a new product');
  }
}

export async function DeleteProduct({ id }) {
  await connection('product').whereRaw('id = ?', [id]).del();

  return true;
}

export async function UpdateProduct(id, input) {
  const newProduct = {
    name: input.name,
    description: input.description,
    img_url: input.img_url,
    price: parseFloat(input.price),
    rating: parseFloat(input.rating),
    updated_at: Date.now(),
  };
  const updatedProduct = await connection('product')
    .whereRaw('id = ?', [id])
    .update(newProduct);

  const product = await findProduct({ id: updatedProduct });

  return product;
}
