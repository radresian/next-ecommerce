import web3 from './web3-provider'
import BestDropsSale from '../contracts/BestDropsSale';

const getTokenIdOfProduct = (product) => {
    return Number(product.price) * 100 * 1000000 + product.id;
}

const addEthereumInfo = async (products) => {
  var bestDropsSaleContractJson = new web3.eth.Contract(BestDropsSale, '0x70eE878D560D7E17a986872f54B7C58f564B2784');

  return await Promise.all(products.map(async product => {
    const tokenId = getTokenIdOfProduct(product);
    const tokenHighestBid = await bestDropsSaleContractJson.methods.tokenHighestBid(tokenId).call();
    const auctionEndTime = await bestDropsSaleContractJson.methods.auctionEndTime(tokenId).call();
    const tokenHighestBidder = await bestDropsSaleContractJson.methods.tokenHighestBidder(tokenId).call();

    const result = { ...product, tokenHighestBid, auctionEndTime, tokenHighestBidder};
    result.price = Number(result.price);
    result.tokenId = tokenId;
    console.log({result});
    return result;
  }));
}

export default addEthereumInfo;
