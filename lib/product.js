import { connection } from '../db/connection';
import addEthereumInfo from './product-ethereum'
import { getBidInfo, firstBidOfProduct } from './bid'

const getTokenIdOfProduct = (product) => {
  return Number(product.price) * 100 * 1000000 + product.id;
}

const addBidInfo = async (products) => {
  return await Promise.all(products.map(async product => {
    const bidInfoOfPruduct = await getBidInfo(product.id, product);
    product = {...product, ...bidInfoOfPruduct};
    product.tokenId = getTokenIdOfProduct(product);
    return product;
  }));
}

export async function listProducts({ sort, category }) {
  let products;
  if (sort && category) {
    // Sort + Category
    const sortParsed = JSON.parse(JSON.stringify(sort[0]));
    const { field, order } = sortParsed;
    products = await connection('product')
      .join('category', 'category.id', '=', 'product.category_id')
      .join({creator: 'user'}, 'creator.id', 'product.creator_id')
      .join({owner: 'user'}, 'owner.id', 'product.owner_id')
      .where('category.name', category)
      .select('product.*', 'creator.userName as creator_userName', 'owner.userName as owner_userName')
      .orderBy(field, order);


  } else if (sort) {
    // Sort
    const sortParsed = JSON.parse(JSON.stringify(sort[0]));
    const { field, order } = sortParsed;

    products = await connection('product')
      .join({creator: 'user'}, 'creator.id', 'product.creator_id')
      .join({owner: 'user'}, 'owner.id', 'product.owner_id')
      .select('product.*', 'creator.userName as creator_userName', 'owner.userName as owner_userName')
      .orderBy(field, order);

  } else if (category) {
    // Category
    products = await connection('product')
      .join('category', 'category.id', '=', 'product.category_id')
      .join({creator: 'user'}, 'creator.id', 'product.creator_id')
      .join({owner: 'user'}, 'owner.id', 'product.owner_id')
      .where('category.name', category)
      .select('product.*', 'creator.userName as creator_userName', 'owner.userName as owner_userName')

  }else{
    products = await connection('product')
      .join({creator: 'user'}, 'creator.id', 'product.creator_id')
      .join({owner: 'user'}, 'owner.id', 'product.owner_id')
      .select('product.*', 'creator.userName as creator_userName', 'owner.userName as owner_userName')
  }

  return addBidInfo(products);

  //return addEthereumInfo(products);
}

export async function findProduct({ id }) {
  const product = await connection('product').whereRaw('id = ?', [id]).first();
  return product;
}

export async function findProductsById({ id }) {
  if (id) {
    console.log({id})

    const products = await connection('product')
      .join('category', 'category.id', '=', 'product.category_id')
      .join({creator: 'user'}, 'creator.id', 'product.creator_id')
      .join({owner: 'user'}, 'owner.id', 'product.owner_id')
      .select('product.*', 'creator.userName as creator_userName',
        'creator.profilePhoto as creator_avatar',
        'owner.userName as owner_userName',
        'category.id as category_id',
        'category.name as category_name'
      )
      .where('product.id', id);

    console.log({products})
    return addBidInfo(products);

    //return addEthereumInfo(products, false);
  }
  return;
}

export async function findProductsByCreatorId({ id }) {
  if (id) {
    const products = await connection('product')
      .join({creator: 'user'}, 'creator.id', 'product.creator_id')
      .select('product.*', 'creator.userName as creator_userName', 'creator.id as creator_id')
      .where('creator.id', id);

    return addBidInfo(products);

    //return addEthereumInfo(products, false);
  }
  return;
}

export async function findProductsByBuyerId({ id }) {
  if (id) {
    const products = await connection('product')
      .join({buyer: 'user'}, 'buyer.id', 'product.owner_id')
      .select('product.*', 'buyer.userName as buyer_userName', 'buyer.id as buyer_id')
      .where('buyer.id', id);

    return addBidInfo(products);

    //return addEthereumInfo(products, false);
  }
  return;
}

export async function checkProduct(id, user) {
  if(!id){
    return;
  }
  const product = await findProduct({id});
  if(!product){
    return;
  }

  if(product.creator_id !== Number(user.id)){
    throw 'permission denied'
  }

  const firstBid = await firstBidOfProduct(id);
  if(firstBid){
    throw 'item in sell, can not be changed anymore'
  }
  return product;
}


export async function CreateProduct(input) {
  const newProduct = {
    name: input.name,
    description: input.description,
    img_url: input.img_url,
    price: parseFloat(input.price),
    sellType: input.sellType,
    creator_id: input.userId,
    owner_id: input.userId,
    category_id: input.category_id
  };
  const insertedProductId = await connection('product').insert(newProduct);
  const product_id = insertedProductId[0];
  const createdProduct = await findProduct({ id: product_id });
  return createdProduct;
}

export async function DeleteProduct({ id }) {
  await connection('product').whereRaw('id = ?', [id]).del();

  return true;
}

export async function UpdateProduct(input) {
  const newProduct = {
    name: input.name,
    description: input.description,
    img_url: input.img_url,
    price: parseFloat(input.price),
    sellType: input.sellType,
    updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
    category_id:input.category_id
  };
  await connection('product')
  .where('id', input.id)
  .update(newProduct);
  const product = await findProduct({ id: input.id });
  return product;
}

export async function setOwnerOfProduct(product_id, owner_id) {
  await connection('product')
    .where('id', product_id)
    .update({owner_id});
}
