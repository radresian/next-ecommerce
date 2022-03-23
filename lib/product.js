import { connection } from '../db/connection';
import addEthereumInfo from './product-ethereum'
import { getBidInfo } from './bid'

const getTokenIdOfProduct = (product) => {
  return Number(product.price) * 100 * 1000000 + product.id;
}

const addBidInfo = async (products) => {
  return await Promise.all(products.map(async product => {
    const bidInfoOfPruduct = await getBidInfo(product.id);
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
      .join(
        'product_category',
        'product.id',
        '=',
        'product_category.product_id'
      )
      .join('category', 'category.id', '=', 'product_category.category_id')
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
      .join(
        'product_category',
        'product.id',
        '=',
        'product_category.product_id'
      )
      .join('category', 'category.id', '=', 'product_category.category_id')
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
    const products = await connection('product')
      .join({creator: 'user'}, 'creator.id', 'product.creator_id')
      .join({owner: 'user'}, 'owner.id', 'product.owner_id')
      .select('product.*', 'creator.userName as creator_userName', 'creator.profilePhoto as creator_avatar', 'owner.userName as owner_userName')
      .where('product.id', id);

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
