import { findProduct } from '../../../lib/product'

export default async function handler(req, res) {
  const { id } = req.query;

  const product = await findProduct({id});

  const nftMetaData = {
    'description': product.description,
    'external_url': 'https://enefturk.com/product/'+id,
    'image': 'https://enefturk.com'+product.img_url,
    'name': product.name,
    'attributes': []
  }
  res.json(nftMetaData);

}
