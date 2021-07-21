import web3 from './web3-provider'
import BestDropsSale from '../contracts/BestDropsSale';

const ethereumCachePeriod = 1000 * 60 * 5;

const getTokenIdOfProduct = (product) => {
    return Number(product.price) * 100 * 1000000 + product.id;
}

const addEthereumInfo = async (products) => {
  var bestDropsSaleContractJson = new web3.eth.Contract(BestDropsSale, '0x70eE878D560D7E17a986872f54B7C58f564B2784');

  if(!global.ethereumCache || Date.now() > ethereumCachePeriod + global.ethereumLastCacheClearTime ){
    global.ethereumCache = {};
    global.ethereumLastCacheClearTime = Date.now();
  }

  return await Promise.all(products.map(async product => {
    const tokenId = getTokenIdOfProduct(product);

    let ethereumInfo = global.ethereumCache[tokenId];

    if(!ethereumInfo) {
      console.log('cache miss for tokenId:'+tokenId);
      const tokenHighestBid = await bestDropsSaleContractJson.methods.tokenHighestBid(tokenId).call();
      const auctionEndTime = await bestDropsSaleContractJson.methods.auctionEndTime(tokenId).call();
      const tokenHighestBidder = await bestDropsSaleContractJson.methods.tokenHighestBidder(tokenId).call();
      ethereumInfo = {tokenHighestBid, auctionEndTime, tokenHighestBidder};
      global.ethereumCache[tokenId] = ethereumInfo;
    }else {
      console.log('cache used for tokenId:'+tokenId);
    }

    const result = { ...product, ...ethereumInfo};
    result.price = Number(result.price);
    result.tokenId = tokenId;
    console.log({result});
    return result;
  }));
}

export default addEthereumInfo;
